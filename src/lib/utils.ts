import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function scrollIntoView(element: string) {
	const e = document.getElementById(element);
	if (e) {
		e.scrollIntoView({ behavior: 'smooth' });
	} else {
		scrollTo(0, 0);
	}
}
