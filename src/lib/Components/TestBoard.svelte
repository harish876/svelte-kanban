<script>
	import { draggable } from '@neodrag/svelte';
    import Card from './Card/Card.svelte';
	import TitleCard from './Card/TitleCard.svelte';
</script>

<div class="flex w-3/4 mx-auto my-24">
    <div class="flex flex-col space-y-10 w-1/5">
        <TitleCard title={"Todo"}/>
        <Card title={"Status 1A"}/>
        <Card title={"Status 1B"}/>
        <Card title={"Status 1C"}/>
        <Card title={"Status 1D"}/>
    </div>
	<div class="divider divider-horizontal" />
    <div class="flex flex-col space-y-10 w-1/5">
        <TitleCard title={"In Progress"}/>
        <Card title={"Status 2"}/>
    </div>
	<div class="divider divider-horizontal" />
    <div class="flex flex-col space-y-10 w-1/5">
        <TitleCard title={"Code Review"}/>
        <Card title={"Status 3"}/>
    </div>
	<div class="divider divider-horizontal" />
    <div class="flex flex-col space-y-10 w-1/5">
        <TitleCard title={"Development Done"}/>
        <Card title={"Status 4"}/>
    </div>
	<div class="divider divider-horizontal" />
    <div class="flex flex-col space-y-10 w-1/5">
        <TitleCard title={"QA Done"}/>
        <div use:draggable={{ ignoreMultitouch: true,grid: [10, 10] }} class="grid h-20  bg-base-300 rounded-box place-items-center">
            Status-5
        </div>
    </div>
</div>
