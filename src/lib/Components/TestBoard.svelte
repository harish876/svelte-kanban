<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import Card from './Card/Card.svelte';
	import TitleCard from './Card/TitleCard.svelte';

	export let columnItems;
	const flipDurationMs = 300;
	function handleDndConsiderColumns(e) {
		columnItems = e.detail.items;
	}
	function handleDndFinalizeColumns(e) {
		columnItems = e.detail.items;
	}
	function handleDndConsiderCards(cid, e) {
		const colIdx = columnItems.findIndex((c) => c.id === cid);
		columnItems[colIdx].items = e.detail.items;
		columnItems = [...columnItems];
	}
	function handleDndFinalizeCards(cid, e) {
		const colIdx = columnItems.findIndex((c) => c.id === cid);
		columnItems[colIdx].items = e.detail.items;
		columnItems = [...columnItems];
	}
</script>

<section
	class="flex w-full px-12 my-12 h-full"
	use:dndzone={{ items: columnItems, flipDurationMs, type: 'columns' }}
	on:consider={handleDndConsiderColumns}
	on:finalize={handleDndFinalizeColumns}
>
	{#each columnItems as column (column.id)}
		<div
			class="flex flex-col space-y-10 w-1/5"
			use:dndzone={{ items: column.cards, flipDurationMs }}
			on:consider={(e) => handleDndConsiderCards(column.id, e)}
			on:finalize={(e) => handleDndFinalizeCards(column.id, e)}
		>
			<TitleCard title={column.title} />
			{#each column.cards as card}
				<Card title={{ subject: card.subject, category: card.category }} />
			{/each}
		</div>
	{/each}
</section>
