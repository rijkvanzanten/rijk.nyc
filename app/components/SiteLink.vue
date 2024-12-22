<script setup lang="ts">
defineProps<{
	to: string;
	icon: string;
	name: string;
}>();
</script>

<template>
	<NuxtLink
		:to="to"
		:aria-label="name"
		class="icon-link"
	>
		<Icon :name="icon" />
	</NuxtLink>
</template>

<style scoped>
.icon-link {
	aspect-ratio: 1;
	background-color: var(--background-color);
	justify-content: center;
	align-items: center;
	display: flex;
	padding: var(--space-lg);
	font-size: 3rem;
	color: var(--foreground-color);
}
</style>
