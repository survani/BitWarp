'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const itemVariants: Variants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const HeroMain = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='min-h-screen p-6 text-lg hero bg-base-100'>
				<div className='flex-col hero-content lg:flex-row-reverse'>
					<motion.div
						initial={false}
						animate={isOpen ? 'open' : 'closed'}
						className='lg:w-1/2'
					>
						<motion.button
							whileTap={{ scale: 0.97 }}
							onClick={() => setIsOpen(!isOpen)}
						>
							<Image
								src='/logo-color.png'
								className='w-full max-w-sm rounded-lg shadow-2xl'
								width={500}
								height={100}
								alt='BitWarp CTA'
							/>
						</motion.button>
						<motion.div
							className='bg-white w-[385px] p-2'
							variants={{
								open: {
									clipPath: 'inset(0% 0% 0% 0% round 10px)',
									transition: {
										type: 'spring',
										bounce: 0,
										duration: 0.7,
										delayChildren: 0.3,
										staggerChildren: 0.05,
									},
								},
								closed: {
									clipPath: 'inset(10% 50% 90% 50% round 10px)',
									transition: {
										type: 'spring',
										bounce: 0,
										duration: 0.3,
									},
								},
							}}
						>
							<motion.p
								variants={itemVariants}
								animate='hidden'
								className='text-center text-black'
							>
								Wow! You found our easter egg!
							</motion.p>
						</motion.div>
					</motion.div>

					<div className='w-full'>
						<h1 className='text-2xl font-bold text-center text-white lg:text-5xl lg:text-start'>
							Transforming Visions into Digital Reality through Software
							Engineering!
						</h1>
						<p className='py-6 text-center text-white lg:text-start'>
							Revolutionize your digital landscape with our cutting-edge
							software engineering expertise.
						</p>
						<div className='flex justify-center lg:justify-start'>
							<Link href={'/contact'}>
								<button className='btn btn-primary'>Get Started</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroMain;
