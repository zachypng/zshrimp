<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { scrollIntoView } from '$lib/utils';
</script>

<div class="container sticky top-6 mx-auto mt-4 p-4">
	<Card.Root class="relative bg-emerald-100 transition-all lg:hover:shadow-big">
		<Card.Header>
			<Card.Title class="text-5xl font-extrabold" id="welcome"
				><a
					href="#top"
					class="group"
					on:click|preventDefault={() => {
						scrollIntoView('#top');
					}}
					>Hello!<span
						class="mt-1 block h-2 max-w-0 bg-black transition-all duration-300 group-hover:max-w-[6ch]"
					></span></a
				></Card.Title
			>
		</Card.Header>
		<Card.Content>
			<p class="max-w-xs text-balance pr-2 pt-2">
				I'm <span class="text-emerald-500">Zach Smith</span>, a web developer, data scientist, UI/UX
				designer, IT specialist, and friend to many. Currently based in
				<span class="text-emerald-500"> New York City</span>.
			</p>
			<p class="max-w-xs text-balance pr-2 pt-2">
				Feel free to explore my
				<a
					href="#projects"
					on:click|preventDefault={() => {
						scrollIntoView('projects');
					}}
					class="text-emerald-500 underline underline-offset-2">recent projects</a
				>
				or
				<a
					href="#connect"
					on:click|preventDefault={() => {
						scrollIntoView('connect');
					}}
					class="text-emerald-500 underline underline-offset-2">connect with me</a
				>.
			</p>
		</Card.Content>
	</Card.Root>
</div>
