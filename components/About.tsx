import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaWordpress,
	FaYoutube,
} from "react-icons/fa";

const About = () => {
	return (
		<main className='hero relative flex flex-col justify-center mx-auto w-[85%] mt-24'>
			<section className='flex flex-col sm:flex-row gap-8'>
				<Image
					src='/about-libosso.webp'
					alt='Libosso'
					width={1000}
					height={200}
					className='w-[40%] h-[45%] flex justify-center items-center mx-auto'
				/>
				<article className='flex flex-col justify-center text-center items-center flex-wrap gap-8'>
					<h1 className='font-bold text-xl text-blue-500'>Meet The Author.</h1>
					<p>
						Embukane Vincent Libosso Bengoh started his career at the beginning
						of 2010 as a blogger, after a one month training at{" "}
						<Link
							href='/'
							className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
							Nation Media Group
						</Link>{" "}
						in August. With a vast grasp in the events and entertainment
						industry,{" "}
						<Link
							href='/'
							className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
							Kenya Buzz
						</Link>{" "}
						and later on, <Link href='/'>UP Magazine</Link> came calling. From a
						staff writer, he rose to an online Digital Content Manager. He
						worked there for a year (2015) before taking on a new challenge at{" "}
						<Link
							href='/'
							className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
							What’s Good Studios.
						</Link>
					</p>
					<p>
						In 2017, he graduated with a Diploma in Communication from{" "}
						<Link
							href='/'
							className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
							Daystar University.
						</Link>{" "}
						At{" "}
						<Link
							href='/'
							className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
							What’s Good Studios.
						</Link>{" "}
						he took on the roles on online Managing Editor for their publishing
						platform, an online radio and TV host. Libosso, better known as The
						Events Kahuna is not new to the heavy-atmosphere of Nairobi’s
						Digital airwaves (often crisscrossing into Uganda with Festival
						coverage and celebrity interviews). The key to his success has been
						an unsinkable passion for radio, TV, content marketing and creation,
						music and people.
					</p>
					<p>
						In 2020, alongside co-presenters Rafiiki and Blak Ice, Libosso aka
						Vinny Puppa Rankin received the prestigious{" "}
						<Link
							href='/'
							className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
							2020 Sondeka Award for Best Online Radio and Podcast award for
							their straight reggae and dancehall show, #LazeReggae Invasion
							Podcast.
						</Link>
					</p>
					<button className='text-center bg-orange-500 rounded-md px-4 py-2 text-white m-4'>
						Contact Me
					</button>
				</article>
			</section>
			<section className='flex flex-col gap-8'>
				<article className='flex flex-col justify-center items-start mx-auto text-center gap-8'>
					<div className=''>
						<h2 className='font-bold text-xl text-blue-500'>
							Diani Beach Podcast
						</h2>
						<p>
							Diani Beach Podcast is the ultra-shareable, uber-cool online guide
							to things to do in Diani Beach. From Kongo River sundowners to
							swimming with dolphins at Wasini, Diani Beach Podcast Blog is here
							to help you and your pals discover amazing new places – and create
							some beautiful memories together along the way. Karibu Diani
						</p>
					</div>
					<div>
						<h2 className='font-bold text-xl text-blue-500'>
							Ethics and Transparency.
						</h2>
						<p>
							We will always aim to give honest and sincere recommendations that
							our readers can trust. Diani Beach Podcast Blog is sometimes
							invited to test experiences that are free of charge. Through some
							partnerships, we are eligible to receive a small commission.
						</p>
					</div>
					<div>
						<h2 className='font-bold text-xl text-blue-500'>
							Partner With Us.
						</h2>
						<p>
							Need to cause a spark with your next campaign? Our audience of
							urban adventurers loves to visit new places and try new things –
							and they bring their friends with them! Email us today with
							requests, tips, news, invites, PR requests, submissions,
							complaints, corrections, copyright issues, and funny cat GIFs;
							<Link
								href='/'
								className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
								<p>trinitystarfamily@gmail.com</p>
							</Link>
							. Drop us a line, Mpesa tips or Whatsapp us; <b>+254716659166</b>.
							*Diani Beach Podcast Blog is based at Darad, off Diani Beach Road.
							*Advertising Rate card coming soon! To find out how Diani Beach
							Podcast can make your next project the talk of the town, email us;
							<Link
								href='/'
								className='text-blue-500 hover:text-orange-500 hover:underline transition-300'>
								<p>trinitystarfamily@gmail.com</p>
							</Link>
							. *Diani Beach Podcast Blog lifestyle experience and merchandises
							coming soon.
						</p>
					</div>
				</article>
				<div>
					<button className='text-center bg-orange-500 rounded-md px-4 py-2 text-white m-4'>
						Contact Me
					</button>
					<ul className='flex gap-3 text-orange-500 p-4 m-4'>
						<li>
							<FaWordpress />
						</li>
						<li>
							<FaFacebookF />
						</li>
						<li>
							<FaTwitter />
						</li>
						<li>
							<FaInstagram />
						</li>
						<li>
							<FaLinkedin />
						</li>
						<li>
							<FaYoutube />
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
};

export default About;
