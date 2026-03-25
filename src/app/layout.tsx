import './globals.css';
import { Karla } from 'next/font/google';
import NavBar from '@/components/shared/Navbar';
import { UserProvider } from '@/components/shared/UserProvider';

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
			<UserProvider>
				<body className="bg-primary-gradient min-h-screen text-light-primary">
					{children}

					<NavBar />
				</body>
			</UserProvider>
		</html>
	);
}
