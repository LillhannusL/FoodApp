import './globals.css';
import { Karla } from 'next/font/google';
import NavBar from '@/components/shared/Navbar';

const karla = Karla({
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={karla.className}>
			<body className="bg-primary-gradient min-h-screen text-light-primary px-4">
				{children}

				<NavBar />
			</body>
		</html>
	);
}
