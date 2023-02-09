/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, '../posts');
const dirPathPages = path.join(__dirname, '../src/pages/content');
const postlist = [];
const pagelist = [];

const months = {
	'01': 'January',
	'02': 'February',
	'03': 'March',
	'04': 'April',
	'05': 'May',
	'06': 'June',
	'07': 'July',
	'08': 'August',
	'09': 'September',
	10: 'October',
	11: 'November',
	12: 'December',
};

const formatDate = date => {
	const datetimeArray = date.split('T');
	const dateArray = datetimeArray[0].split('-');
	const timeArray = datetimeArray[1].split(':');
	const month = dateArray[1];
	const monthName = months[dateArray[1]];
	const day = dateArray[2];
	const year = dateArray[0];
	const time = `${timeArray[0]}:${timeArray[1]}`;

	return {
		month,
		monthName,
		day,
		year,
		time,
	};
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
						metadata.forEach(line => {
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
					? formatDate(metadata.date)
					: new Date();
				const publishedDate = `${parsedDate.monthName} ${parsedDate.day}, ${parsedDate.year}`;
				const datestring = `${parsedDate.year}-${parsedDate.month}-${parsedDate.day}T${parsedDate.time}:00`;
				const date = new Date(datestring);
				const timestamp = date.getTime() / 1000;
				post = {
					id: timestamp,
					title: metadata.title ? metadata.title : 'No title given',
					author: metadata.author ? metadata.author : 'No author given',
					date: publishedDate || 'No date given',
					time: parsedDate.time,
					thumbnail: metadata.thumbnail,
					content: content || 'No content given',
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

const getPages = () => {
	fs.readdir(dirPathPages, (err, files) => {
		if (err) {
			return console.log(`Failed to list contents of directory: ${err}`);
		}
		files.forEach(file => {
			let page;
			fs.readFile(`${dirPathPages}/${file}`, 'utf8', (error, contents) => {
				page = {
					content: contents,
				};
				pagelist.push(page);
				const data = JSON.stringify(pagelist);
				fs.writeFileSync('src/pages.json', data);
			});
		});
	});
};

getPosts();
getPages();
