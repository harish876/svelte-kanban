<script>
	export let title = {
		subject,
		category
	};
	let styleClass = 'alert-success';
	if (title.category === 'On hold') {
		styleClass =
			'justify-center mb-1 h-8 w-3/4 alert alert-error shadow-lg overflow-hidden text-sm';
	} else if (title.category === 'Dev Done') {
		styleClass =
			'justify-center mb-1 h-8 w-3/4 alert alert-success shadow-lg overflow-hidden text-sm ';
	} else {
		styleClass = 'justify-center mb-1 h-8 w-3/4 alert shadow-lg overflow-hidden text-sm ';
	}
</script>

<label for="my-modal">
	<div class="grid h-24 bg-base-300 rounded-box place-items-center text-center my-4">
		{title.subject}
		<div class={styleClass}>
			{#if title.category === 'On hold'}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			{/if}
			<span class="hidden lg:flex flex-col">{title.category}</span>
		</div>
	</div>
</label>
