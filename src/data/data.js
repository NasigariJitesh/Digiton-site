import aboutUs from '../assets/images/about/about-us.svg';
import cloudSolutionAboutTab from '../assets/images/about/cloud-solution.svg';
import itManagementAboutTab from '../assets/images/about/it-management.svg';
import ourExpertise from '../assets/images/about/our-expertise.svg';
import ourMission from '../assets/images/about/our-mission.svg';
import ourTeam from '../assets/images/about/our-team.svg';
import ourValues from '../assets/images/about/our-values.svg';
import ourVision from '../assets/images/about/our-vision.svg';
import productDevelopmentAboutTab from '../assets/images/about/product-development.svg';
import staffingSolutionsAboutTab from '../assets/images/about/staffing-solutions.svg';
import logo from '../assets/images/logos/logo.png';
import banking from '../assets/images/portfolio/banking.jpg';
import healthCare from '../assets/images/portfolio/health-care.jpg';
import hospitality from '../assets/images/portfolio/hospitality.jpg';
import retail from '../assets/images/portfolio/retail.jpg';
import logistics from '../assets/images/portfolio/warehouse-logistics.jpg';
import customSolution from '../assets/images/team/custom-solution.svg';
import partner from '../assets/images/team/partner.svg';
import qualityService from '../assets/images/team/quality-service.svg';
import reliableSupport from '../assets/images/team/reliable-support.svg';

export const home = {
	banner: {
		caption: 'Harnessing IT Managed Innovation',
		title: 'To Create Smarter Staffing Solutions',
	},
	whatWeDo: {
		title: `What We Do`,
		description: `Transform Your Business To The Digital Age\nWith Our Expertise`,
		contents: [
			{
				title: 'IT Managed Service',
				link: '/services/it-managed-service',
				description:
					'The future is here – and it starts with a digital transformation from the best.',
				iconName: 'flaticon flaticon-web-maintenance',
			},
			{
				title: 'Staffing Solutions',
				description: `Filling the IT gap in your business? With us, it's easy and hassle-free!`,
				iconName: 'flaticon flaticon-software-development',
				link: '/services/staffing-solutions',
			},
			{
				title: 'Product Development',
				description: `Discover innovation with Digiton's product development services!`,
				iconName: 'flaticon flaticon-web-development-4',
				link: '/services/product-development',
			},
		],
	},
	about: {
		title: 'IT Support For Business',
		heading:
			'At Digiton Solutions, we provide comprehensive IT support services for businesses of any scale.',
		description: `Our knowledgeable and experienced technicians are dedicated to providing you with the highest quality IT service to ensure your business's success.`,
		bottomLine: `With our round-the-clock support, responsive assistance and extensive strategic guidance, we will keep your technology running smoothly, so you can focus on achieving your goals!`,
		cta: 'Learn More About Us',
	},
	aboutTab: {
		title:
			'Get Beyond With IT\nMaximizing Business Potential through Technology',
		content: [
			{
				id: 1,
				uniqKey: '_staffing_solutions',
				name: 'Staffing Solutions',
				icon: 'flaticon flaticon-software-development',
				thumb: staffingSolutionsAboutTab,
				heading: 'Expertise in Cutting-Edge Staffing Solutions',
				description:
					'We provide comprehensive staffing management services, allowing businesses to maximize the performance and capacity without any hassle.',
				list: [
					'Cyber Security',
					'Oracle HCM/ERP Cloud',
					' Devops',
					'Data Science',
				],
			},
			{
				id: 2,
				uniqKey: '_cloud_service',
				name: 'Cloud Service',
				icon: 'flaticon flaticon-cloud-network-1',
				thumb: cloudSolutionAboutTab,
				heading: `Make The Most Of The Cloud's Potential`,
				description:
					'Our team of certified professionals is available to help you get the most out of your cloud investment and ensure you are always up-to-date with industry trends.',
				list: [
					'Cyber Security',
					'Deep Tech - AI & ML',
					'Data Analytics',
					'Oracle Cloud (Saas) Services',
				],
			},
			{
				id: 3,
				uniqKey: '_product_dev',
				name: 'Product Development',
				icon: 'flaticon flaticon-web-development-4',
				thumb: productDevelopmentAboutTab,
				heading: 'Get Intuitive And User-Friendly Product Development',
				description:
					'Whatever your product development needs may be, our experts can provide you with a custom solution designed to take your business goals to the next level.',
				list: [
					'Custom software development',
					'Mobile application development',
					'Web application development',
					'Machine learning integration',
				],
			},
			{
				id: 4,
				uniqKey: '_it_managment',
				name: 'IT Management',
				icon: 'flaticon flaticon-web-maintenance',
				thumb: itManagementAboutTab,
				heading: 'Keep Up With The Ever-Evolving Technological Landscape',
				description:
					'We provide comprehensive IT management services to help businesses maximize their	technology investments.',
				list: [
					'IT Staffing',
					'Data backup',
					'Security auditing',
					'Network integration',
					'Cloud computing',
				],
			},
		],
	},
	recentArticle: {
		title: 'Recent Articles',
		heading: 'All The Latest Updates',
		description:
			'Here you can find industry news, insightful blogs, as well as other informative content related to IT solutions and staffing.',
		details:
			'Whether you are a business looking for an efficient solution or just someone interested in industry news, this will be your place to access up-to-date news and content delivered straight from experts in the industry.',
		cta: 'view all news',
		readMore: 'Read more',
	},
};

