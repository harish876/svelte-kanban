<script>
	import { draggable } from '@neodrag/svelte';
    export let title;
</script>

<div use:draggable={{ ignoreMultitouch: true, bounds:'body',grid: [10, 10] }} class="grid h-20  bg-base-300 rounded-box place-items-center">
   {title}
</div>