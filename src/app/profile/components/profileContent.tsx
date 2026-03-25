'use client';

import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import ContentBox from '@/components/shared/ContentBox';
import Image from 'next/image';

export default function ProfileContent({ user }: any) {
	const router = useRouter();
	const supabase = createClient();

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};

	const getInitials = function (name: string) {
		const parts = name.split(' ');
		let initials = '';
		for (var i = 0; i < parts.length; i++) {
			if (parts[i].length > 0 && parts[i] !== '') {
				initials += parts[i][0];
			}
		}
		return initials;
	};

	const initials = getInitials(user.user_metadata?.display_name);

	return (
		<section>
			<h2 className="text-4xl font-bold pb-4 pt-10 text-center md:pt-28">
				Welcome back!
			</h2>

			<ContentBox>
				<div className="flex flex-col items-center">
					<Image
						src="/images/feelingGood.png"
						width={80}
						height={80}
						alt="avatar"
						className="relative w-20 h-20 mb-4"
					/>
					{/* <span className="uppercase">{initials}</span> */}

					<p className="text-3xl font-semibold">
						{user.user_metadata?.display_name || user.email}
					</p>
				</div>

				<div className="divider"></div>

				<button
					onClick={handleSignOut}
					className="btn btn-error btn-wide mx-auto mt-auto"
				>
					Log out
				</button>
			</ContentBox>
		</section>
	);
}
