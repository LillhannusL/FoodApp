'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const supabase = createClient();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			if (error.message === 'Invalid login credentials') {
				setError('Wrong email or password');
			} else {
				setError(error.message);
			}
			setLoading(false);
		} else {
			router.push('/');
			router.refresh();
		}
	};

	return (
		<div className="w-full max-w-md p-8 bg-light-primary/60 backdrop-blur-md text-dark-primary border border-white/90 rounded-4xl shadow-lg/20">
			<form onSubmit={handleLogin} className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<label className="text-sm font-medium opacity-70 ml-1">Email</label>
					<label className="input input-borded w-full bg-black/20 focus:border-orange-gradient transition-colors">
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
							className="lucide lucide-user-round-icon lucide-user-round opacity-70"
						>
							<circle cx="12" cy="8" r="5" />
							<path d="M20 21a8 8 0 0 0-16 0" />
						</svg>
						<input
							type="email"
							placeholder="mail@site.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<div className="validator-hint hidden">Enter valid email address</div>
				</div>

				<div className="flex flex-col gap-2">
					<label className="text-sm font-medium opacity-70 ml-1">
						Password
					</label>
					<label className="input input-borded w-full bg-black/20 focus:border-orange-gradient transition-colors">
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
							className="lucide lucide-key-round-icon lucide-key-round opacity-70"
						>
							<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
							<circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
						</svg>
						<input
							type="password"
							required
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
							title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
						/>
					</label>
					<p className="validator-hint hidden">
						Must be more than 8 characters, including
						<br />
						At least one number <br />
						At least one lowercase letter <br />
						At least one uppercase letter
					</p>
				</div>
			</form>
		</div>
	);
}
