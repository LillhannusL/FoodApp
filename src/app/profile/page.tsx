'use client';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

export default function ProfilePage() {
	const supabase = createClient();
	const router = useRouter();

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.push('/login');
		router.refresh();
	};

	return (
		<section className="min-h-screen flex flex-col gap-8 items-center justify-center">
			<button
				className="btn btn-outline relative z-50 bg-bg-container p-4 rounded-2xl mb-6 hover:opacity-80 active:scale-95"
				onClick={handleSignOut}
			>
				Sign out
			</button>
			<button className="btn btn-outline relative z-50 bg-bg-container p-4 rounded-2xl mb-6 hover:opacity-80 active:scale-95">
				<Link href="/login">Logga in</Link>
			</button>
		</section>
	);
}
