'use client';

import { Widget } from '@typeform/embed-react';
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const Contact = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	return (
		<>
			<div className='p-5 hero bg-base-200'>
				<div className='text-center hero-content'>
					<div className='max-w-md'>
						<h1 className='text-5xl font-bold text-white'>Contact Us</h1>
						<p className='py-6 text-white'>
							We value your feedback, inquiries, and collaboration
							opportunities. Whether you have a question about our services,
							need technical assistance, or would like to explore partnership
							possibilities, our dedicated team is here to assist you.
						</p>
						{/* <button className='btn btn-primary'>Get Started</button> */}
					</div>
				</div>
			</div>
			<section className='w-full p-10'>
				<Widget id='PsgixC2V' className='w-full h-screen my-form' />
			</section>
		</>
	);
};

export default Contact;
