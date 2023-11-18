import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className='border-2 border-red-500 flex justify-between max-container padding-container relative z-30 py-5'>
			<Link href='/'></Link>
		</nav>
	);
};

export default Navbar;