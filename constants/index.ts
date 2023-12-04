// NAVIGATION

import { FaUser, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export const NAV_LINKS = [
	{ href: "/", key: "home", label: "Home" },

	{ href: "/", key: "About", label: "About" },

	{ href: "/", key: "Blog", label: "Blog" },

	{ href: "/", key: "Diani Directory", label: "Diani Directory" },
];

export const ADMIN_ICONS = [
	{ icon: FaUser, key: "user" },
	{ icon: FaTwitter, key: "twitter" },
	{ icon: FaFacebook, key: "facebook" },
	{ icon: FaInstagram, key: "instagram" },
];

export const SIDEBAR_LINKS = [
	{ href: "/", key: "Things To Do", label: "Things To Do" },
	{ href: "/", key: "Wellness", label: "Wellness" },
	{ href: "/", key: "The Audio X", label: "The Audio X" },
	{ href: "/", key: "My Living List", label: "My Living List" },
	{ href: "/", key: "Food", label: "Food" },
	{ href: "/", key: "Events", label: "Events" },
	{ href: "/", key: "Bars and Nightlife", label: "Bars and Nightlife" },
];

// CAMP SECTION
export const PEOPLE_URL = ["/person-2.png", "/person-3.png", "/person-4.png"];

// FEATURES SECTION
export const FEATURES = [
	{
		title: "Real maps can be offline",
		icon: "/map.svg",
		variant: "green",
		description:
			"We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
	},
	{
		title: "Set an adventure schedule",
		icon: "/calendar.svg",
		variant: "green",
		description:
			"Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
	},
	{
		title: "Technology using augment reality",
		icon: "/tech.svg",
		variant: "green",
		description:
			"Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
	},
	{
		title: "Many new locations every month",
		icon: "/location.svg",
		variant: "orange",
		description:
			"Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
	},
];

// BLOG CONTENT SECTION
export const BLOG_SECTION = [
	{
		title: "Dine Out at these New Diani Hotspots",
		description:
			"February is technically the first month, so congratulations: you’ve pretty much survived another nJaanuary (*ask a Kenyan the meaning of this) in Diani. To make it go by quicker, here are some new tasty gourmet spots in town to check out.",
		src: "/sarova-stanley-thai-chi-restaurant-9.webp",
		alt: "Sarova Stanley Thai Chi Restaurant",
	},
];

// FOOTER SECTION
export const FOOTER_LINKS = [
	{
		title: "Learn More",
		links: [
			"About Hilink",
			"Press Releases",
			"Environment",
			"Jobs",
			"Privacy Policy",
			"Contact Us",
		],
	},
	{
		title: "Our Community",
		links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
	},
];

export const FOOTER_CONTACT_INFO = {
	title: "Contact Us",
	links: [
		{ label: "Admin Officer", value: "123-456-7890" },
		{ label: "Email Officer", value: "hilink@akinthil.com" },
	],
};

export const SOCIALS = {
	title: "Social",
	links: [
		"/facebook.svg",
		"/instagram.svg",
		"/twitter.svg",
		"/youtube.svg",
		"/wordpress.svg",
	],
};
