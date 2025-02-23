<template>
	<header>
		<NuxtLink
			to="/"
			class="title"
		>
			<span>Rijk van Zanten</span>
		</NuxtLink>
	</header>
</template>

<style scoped>
header {
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: subgrid;
}

.title {
	background: var(--background-color);
	grid-column: 1 / -1;
	align-content: center;
	padding: var(--space) var(--space-lg);
	container-type: size;
	color: var(--foreground-color);
	text-decoration: none;
}
</style>
