<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { boardData } from '../store/store';
	import Card from './Card/Card.svelte';
	import TitleCard from './Card/TitleCard.svelte';

    let dropTargetStyle;
	const flipDurationMs = 200;
	
	function handleDndConsiderColumns(e) {
		$boardData = e.detail.items
	}
	function handleDndFinalizeColumns(e) {
		$boardData = e.detail.items

	}
	function handleDndConsiderCards(cid, e) {
		const colIdx1 = $boardData.findIndex((c) => c.id === cid);
		$boardData[colIdx1].items = e.detail.items;
		$boardData = [...$boardData];
	}
	function handleDndFinalizeCards(cid, e) {
		const colIdx1 = $boardData.findIndex((c) => c.id === cid);
		$boardData[colIdx1].items = e.detail.items;
		$boardData = [...$boardData];
	}
</script>

<section
	class="flex w-full px-12 my-12 h-full"
	use:dndzone={{ /*items: columnItems,*/ items:$boardData, flipDurationMs, type: 'columns'}}
	on:consider={handleDndConsiderColumns}
	on:finalize={handleDndFinalizeColumns}
>
	{#each $boardData as column (column.id)}
		<div class="column" animate:flip={{ duration: flipDurationMs }}>
			<TitleCard title={column.name} />
			<div
				class="column-content"
				use:dndzone={{ items: column.items, flipDurationMs, dropTargetStyle }}
				on:consider={(e) => handleDndConsiderCards(column.id, e)}
				on:finalize={(e) => handleDndFinalizeCards(column.id, e)}
			>
				{#each column.items as item (item.id)}
                    <Card title={{ subject: item.name, category: column.name }} />
				{/each}
			</div>
		</div>
	{/each}
</section>

<style>
	.column {
		height: 100%;
		width: 100%;
		padding: 0.5em;
		margin: 1em;
		float: left;
		overflow-y: hidden;
	}
	.column-content {
		height: 100%;
		overflow-y: hidden;
		padding: 4%;
	}
</style>
