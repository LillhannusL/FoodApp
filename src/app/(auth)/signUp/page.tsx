import SignUpForm from "@/components/auth/signUpForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between px-4">
      <div className="mt-12">
        <h1 className="md:pt-28">Sign Up!</h1>
      </div>

      <div className="w-full flex justify-center">
        <SignUpForm />
      </div>

      <div className="mb-24 flex flex-col items-center gap-4 bg-dark-primary/50 p-4 rounded-xl">
        <p className="text-center ">
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
