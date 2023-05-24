'use client';

import Image from 'next/image';
import Link from 'next/link';

type CardInfo = {
	serviceName: string;
	description: string;
	imgSrc: string;
	link: string;
};

const OfferCards = (cardInformation: CardInfo) => {
	return (
		<>
			<div className='w-full text-white shadow-xl bg-base-100 card'>
				<figure>
					<Image
						src={cardInformation.imgSrc}
						alt='Landing Page Service'
						width={500}
						height={50}
						className='w-full h-60 object-cove'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{cardInformation.serviceName}</h2>
					{cardInformation.description}
					<div className='justify-end mt-5 card-actions'>
						<Link href={cardInformation.link}>
							<button className='btn btn-primary'>Learn More</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default OfferCards;
