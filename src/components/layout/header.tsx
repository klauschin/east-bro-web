import Link from 'next/link';
import BrandLogo from '@/components/brand-logo';
import { Button } from '@/components/ui/button';

export default function GlobalHeader() {
	return (
		<header className="g-header">
			<div className="px-contain flex h-16 items-center justify-between">
				<Link href="/" className="w-60 text-black">
					<BrandLogo />
				</Link>
				<Button asChild>
					<Link href="/login">Login</Link>
				</Button>
			</div>
		</header>
	);
}
