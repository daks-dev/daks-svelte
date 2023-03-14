import { json } from '@sveltejs/kit';
import { building } from '$app/environment';
import iconset from '$lib/ui/iconify/iconset.server';

export const prerender = false;

export const GET = async () => json(building ? null : await iconset());
