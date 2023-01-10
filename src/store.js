import { writable } from "svelte/store";
import data from './data.json';

export const datos = writable(data)