import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { persistStore } from './persistStore';

export const themes = [
	'light',
	'dark',
	'cupcake',
	'bumblebee',
	'emerald',
	'corporate',
	'synthwave',
	'retro',
	'cyberpunk',
	'valentine',
	'halloween',
	'lofi',
	'pastel',
	'fantasy',
	'wireframe',
	'black',
	'luxury',
	'dracula',
	'cmyk',
	'autumn',
	'business',
	'acid',
	'lemonade',
	'night',
	'coffee',
	'winter'
];

export let board = [
	{
		id: 1,
		name: 'Todo',
		items: [
			{ id: 41, name: 'Task-1A', category: 'Todo' },
			{ id: 42, name: 'Task-1B', category: 'Todo' }
		]
	},
	{
		id: 2,
		name: 'In Progress',
		items: [{ id: 43, name: 'Task2', category: 'In Progress' }]
	},
	{
		id: 3,
		name: 'Code Review',
		items: [{ id: 44, name: 'Task3', category: 'Code Review' }]
	},
	{
		id: 4,
		name: 'Dev Done',
		items: [{ id: 45, name: 'Task4', category: 'Dev Done' }]
	},
	{
		id: 5,
		name: 'On hold',
		items: [{ id: 46, name: 'Task5', category: 'On hold' }]
	}
];

export const boardData = persistStore('kanban-board-items', board)

export const updateStatus = (columnItems) => {
    
    boardData.update((columnItems) => {
		return columnItems
	});
    console.log(boardData)
};

/*
		return todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text };
			}
			return todo;
		});

*/
