export default function SearchFunction() {
	return (
		<div className="flex justify-center w-full">
			<label className="input input-bordered flex items-center gap-4 rounded-full h-18 bg-light-primary/60 backdrop-blur-md shadow-inner">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="35"
					height="35"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="lucide lucide-search-icon lucide-search"
				>
					<path d="m21 21-4.34-4.34" />
					<circle cx="11" cy="11" r="8" />
				</svg>
				<input type="search" placeholder="ingredienser..." />
				<button className="btn btn-circle border-none bg-blue-gradient text-xl hover:scale-110 transition-transform">
					+
				</button>
			</label>
		</div>
	);
}
