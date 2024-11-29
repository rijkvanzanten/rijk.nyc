<template>
	<nav>
		<NuxtLink to="/">
			/about
		</NuxtLink>

		<NuxtLink to="/uses">
			/uses
		</NuxtLink>

		<NuxtLink to="/talks">
			/talks
		</NuxtLink>

		<NuxtLink to="/blog">
			/blog
		</NuxtLink>
	</nav>
</template>

<style scoped>
nav {
	background-color: var(--background-color);
	display: grid;
	grid-template-columns: subgrid;
	padding: var(--space-lg);
	text-align: center;
}

a {
	grid-column: auto / span 2;
}

@media (width > 950px) {
	nav {
		display: block;
		text-align: start;
	}

	a {
		display: block;

		& + a {
			margin-top: 1rem;
		}
	}
}
</style>
