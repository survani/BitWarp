'use client';

import { Accordion } from 'flowbite-react';

const About = () => {
	return (
		<>
			<section>
				<div
					className='min-h-screen hero'
					style={{
						backgroundImage: `url("/guy1.webp")`,
					}}
				>
					<div className='hero-overlay bg-opacity-60'></div>
					<div className='text-center hero-content text-neutral-content'>
						<div className='max-w-md'>
							<h1 className='mb-5 text-5xl font-bold text-white'>
								About BitWarp
							</h1>
							<p className='mb-5 text-white'>
								Transforming Visions into Digital Reality through Software
								Engineering!
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='container mx-auto my-10'>
				<h2 className='my-5 text-3xl font-bold text-center text-black'>
					{' '}
					Get to Know BitWarp
				</h2>
				<Accordion>
					<Accordion.Panel>
						<Accordion.Title>What is BitWarp?</Accordion.Title>
						<Accordion.Content>
							<p className='mb-2 text-gray-500 dark:text-gray-400'>
								BitWarps website development and design services focus on
								creating visually appealing and user-friendly websites that
								align with the clients brand identity and objectives. They
								employ the latest technologies and industry best practices to
								ensure that the websites they develop are responsive, secure,
								and optimized for search engines.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>What services do we offer?</Accordion.Title>
						<Accordion.Content>
							<p className='mb-2 text-gray-500 dark:text-gray-400'>
								We offer a range of services: Web Development and Web
								Consultation. We also provide free of cost services when
								available to non-profit organizations. As we continue to grow we
								will upscale our services to our clients.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			</section>
		</>
	);
};

export default About;
