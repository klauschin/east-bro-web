'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { onLogin } from '@/app/api/login/onLogin';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
	username: z.string().min(2, {
		message: 'Username must be at least 2 characters.',
	}),
	password: z.string().min(1, {
		message: 'Enter your password',
	}),
});

export function LoginForm({ className = '' }) {
	const [statusMessage, setStatusMessage] = useState('');
	const [userData, setUserData] = useState({
		token: '',
		type: '',
		refreshToken: '',
		id: '',
		username: '',
		email: '',
		roles: [],
	});
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setStatusMessage('');
		const res = await onLogin(values);
		console.log('🚀 ~ :42 ~ onSubmit ~ res:', res);
		if (res.errors) {
			return setStatusMessage('打錯密碼了智障');
		}
		setUserData(res);
	}
	if (userData.username) {
		return <div>你好 {userData?.username}, 準備下斡旋了吧?</div>;
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn('space-y-8', className)}
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="username" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Submit
				</Button>
				{statusMessage && (
					<p className="font-sans text-amber-700">{statusMessage}</p>
				)}
			</form>
		</Form>
	);
}
