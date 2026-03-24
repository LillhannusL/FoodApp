import { createClient } from '@/lib/supabase/server';
import ProfileContent from './components/profileContent';
import LoginPage from '../(auth)/login/page';

export default async function ProfilePage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return (
			<section>
				<LoginPage />
			</section>
		);
	}

	return (
		<section className="min-h-screen flex flex-col px-4">
			<ProfileContent user={user} />
		</section>
	);
}
