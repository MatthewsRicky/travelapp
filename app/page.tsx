import Blogs from "@/components/Blogs";

import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<Blogs />
			<Guide />
			<Features />
			<GetApp />
		</>
	);
}
