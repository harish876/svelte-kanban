<script>
	import { draggable } from '@neodrag/svelte';
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import { columns } from '../store/store';
	import Card from './Card/Card.svelte';
	import TitleCard from './Card/TitleCard.svelte';

	const flipDurationMs = 300;
	function handleDndConsiderCards(e) {
		console.log(e);
		columns[colIdx].cards = e.detail.items;
		// $store[colIdx].cards = [...$store[colIdx].cards]
	}
	function handleDndFinalizeCards(e) {
		columns[colIdx].cards = e.detail.items;
		// $store[colIdx].cards = [...$store[colIdx].cards]
	}
</script>

<div class="flex w-full px-12 my-12">
	<div class="divider divider-horizontal" />
	{#each columns as column, columnIdx (column.id)}
		<div
			class="flex flex-col space-y-10 w-1/5"
            colIdx="{columnIdx}"
			use:dndzone={{ items: column.cards }}
			on:consider={handleDndConsiderCards}
			on:finalize={handleDndFinalizeCards}
		>
			<TitleCard title={column.title} />
			{#each column.cards as card}
				<Card title={{ subject: card.subject, category: card.category }} />
			{/each}
		</div>
		<div class="divider divider-horizontal" />
	{/each}
</div>
