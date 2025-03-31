import { LoginForm } from './_component/LoginForm';

export default function Login() {
	return (
		<div className="p-login">
			<div className="flex min-h-screen flex-col items-center justify-center">
				<h1 className="text-5xl">Login to East Bro</h1>
				<div className="bg-accent mt-10 w-full max-w-96 rounded-md p-6">
					<LoginForm className="w-full" />
				</div>
			</div>
		</div>
	);
}