export const signUpForm = {
	title: 'Sign up for latest updates',
	cta: 'Sign up',
};

export const footer = {
	logo,
	description:
		'We are tech experts to help streamline digital transformations and IAM solutions to ensure your business runs seamlessly and securely.',
	links: {
		title: '',
		pages: [],
	},
};

export const about = {
	sections: [
		{
			heading: 'About Us',
			description:
				'At Digiton Solutions, we understand the importance of staying ahead of the competition in today’s fast-moving digital landscape. As a global technology services and staffing firm, we collaborate with our clients to enable them to reach their goals faster and achieve success. Our focus is on providing customized solutions that embrace diverse perspectives, invite new ideas and leverage leading-edge technologies – empowering businesses for growth and positive change. We are also highly experienced in tech talent acquisition for fulfilling all of your needs in technology staffing.',
			image: aboutUs,
		},
		{
			heading: 'Our Expertise',
			description:
				'Our highly skilled team offers expertise across key areas, including Cyber Security, Deep Tech (AI/ML), Data Analytics, Oracle Cloud (SaaS) Services, Staffing Services, DevOps, Data Science, and Identity &; Access Management (IAM). We specialize in Identity & Access Management by developing accessible road maps for building a sustainable access management strategy, offering guidance through the process of platform transformation, as well as managing complex IAM operations while optimizing resource utilization.',
			image: ourExpertise,
		},
		{
			heading: 'Our Mission',
			description:
				'At Digiton Solutions, our mission is to accelerate our customer’s digital transformation journey through pioneering innovative solutions tailored to fit their individual needs. With our collective emphasis on reliability, transparency and sustainability well, positioned resources can offer assurance that they will result in long-term rewarding rewards for all involved parties.',
			image: ourMission,
		},
		{
			heading: 'Our Vision',
			description:
				'Our vision is to empower businesses so they can remain competitive throughout their digital transformations - accelerated by the right resources and tools necessary to ensure sustainable growth over time.',
			image: ourVision,
		},
		{
			heading: 'Our Values',
			description:
				'We believe passionately at Digiton Solutions towards three core values which are loyalty towards each other as a team, commitment toward excellence for our customers and assurance over effectiveness when working with us as an end-to-end service provider. Specifically, these translates into.',
			image: ourValues,
		},
		{
			heading: 'Our Team',
			description:
				'At Digiton Solutions, our staff are dedicated professionals who stay abreast in all relevant updated technology developments while emphasizing the highest competency standard demanded within the industry standards bars size whether international, regional or local demands be it part of cyber security dynamics, data science related differences or tech staffing background needed specially tailored offices.',
			image: ourTeam,
		},
	],
};

