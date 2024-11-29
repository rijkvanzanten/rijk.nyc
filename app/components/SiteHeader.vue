<template>
	<header>
		<NuxtLink
			to="/"
			class="logo"
		>
			<SiteLogo />
		</NuxtLink>
		<div class="title">
			<h1>Rijk van Zanten</h1>
		</div>
	</header>
</template>

<style scoped>
header {
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: subgrid;
}

.logo {
	background: var(--background-color);
	grid-column: 1;
	padding: var(--space);
	aspect-ratio: 1;
}

.title {
	background: var(--background-color);
	grid-column: 2 / -1;
	align-content: center;
	padding: var(--space) var(--space-lg);
	container-type: size;
}

h1 {
	font-family: 'Olde', serif;
	font-size: 70cqh;
}
</style>
