export default function ContentBox({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full max-w-md min-h-164 grid grid-cols-1 items-center bg-light-primary/70 backdrop-blur-lg text-dark-primary border border-white/80 rounded-4xl shadow-lg px-8 py-4 gap-4 sm:max-w-6xl">
			{children}
		</div>
	);
}
