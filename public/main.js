/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, './blogPosts');

const postlist = [];

const slugList = [];

const slugify = (title) => {
	let slug = title.toLowerCase().trim().split(' ').join('-');

	if (slugList.includes(slug)) {
		let duplicateSlug = slug;
		for (let i = 1; slugList.includes(duplicateSlug); i += 1) {
			duplicateSlug = `${slug}-${i}`;
		}
		slug = duplicateSlug;
	}
	slugList.push(slug);
	return slug;
};

const getPosts = () => {
	fs.readdir(dirPath, (err, files) => {
		if (err) {
			return console.log(`Failed to list contents of directory: ${err}`);
		}
		const ilist = [];
		files.forEach((file, i) => {
			const obj = {};
			let post;
			fs.readFile(`${dirPath}/${file}`, 'utf8', (error, contents) => {
				const getMetadataIndices = (acc, elem, ind) => {
					if (/^---/.test(elem)) {
						acc.push(ind);
					}
					return acc;
				};
				const parseMetadata = ({ lines, metadataIndices }) => {
					if (metadataIndices.length > 0) {
						const metadata = lines.slice(
							metadataIndices[0] + 1,
							metadataIndices[1]
						);
						metadata.forEach((line) => {
							obj[line.split(': ')[0]] = line.split(': ')[1];
						});
						return obj;
					}
				};
				const parseContent = ({ lines, metadataIndices }) => {
					if (metadataIndices.length > 0) {
						lines = lines.slice(metadataIndices[1] + 1, lines.length);
					}
					return lines.join('\n');
				};
				const lines = contents.split('\n');
				const metadataIndices = lines.reduce(getMetadataIndices, []);
				const metadata = parseMetadata({ lines, metadataIndices });
				const content = parseContent({ lines, metadataIndices });

				const parsedDate = metadata.date
					? new Date(metadata.date.replace('\r', ''))
					: new Date();
				const publishedDate = parsedDate.toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				});
				const time = parsedDate.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				});

				post = {
					slug: slugify(metadata.title),
					id: parsedDate.getTime(),
					title: metadata.title ? metadata.title : 'No title given',
					author: metadata.author ? metadata.author : 'No author given',
					date: publishedDate || 'No date given',
					time: time || 'No time given',
					thumbnail: metadata.thumbnail.replace('\r', ''),
					content: content || 'No content given',
					timestamp: metadata.date.replace('\r', ''),
				};
				postlist.push(post);
				ilist.push(i);
				if (ilist.length === files.length) {
					const sortedList = postlist.sort((a, b) => (a.id < b.id ? 1 : -1));
					const data = JSON.stringify(sortedList);
					fs.writeFileSync('src/posts.json', data);
				}
			});
		});
	});
};

getPosts();
