'use client';

import LoginForm from '../auth/LoginForm';

interface AuthModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-100 flex items-center justify-center bg-dark-primary/60 backdrop-blur-sm p-4">
			<div className="relative w-full max-w-md bg-light-primary rounded-2xl p-2 shadow-2xl animate-in fade-in zoom-in duration-200">
				<button
					onClick={onClose}
					className="absolut top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>

				<div className="p-6">
					<h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
						Log in to add to favorites
					</h2>
					<LoginForm />
				</div>
			</div>

			<div className="absolute inset-0 -z-10" onClick={onClose}></div>
		</div>
	);
}
