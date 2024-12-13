<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { scrollIntoView } from '$lib/utils';
</script>

<div class="container sticky top-28 mx-auto p-4">
	<Card.Root class="relative snap-y bg-purple-100 transition-all lg:hover:shadow-big">
		<Card.Header>
			<Card.Title class="snap-start scroll-mt-32 text-5xl font-extrabold" id="connect"
				><a
					href="#connect"
					class="group"
					on:click|preventDefault={() => {
						scrollIntoView('connect');
					}}
					>Connect<span
						class="mt-1 block h-2 max-w-0 bg-black transition-all duration-300 group-hover:max-w-[7ch]"
					></span></a
				></Card.Title
			>
		</Card.Header>
		<Card.Content class="">
			<div class="mb-4">Feel free to connect with me directly on any of the apps :)</div>
			<div class="flex max-h-32 flex-1">
				<a
					href="https://bsky.app/profile/zachariahshrimp.com"
					class="mx-2 flex aspect-square basis-1/3 items-center justify-center border-2 shadow-light transition-all hover:scale-110 hover:bg-purple-200 hover:shadow-big"
				>
					<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8"
						><title>Bluesky</title><path
							d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
						/></svg
					>
				</a>
				<a
					href="https://github.com/zachypng"
					class="mx-2 flex aspect-square basis-1/3 items-center justify-center border-2 shadow-light transition-all hover:scale-110 hover:bg-purple-200 hover:shadow-big"
				>
					<svg role="img" viewBox="0 0 24 24" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg"
						><title>GitHub</title><path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/></svg
					>
				</a>
				<a
					href="mailto:zach.smith0121@gmail.com"
					class="mx-2 flex aspect-square basis-1/3 items-center justify-center border-2 shadow-light transition-all hover:scale-110 hover:bg-purple-200 hover:shadow-big"
				>
					<svg role="img" viewBox="0 0 24 24" class="h-8 w-8" xmlns="http://www.w3.org/2000/svg"
						><title>Gmail</title><path
							d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
						/></svg
					>
				</a>
			</div>
		</Card.Content>
	</Card.Root>
</div>
