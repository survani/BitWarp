'use client';
import Image from 'next/image';
import Link from 'next/link';
const HeroMain = () => {
	return (
		<>
			<div className='min-h-screen p-6 text-lg hero bg-base-100'>
				<div className='flex-col hero-content lg:flex-row-reverse'>
					<Image
						src='/logo-color.png'
						className='w-full max-w-sm rounded-lg shadow-2xl'
						width={500}
						height={100}
						alt='BitWarp CTA'
					/>
					<div>
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
