<template>
	<header>
		<NuxtLink
			to="/"
			class="logo"
		>
			<SiteLogo />
		</NuxtLink>
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
	color: var(--foreground-color);
	text-decoration: none;
}

span {
	font-family: 'Olde', serif;
	font-size: 70cqh;
	text-box-edge: cap alphabetic;
}
</style>
