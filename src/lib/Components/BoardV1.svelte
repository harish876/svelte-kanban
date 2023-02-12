<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { board,boardData,updateStatus } from '../store/store';
	import Card from './Card/Card.svelte';
	import TitleCard from './Card/TitleCard.svelte';

    let dropTargetStyle;
	let columnItems = board
	const flipDurationMs = 200;
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
		updateStatus(columnItems)
	}
</script>

<section
	class="flex w-full px-12 my-12 h-full"
	use:dndzone={{ items: columnItems, flipDurationMs, type: 'columns'}}
	on:consider={handleDndConsiderColumns}
	on:finalize={handleDndFinalizeColumns}
>
	{#each columnItems as column (column.id)}
		<div class="column" animate:flip={{ duration: flipDurationMs }}>
			<TitleCard title={column.name} />
			<div
				class="column-content"
				use:dndzone={{ items: column.items, flipDurationMs, dropTargetStyle }}
				on:consider={(e) => handleDndConsiderCards(column.id, e)}
				on:finalize={(e) => handleDndFinalizeCards(column.id, e)}
			>
				{#each column.items as item (item.id)}
                    <Card title={{ subject: item.name, category: item.category }} />
				{/each}
			</div>
		</div>
	{/each}
</section>

<!--
    use:dndzone={{ items: columnItems, flipDurationMs, type: 'columns' }}
on:consider={handleDndConsiderColumns}
on:finalize={handleDndFinalizeColumns}
-->
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