export const services = {
	home: {
		services: [
			{
				title: 'Staffing Solutions',
				slug: 'staffing-solutions',
				icon: 'flaticon flaticon-software-development',
				description:
					'We provide comprehensive staffing management services, allowing businesses to maximize the performance and capacity without any hassle.',
				tagline: 'Expertise in Cutting-Edge Staffing Solutions',
			},
			{
				title: 'Cloud Service',
				slug: 'cloud-service',
				description:
					'Our team of certified professionals is available to help you get the most out of your cloud investment and ensure you are always up-to-date with industry trends.',
				tagline: `Make The Most Of The Cloud's Potential`,
				icon: 'flaticon flaticon-cloud-network-1',
			},
			{
				title: 'Product Development',
				slug: 'product-development',
				description:
					'Whatever your product development needs may be, our experts can provide you with a custom solution designed to take your business goals to the next level.',
				tagline: 'Get Intuitive And User-Friendly Product Development',
				icon: 'flaticon flaticon-web-development-4',
			},
			{
				title: 'IT Managed Service',
				slug: 'it-managed-service',
				description:
					'We provide comprehensive IT management services to help businesses maximize their	technology investments.',
				tagline: 'Keep Up With The Ever-Evolving Technological Landscape',
				icon: 'flaticon flaticon-web-maintenance',
			},
			{
				title: 'IAM Service',
				slug: 'iam-service',
				description:
					'We provide an AI-powered, comprehensive identity access management solution',
				tagline:
					'Securing Your Digital Identity with AI-Powered Access Management',
				icon: 'flaticon flaticon-profile',
			},
		],

		cta: 'Learn More',
	},
	'staffing-solutions': {
		name: 'Staffing Solutions',
		title: 'Your Partner in Staffing Solutions',
		description:
			'At Digiton Solutions, we are dedicated to providing our clients with the highest quality staffing solutions for IT Development and Management. Whether you need immediate temporary staffing or a more tailored long-term staffing strategy, we have the expertise and resources to help you find the ideal employee for your needs.',
		sections: [
			{
				heading: 'Temporary Hiring',
				description:
					'Get fast and reliable access to experienced IT professionals on a short-term or project basis with Digiton Solutions temporary hiring solutions. Our team will assist you with finding the right candidate quickly so you can maximize your productivity without sacrificing quality.',
			},
			{
				heading: 'Temp To Hire',
				description:
					'Our temp-to-hire model gives you a cost-effective way to trial prospective employees before committing to them on a full-time basis. We&#39;ll work with you to create customized contracts and manage onboarding processes, allowing you more control over talent acquisition.',
			},
			{
				heading: 'Direct Hire',
				description:
					'Save time and reduce the effort when searching through potential candidates. With our direct hire solution, we assume responsibility for all aspects of recruiting so that you can be sure that every candidate is thoroughly assessed before being brought onto your team.',
			},
			{
				heading: 'Onsite',
				description:
					'Ensure that short-term projects are completed on time by finding qualified professionals for placement at your office location. Take advantage of our extensive network of local talents who can hit the ground running from day one, or allow us to provide assistance in sourcing from further afield should it be needed.',
			},
			{
				heading: 'Offshore',
				description:
					'Stay competitive no matter where in the world market conditions take you with affordable offshore solutions from Digiton Solutions. Our team will handle all aspects of outsourcing recruitment on your behalf so that no matter where your business needs extra manpower, there is always someone available and ready to help out!',
			},
		],
	},
	'cloud-service': {
		name: 'Cloud Service',
		title:
			'Digital Transformation Made Easy With Digiton Solutions Cloud Services',
		description:
			'Welcome to Digiton Solutions and the powerful global cloud computing capabilities we provide. Our cloud services cover a range of specialized subject areas, including cloud management, infrastructure as a service, cloud migration, backup and disaster recovery, and storage management. We are confident in our ability to help you manage your data more efficiently through secure access and industry-leading technologies like artificial intelligence (AI) and natural language processing (NLP).',

		sections: [
			{
				heading: 'Cloud Management as a Service',
				description:
					'We offer tailored solutions for managing your cloud environment based on availability, performance, scalability, security, cost optimization and other relevant factors. Through proactive monitoring and routine optimizations, we ensure that you have complete visibility into the health of your systems with an emphasis on continuous improvement.',
			},
			{
				heading: 'Infrastructure as a Service',
				description:
					'We offer tailored solutions for managing your cloud environment based on availability, performance, scalability, security, cost optimization and other relevant factors. Through proactive monitoring and routine optimizations, we ensure that you have complete visibility into the health of your systems with an emphasis on continuous improvement.',
			},
			{
				heading: 'Cloud Migration',
				description:
					'Migrating from on-premise infrastructures or other 3rd party providers can be a complicated and time-consuming process, but our experienced engineers can assist in planning for any eventualities associated with such changes ensuring a smooth transition of data assets from one platform to another, safeguarding all crucial information in the process.',
			},
			{
				heading: 'Backup & Disaster Recovery',
				description:
					'Our backup technologies enable quick incident response making sure that data is restored quickly as well as protecting against any potential disaster scenarios– whether it is a minor software fault or interruption due to ransomware attack - at all times, we will have everything backed up, so nothing ever gets lost in the chaos.',
			},
			{
				heading: 'Cloud Storage Management',
				description:
					'No matter how large or small your needs are, we can offer scalable storage solutions tailored towards achieving optimized utilization rates while delivering the best possible user experience with reduced latency periods. By leveraging cutting-edge caching technologies as well as customized replication models for dynamic resiliency practices, we guarantee 100% reliability regardless of usage requirements specified by each individual customer.',
			},
		],
	},
	'product-development': {
		name: 'Product Development',

		title: 'Unlocking the Potential of Your Innovations',
		description:
			'At Digiton Solutions, we are passionate about helping you create innovative products and services that meet the demands of your business. Our team specializes in product development, offering product consultation, co-innovation and ideation, iterative development, product transformation, deployment and sustenance for a unique and complete experience. With our cutting-edge strategies and technology solutions, you will unlock the potential of your innovations to produce superior results. Contact us today to get started!',

		sections: [
			{
				heading: 'Product Consultation:',
				description:
					'We provide a comprehensive review of your products or services from every angle. Through data-driven analysis and thoughtful strategizing, we uncover areas for improvement so you can make informed decisions about how best to move forward.',
			},
			{
				heading: 'Co-Innovation and Ideation:',
				description:
					'We work closely alongside you to come up with creative ideas and solutions that have the potential to revolutionize your industry. Our expert team provides design thinking solutions that innovate existing products or services while inspiring elements of creativity.',
			},
			{
				heading: 'Iterative Development:',
				description:
					'We break down complex processes into manageable chunks through rapid prototyping so you can develop a lean yet powerful product or service faster than ever before. We constantly evolve ideas with feedback from customers and stakeholders, ensuring successful product launches!',
			},
			{
				heading: 'Product Transformation:',
				description:
					'Product transformations require core reengineering efforts, which often struggle due to long turnaround times for upgrade cycles. Our agile methodology optimizes this process without sacrificing quality along the way, making sure your products are always good enough to launch soonest everything is ready.',
			},
			{
				heading: 'Deployment and Sustenance:',
				description:
					'After successfully launching a new product development cycle, it is important to maintain constant evolution according to customer feedback in order to scale further heights with modified relevance as time passes by - something we recognize at our core. We tap on cloud computing technologies powering production operations while providing consistent sustenance necessary for successful deployment teams proven over time!',
			},
		],
	},
	'it-managed-service': {
		name: 'IT Managed Service',

		title: 'Managed Services for Easy and Secure IT Technology',
		description:
			'At Digiton Solutions, we offer managed services to help you with all your technology needs. Our cutting-edge solutions provide the ultimate security and access to trusted technology, enabling businesses of all sizes to optimize their operations through integrated digital transformation. Our comprehensive suite of IT-managed services includes Cyber Security, Deep Tech, Data Analytics, Oracle HCM/ERP Cloud, Data Science, and DevOps. Leverage our expertise and knowledge to move your business forward today!',

		sections: [
			{
				heading: 'Cyber Security:',
				description:
					'Digiton Solutions cyber security services help you protect against security threats, vulnerabilities and attacks with advanced anti-malware solutions. With decade-long experience in the industry, we have seen various types of security breaches firsthand, so we are meticulous about the implementation of robust protocols that will secure your information from unauthorized users.',
			},
			{
				heading: 'Deep Tech - AI & ML:',
				description:
					'At Digiton Solutions, we offer reliable artificial intelligence (AI) and machine learning (ML) solutions that transform how businesses process data. Leverage our data-driven approach by incorporating predictive modelling into decision-making processes, ultimately increasing the accuracy of results and improving overall organizational performance.',
			},
			{
				heading: 'Data Analytics:',
				description:
					'Data analysis enables businesses to make informed decisions based on the collected data, driving productivity under efficient utilization guidelines while still keeping up with customer demands. With our managed service package at Digiton Solutions, you can receive quality analytics that measure measurable objectives – unlocking insights which provide a basis for upgraded improvement strategies.',
			},
			{
				heading: 'Oracle HCM/ERP Cloud:',
				description:
					'The Human Capital Management (HCM) as well as Enterprise Resource Planning (ERP) cloud offers multifunctionality – allowing companies to manage operational tasks efficiently from anywhere in the world. From procurement cycle management to paying staff salaries, using our optimized configurations powered by Oracle, you can count on streamlined workflows through accurate tracking procedures and facilitation problem-solving processes, especially in rapid times which require precise decision-making capabilities.',
			},
		],
	},
	'iam-service': {
		name: 'IAM Service',

		title: 'Securing Your Digital Identity with AI-Powered Access Management',
		description:
			'Digiton Solutions provides an AI-powered, comprehensive identity access management solution that gives you unparalleled control over who has access to your digital assets while also providing advanced security features like anomaly detection, automated workflows and MFA. Trust our AI-driven access insights to secure your business data today.',

		sections: [
			{
				heading: 'AI-driven Access Insights',
				description:
					'Digiton Solutions offers an advanced identity access management solution powered by artificial intelligence (AI) to protect digital resources from unauthorized users. Automatically detect anomalies in real-time and receive alerts so you can respond quickly and accurately. Get detailed insights on user activity across all your systems.',
			},
			{
				heading: 'Anomaly Detection and Alerting',
				description:
					'Digiton Solutions’ IAM solution includes an anomaly detection feature that utilizes predictive analytics to identify potential threats before they become issues. With customizable rules for continuous monitoring of access events, receive timely alerts when abnormal usage is detected so you can take action accordingly.',
			},
			{
				heading: 'Compliance Management',
				description:
					'Digiton Solutions IAM solution helps businesses stay compliant with industry standards by automating the compliance process. Easily track down any policy violations or audit concerns without manual effort. Streamline the entire compliance process in one unified dashboard with role-based access control (RBAC).',
			},
			{
				heading: 'MFA for VPNs, OWA, Cloud Applications and Endpoints',
				description:
					'Make it easy yet secure for users to access protected data on their computer or other devices using multiple authentication factors (MFA). Digiton Solutions’ proprietary authentication system covers virtual private networks (VPN), Outlook web access (OWA), cloud applications as well as endpoints such as smartphones and tablets.',
			},
			{
				heading: 'Automation, Workflows, Delegation',
				description:
					'Let our platform do all the hard work for you through automated processes that help streamline compliance procedures and adjustable workflow authority settings. The task delegation module allows users to assign delegated roles within teams or departments so tasks can be delegated efficiently in accordance with priority levels set by actively managing admins.',
			},
		],
	},
};

