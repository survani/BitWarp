import { Inter } from 'next/font/google';
import Footer from './components/Footer/footer';
import NavBar from './components/navbar/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'BitWarp - Hire Us!',
	description: 'Hire me for your next project!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='bg-white'>
			<body>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
