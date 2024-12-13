<script lang="ts">
	import Welcome from '$lib/components/Welcome.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<div class="lg:h-[200vh]">
	<div
		class="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] bg-[size:10px_10px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]"
	></div>

	<Welcome />
	<Connect />
	<Projects />
</div>
