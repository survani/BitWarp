'use client';

import { Alert } from 'flowbite-react';
import Image from 'next/image';
import OfferCards from './components/Cards/offercards';
import HeroMain from './components/Heros/heromain';

export default function Home() {
	return (
		<>
			<main>
				<HeroMain />
			</main>
			<section className='container mx-auto my-10 '>
				<div className='mt-20 mb-5'>
					<h2 className='text-4xl font-bold text-black '>Our Services</h2>
					<p>Want to grow your business?</p>
				</div>
				<div className='flex flex-wrap gap-2 lg:flex-nowrap'>
					<OfferCards
						serviceName='Frontend Development'
						description='Empowering Your Business to Drive Conversions and Delight Clients.'
						imgSrc='/landingpagecardbg.webp'
						link='/contact'
					/>
					<OfferCards
						serviceName='Web Consultant'
						description='Providing Consultation For The Web So Your Buisness Can Grow.'
						imgSrc='/web.webp'
						link='/contact'
					/>
					<OfferCards
						serviceName='More Coming Soon'
						description='Watch this Space: New and Exciting Offerings Coming Soon!'
						imgSrc='/web2.webp'
						link='/contact'
					/>
					<OfferCards
						serviceName='More Coming Soon'
						description='Watch this Space: New and Exciting Offerings Coming Soon!'
						imgSrc='/web3.webp'
						link='/contact'
					/>
				</div>
			</section>

			<section className='container mx-auto my-10 '>
				<div className='mt-20 mb-5'>
					<h2 className='text-4xl font-bold text-black '>
						We Love Volunteer Work
					</h2>
					<p>Want us to help you free of cost?</p>
				</div>

				<div className='flex flex-wrap gap-2 lg:flex-nowrap '>
					<OfferCards
						serviceName='TruthBombSocial'
						description='We are currently helping TruthBombSocial Digital Designs, so that their web app looks beautiful.'
						imgSrc='/tbslogo.webp'
						link='https://www.linkedin.com/company/truthbombsocial/'
					/>
					<OfferCards
						serviceName='More Coming Soon'
						description='Want us to help your non-profit get a head start into the digital world? Contact us!'
						imgSrc='/web4.webp'
						link='/contact'
					/>
					<OfferCards
						serviceName='More Coming Soon'
						description='Want us to help your non-profit get a head start into the digital world? Contact us!'
						imgSrc='/web5.webp'
						link='/contact'
					/>
				</div>
			</section>
		</>
	);
}
