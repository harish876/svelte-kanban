<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import Navbar from '../lib/Components/Navbar/Navbar.svelte';
	import Title from '../lib/Components/Title.svelte';
	import '../app.css';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="drawer">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
		 <!--Page content here -->
        <Navbar />
        <slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-2 w-80 bg-base-100 text-base-content list-none hover:list-disc">
            <!--Side bar content here -->
            <li><Title/></li>
			<li><a class='flex-0 btn btn-ghost p-2'href='./hero'>Hero</a></li>
			<li><a class='flex-0 btn btn-ghost p-2'href='./board'>Board</a></li>
		</ul>
	</div>
</div>

