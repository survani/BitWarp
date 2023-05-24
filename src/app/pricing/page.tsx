'use client';

const Pricing = () => {
	return (
		<>
			<section className='container mx-auto bg-white'>
				<div className='py-24 bg-white sm:py-32'>
					<div className='px-6 mx-auto max-w-7xl lg:px-8'>
						<div className='max-w-2xl mx-auto sm:text-center'>
							<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
								Simple no-tricks pricing
							</h2>
							<p className='mt-6 text-lg leading-8 text-gray-600'>
								We aim to provide exceptional value for your investment. Whether
								youre an individual, small business, or large enterprise, our
								pricing table offers clear options to help you find the plan
								that meets your specific needs.
							</p>
						</div>
						<div className='max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
							<div className='p-8 sm:p-10 lg:flex-auto'>
								<h3 className='text-2xl font-bold tracking-tight text-gray-900'>
									Per Project
								</h3>
								<p className='mt-6 text-base leading-7 text-gray-600'>
									We work per project need. We offer our services per hour. You
									can see the rate we charge per hour, and for non-profit it is
									free of cost.
								</p>
								<div className='flex items-center mt-10 gap-x-4'>
									<h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
										What’s included
									</h4>
									<div className='flex-auto h-px bg-gray-100'></div>
								</div>
								<ul
									role='list'
									className='grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
								>
									<li className='flex gap-x-3'>
										<svg
											className='flex-none w-5 h-6 text-indigo-600'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
												clip-rule='evenodd'
											/>
										</svg>
										Web Consultation
									</li>
									<li className='flex gap-x-3'>
										<svg
											className='flex-none w-5 h-6 text-indigo-600'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
												clip-rule='evenodd'
											/>
										</svg>
										Basic Figma Wireframes
									</li>
									<li className='flex gap-x-3'>
										<svg
											className='flex-none w-5 h-6 text-indigo-600'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
												clip-rule='evenodd'
											/>
										</svg>
										Frontend Development
									</li>
									<li className='flex gap-x-3'>
										<svg
											className='flex-none w-5 h-6 text-indigo-600'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
												clip-rule='evenodd'
											/>
										</svg>
										After Service Revisions
									</li>
								</ul>
							</div>
							<div className='p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
								<div className='py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
									<div className='max-w-xs px-8 mx-auto'>
										<p className='text-base font-semibold text-gray-600'>
											Pay hourly, per project
										</p>
										<p className='flex items-baseline justify-center mt-6 gap-x-2'>
											<span className='text-5xl font-bold tracking-tight text-gray-900'>
												$50/hr
											</span>
											<span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
												USD
											</span>
										</p>
										<a
											href='#'
											className='block w-full px-3 py-2 mt-10 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
										>
											Contact Us
										</a>
										<p className='mt-6 text-xs leading-5 text-gray-600'>
											Invoices and receipts available for easy company
											reimbursement
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Pricing;
