<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	import { scrollIntoView } from '$lib/utils';
	import Voltaire from '$lib/images/voltaire-logo.svelte';
	import { Link } from 'lucide-svelte';
	import JpWhite from '$lib/images/jp-white.svelte';
	import Zshrimp from '$lib/images/zshrimp.svelte';
</script>

<div class="container sticky top-48 mx-auto p-4">
	<Card.Root class="relative snap-y bg-amber-100 transition-all lg:hover:shadow-big">
		<Card.Header class="sticky top-0">
			<Card.Title class="snap-start text-5xl font-extrabold" id="projects"
				><a
					href="#projects"
					class="group"
					on:click|preventDefault={() => {
						scrollIntoView('projects');
					}}
					>Projects<span
						class="mt-1 block h-2 max-w-0 bg-black transition-all duration-300 group-hover:max-w-[8ch]"
					></span></a
				></Card.Title
			>
		</Card.Header>
		<Card.Content class="grid gap-4 lg:grid-cols-2 lg:gap-y-8">
			<div
				class="sticky top-24 max-w-xl border-2 bg-teal-900 p-8 shadow-light transition-all hover:bg-teal-950 lg:row-span-1 lg:row-start-1 lg:hover:shadow-big"
			>
				<div class="flex w-full flex-col items-center">
					<div class="grid grid-flow-row space-y-2">
						<div class="grid grid-flow-col items-center justify-between gap-x-2 text-right">
							<div class="col-span-1 grid-flow-row text-amber-100">
								<Voltaire class="mr-2 h-14 w-14" />
							</div>

							<div class="col-span-2 grid-flow-row text-amber-100">
								<h3 class="text-3xl font-extrabold">Voltaire</h3>
								<Button
									variant="link"
									class="cursor-not-allowed px-0 py-0 text-xs text-amber-100"
									aria-disabled
									disabled><Link class="-mr-1 h-2 w-2 p-0.5" />voltaire.club</Button
								>
								<Button
									variant="link"
									class="px-0 py-0 text-amber-100"
									href="https://github.com/zachypng/voltaire"
									><svg
										role="img"
										viewBox="0 0 24 24"
										class="-mr-1 h-2 w-2 p-0.5"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
										><title>GitHub</title><path
											d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
										/></svg
									>GitHub</Button
								>
							</div>
						</div>
						<div class="block max-w-xl text-right">
							<p class="text-balance text-amber-100">
								Fullstack <span class="text-emerald-500">SvelteKit</span> webapp where users can join
								and partake in virtual book clubs that feature a round-robin club-host system
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="sticky top-0 max-w-xl border-2 bg-sky-900 p-8 text-white shadow-light transition-all hover:bg-sky-950 hover:shadow-big lg:row-span-1 lg:row-start-2"
			>
				<div class="flex w-full flex-col items-center">
					<div class="grid grid-flow-row space-y-2">
						<div class="grid grid-flow-col items-center justify-between gap-x-2 text-right">
							<div class="col-span-1 grid-flow-row">
								<JpWhite class="mr-2 h-14 w-14" />
							</div>

							<div class="col-span-2 grid-flow-row">
								<h3 class="text-3xl font-extrabold">
									JP App <span class="text-base font-thin italic">(proprietary)</span>
								</h3>
							</div>
						</div>
						<div class="block max-w-xl text-right lg:pl-8">
							<p class="text-balance text-sky-50">
								Fullstack <span class="text-sky-300">SvelteKit</span> webapp where employees sign in
								with their Airtable credentials using <span class="text-sky-300">OAuth 2.0</span>.
							</p>
							<Accordion.Root class="my-2 w-full max-w-md" type="single">
								<Accordion.Item value="item-0" class="border-sky-50">
									<Accordion.Trigger>Impact</Accordion.Trigger>
									<Accordion.Content>
										<p class="pb-2">
											The app completely replaced an existing workflow and allowed employees to
											continue data-input without interruption after the previous solution was
											retired.
										</p>
										<p class="pb-2">
											Continuous development after the initial publication saw the addition of the
											orgchart visualization, which proved to be much faster than the other solution
											that was being used, so many data analysts switched to using the new system
											instead.
										</p>
									</Accordion.Content>
								</Accordion.Item>
								<Accordion.Item value="item-1" class="border-sky-50">
									<Accordion.Trigger>Dashboard</Accordion.Trigger>
									<Accordion.Content>
										A dashboard that tracks basic info regarding ongoing longterm projects as well
										as recent data that may be relevant to the employee
									</Accordion.Content>
								</Accordion.Item>
								<Accordion.Item value="item-2" class="border-sky-50">
									<Accordion.Trigger>Data-Input Page</Accordion.Trigger>
									<Accordion.Content>
										A data-input page that enables analysts to create new data entries and upload
										them to the database
									</Accordion.Content>
								</Accordion.Item>
								<Accordion.Item value="item-3" class="border-sky-50">
									<Accordion.Trigger>Orgchart Visualization</Accordion.Trigger>
									<Accordion.Content>
										A system that visualizes employee/company data as an interactable orgchart
									</Accordion.Content>
								</Accordion.Item>
							</Accordion.Root>
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-start-2 row-span-2 hidden w-full max-w-xl items-center justify-center bg-transparent p-8 transition-all duration-700 ease-in-out lg:grid lg:hover:scale-110"
			>
				<Zshrimp class="h-96 w-96" />
			</div>
		</Card.Content>
	</Card.Root>
</div>
