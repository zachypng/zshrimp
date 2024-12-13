<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Zach Smith</title>
	<meta name="description" content="Zach's Personal Site" />
</svelte:head>

{@render children()}
