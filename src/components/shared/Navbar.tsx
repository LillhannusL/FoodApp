import Link from 'next/link';

export default function NavBar() {
	return (
		<>
			{/*Mobile dock*/}
			<div className="dock md:hidden border-t fixed bottom-0 z-50 bg-light-primary/30 backdrop-blur-md border-white/20">
				<button>
					<Link href="/" className="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-house-icon lucide-house"
						>
							<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
							<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
						</svg>
						<span className="dock-label">Home</span>
					</Link>
				</button>
				<button>
					<Link href="/recipes" className="flex flex-col items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-cooking-pot-icon lucide-cooking-pot"
						>
							<path d="M2 12h20" />
							<path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
							<path d="m4 8 16-4" />
							<path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
						</svg>
						<span className="dockl-label">Recipes</span>
					</Link>
				</button>
			</div>

			{/*Desktop navbar*/}
			<nav className="hidden md:flex navbar bg-light-primary/40 backdrop-blur-md border-b border-white/30 shadow-sm fixed top-0 z-50">
				<div className="flex-1">
					<button className="btn btn-ghost">
						<Link href="/">Mat app</Link>
					</button>
				</div>
				<div>
					<ul className="menu menu-horizontal">
						<li>
							<Link href="/recipes">Recipes</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
