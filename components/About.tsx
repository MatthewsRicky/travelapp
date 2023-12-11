import Image from "next/image";
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
	const socialIcons = [
		<FaWordpress />,
		<FaFacebookF />,
		<FaTwitter />,
		<FaInstagram />,
		<FaLinkedin />,
		<FaYoutube />,
	];

	return (
		<main className='relative flex flex-col justify-center mx-auto w-[85%] mt-24'>
			<section className='flex gap-8'>
				<Image
					src='/about-libosso.webp'
					alt='Libosso'
					width={1000}
					height={200}
					className='w-[40%] h-[45%]'
				/>
				<article className='flex flex-col justify-center text-center items-center flex-wrap gap-8'>
					<h1>Meet The Author.</h1>
					<p>
						Embukane Vincent Libosso Bengoh started his career at the beginning
						of 2010 as a blogger, after a one month training at Nation Media
						Group in August. With a vast grasp in the events and entertainment
						industry, Kenya Buzz and later on, UP Magazine came calling. From a
						staff writer, he rose to an online Digital Content Manager. He
						worked there for a year (2015) before taking on a new challenge at
						What’s Good Studios.
					</p>
					<p>
						In 2017, he graduated with a Diploma in Communication from Daystar
						University. At What’s Good Studios he took on the roles on online
						Managing Editor for their publishing platform, an online radio and
						TV host. Libosso, better known as The Events Kahuna is not new to
						the heavy-atmosphere of Nairobi’s Digital airwaves (often
						crisscrossing into Uganda with Festival coverage and celebrity
						interviews). The key to his success has been an unsinkable passion
						for radio, TV, content marketing and creation, music and people.
					</p>
					<p>
						In 2020, alongside co-presenters Rafiiki and Blak Ice, Libosso aka
						Vinny Puppa Rankin received the prestigious 2020 Sondeka Award for
						Best Online Radio and Podcast award for their straight reggae and
						dancehall show, #LazeReggae Invasion Podcast.
					</p>
					<button>Contact Me</button>
				</article>
			</section>
			<section>
				<article>
					<div>
						<h2>Diani Beach Podcast</h2>
						<p>
							Diani Beach Podcast is the ultra-shareable, uber-cool online guide
							to things to do in Diani Beach. From Kongo River sundowners to
							swimming with dolphins at Wasini, Diani Beach Podcast Blog is here
							to help you and your pals discover amazing new places – and create
							some beautiful memories together along the way. Karibu Diani
						</p>
					</div>
					<div>
						<h2>Ethics and Transparency.</h2>
						<p>
							We will always aim to give honest and sincere recommendations that
							our readers can trust. Diani Beach Podcast Blog is sometimes
							invited to test experiences that are free of charge. Through some
							partnerships, we are eligible to receive a small commission.
						</p>
					</div>
					<div>
						<h2>Partner With Us.</h2>
						<p>
							Need to cause a spark with your next campaign? Our audience of
							urban adventurers loves to visit new places and try new things –
							and they bring their friends with them! Email us today with
							requests, tips, news, invites, PR requests, submissions,
							complaints, corrections, copyright issues, and funny cat GIFs;
							trinitystarfamily@gmail.com. Drop us a line, Mpesa tips or
							Whatsapp us; +254716659166. *Diani Beach Podcast Blog is based at
							Darad, off Diani Beach Road. *Advertising Rate card coming soon!
							To find out how Diani Beach Podcast can make your next project the
							talk of the town, email us; trinitystarfamily@gmail.com. *Diani
							Beach Podcast Blog lifestyle experience and merchandises coming
							soon.
						</p>
					</div>
				</article>
				<div>
					<button>Contact Me</button>
					<ul>
						{socialIcons.map(() => (
							<li>{socialIcons}</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
};

export default About;
