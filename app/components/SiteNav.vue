<template>
	<nav>
		<NuxtLink to="/">
			/about
		</NuxtLink>

		<NuxtLink to="/talks">
			/talks
		</NuxtLink>

		<NuxtLink to="/blog">
			/blog
		</NuxtLink>

		<NuxtLink to="/uses">
			/uses
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

.router-link-active {
	position: relative;
}

.router-link-active::before {
	content: '→';
	position: absolute;
	inset-inline-start: -1.5ch;
}
</style>