export const portfolio = {
	title: 'Our Portfolio',
	description:
		'Digiton is a leading staffing solutions and IT managed service provider, with a proven track record of helping clients from various industries meet their unique objectives. Our extensive experience and tailor-made solutions have enabled us to stand out in the market and become a trusted partner for businesses around the country. Here are a few examples of how we have helped clients from different industries as per their service needs and requirements.',
	items: [
		{
			heading: 'Healthcare Industry',
			description:
				'Digiton has assisted a number of healthcare organizations with their staffing needs. We have provided skilled professionals, such as nurses, doctors, and administrative staff, who have helped them deal with staffing shortages and maintain service levels. We have also provided technology services that have enabled them to streamline their processes, automate their workflows, and improve their overall efficiency.',
			image: healthCare,
		},
		{
			heading: 'Retail Industry',
			description:
				'We have also worked with retail organizations to help them optimize their staffing requirements. We have provided them with temporary staff during peak seasons, as well as permanent staff for key positions. Additionally, we have helped them with IT managed services, such as developing and implementing a robust point-of-sale system, which has enabled them to improve their customer experience and grow their sales.',
			image: retail,
		},
		{
			heading: 'Logistics and Warehousing Industry',
			description:
				'Digiton has provided staffing solutions to logistics and warehousing companies. We have assisted them in recruiting and retaining employees in various roles, including freight handlers, forklift operators, and warehouse supervisors. Moreover, we have helped them set up robust IT systems such as a warehouse management system that has enabled them to improve their inventory management and distribution process.',
			image: logistics,
		},
		{
			heading: 'Hospitality Industry',
			description:
				'The hospitality industry requires skilled staff to provide the best customer experience. Digiton has successfully provided hospitality staffing solutions to hotels and resorts around the country. We have provided them with experienced professionals in various roles, including front desk executives, housekeeping staff, and chefs. Our staff has helped them to maintain high levels of customer satisfaction, which is critical in this industry.',
			image: hospitality,
		},
		{
			heading: 'Banking and Finance Industry',
			description:
				'We have worked with several banking and finance organizations in providing IT managed services that comply with regulatory policies. We have implemented IT solutions to improve their customer experience, such as a secure online banking system that enables them to provide customers with quick and easy access to their accounts while ensuring the integrity of the data.',
			image: banking,
		},
	],
	footnote:
		'So, Digiton is committed to meeting the specific needs of businesses in different industries. We have a proven track record of providing tailor-made solutions that enable our clients to achieve their unique objectives. Contact us today to learn more about how we can help your business grow and succeed.',
};

