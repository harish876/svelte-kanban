import { writable } from 'svelte/store'
import { browser } from '$app/environment';

export const persistStore = (key, initial) => {
  //const persist = browser ?window.localStorage.getItem(key):undefined
  //const data = persist ? JSON.parse(persist) : initial
  const data = browser ? JSON.parse(window.localStorage.getItem(key)) ?? initial : initial;
  const store = writable(data, () => {
    const unsubscribe = store.subscribe(value => {
      localStorage.setItem(key, JSON.stringify(value))
    })
    return unsubscribe
  })
  return store
} 