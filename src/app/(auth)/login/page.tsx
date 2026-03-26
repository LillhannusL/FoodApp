import LoginForm from '@/components/auth/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-between px-4">
			<div className="mt-12">
				<h1 className="text-4xl font-boldtext-center md:pt-28">Log In</h1>
			</div>

			<div className="w-full flex justify-center">
				<LoginForm />
			</div>

			<div className="mb-24 flex flex-col items-center gap-4">
				<p>Dont have an account?</p>
				<button className="btn btn-outline">
					<Link href={'/signUp'}>Sign Up</Link>
				</button>
			</div>
		</section>
	);
}
