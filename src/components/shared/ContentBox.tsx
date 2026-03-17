export default function ContentBox({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full max-w-md min-h-164 grid grid-cols-1 bg-light-primary/60 backdrop-blur-md text-dark-primary border border-white/90 rounded-4xl shadow-lg/20 p-8 gap-6">
			{children}
		</div>
	);
}