export const team = {
	sections: [
		{
			heading: 'Our Expert Team Can Help You With All Your IT Staffing Needs',
			description:
				'At Digiton, we pride ourselves on having a team of highly skilled professionals who provide staffing solutions and IT managed services to businesses of all sizes. Our team members are carefully chosen for their expertise, experience, and dedication to delivering the best possible service to our clients.',
			image: ourTeam,
		},
		{
			heading: 'Unmatched Expertise',
			description:
				'Our team includes experts in staffing and IT management who have extensive experience in their fields. From recruitment to IT support, our team is equipped with the knowledge and skills to provide you with tailor-made solutions that will help your business thrive.',
			image: ourExpertise,
		},
		{
			heading: 'Customized Solutions',
			description:
				'We understand that every business is unique, which is why we work closely with our clients to develop customized solutions to meet their specific staffing and IT requirements. Our team takes the time to understand your business goals, challenges, and opportunities, and works with you to design solutions that fit your needs and budget.',
			image: customSolution,
		},
		{
			heading: 'Quality Service',
			description:
				'At Digiton, we believe in providing quality service to our clients. That’s why we hire only the best in the business. Our team members are not only highly skilled professionals, but they are also passionate about what they do. They take their work seriously and are committed to delivering solutions that exceed your expectations.',
			image: qualityService,
		},
		{
			heading: 'Reliable Support',
			description:
				'We understand that technology is critical to your business, and our team is dedicated to providing reliable IT support that ensures your systems run smoothly at all times. Whether it’s troubleshooting technical issues or providing ongoing maintenance, our team is available to provide you with the support you need to keep your business running smoothly.',
			image: reliableSupport,
		},
		{
			heading: 'Partner With Us',
			description:
				'At Digiton, we believe that our clients are our partners, and we are committed to working with you to achieve your business goals. We are passionate about what we do and are excited to help you take your business to new heights. Let our team of experts help you with all your staffing and IT needs, and experience the difference that quality service can make.',
			image: partner,
		},
	],
};

export const contactInfo = {
	address: ` Digiton Solutions Pvt Ltd
	D.No.3-5-1089, 3rd Floor, Dr. GSR Bhavan, Narayanguda, Hyderabad, Telangana, India - 500 029.`,
	timings: `Mon - Fri  11:00 to 20:00`,
	phone: '+918688841917',
	email: 'hr@digitonsolutions.in',
	website: 'www.digitonsolutions.in',
};

export const blogImages = require.context('../assets/images/blogPosts', true);
