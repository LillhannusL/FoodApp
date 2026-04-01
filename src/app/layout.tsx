import './globals.css';
import { Karla, Lora } from 'next/font/google';
import NavBar from '@/components/shared/Navbar';
import { UserProvider } from '@/components/shared/UserProvider';

const karla = Karla({
	subsets: ['latin'],
});
const lora = Lora({
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
				<body className="bg-[url(/images/BG.jpg)] bg-contain sm:bg-cover min-h-screen text-light-primary">
					{children}

					<NavBar />
				</body>
			</UserProvider>
		</html>
	);
}
