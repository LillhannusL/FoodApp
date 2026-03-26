import SignUpForm from '@/components/auth/signUpForm';
import Link from 'next/link';

export default function SignUpPage() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-between px-4">
			<div className="mt-12">
				<h1 className="text-4xl font-boldtext-center md:pt-28">Sign Up!</h1>
			</div>

			<div className="w-full flex justify-center">
				<SignUpForm />
			</div>

			<div className="mb-24 flex flex-col items-center gap-4">
				<p className="text-center text-sm opacity-60">
					Already have an account?
					<Link
						href="/login"
						className="text-orange-400 font-bold hover:underline"
					>
						Log in
					</Link>
				</p>
			</div>
		</section>
	);
}
