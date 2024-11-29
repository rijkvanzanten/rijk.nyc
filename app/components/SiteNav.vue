<template>
	<nav>
		<ul>
			<li>
				<NuxtLink to="/uses">
					Uses
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/talks">
					Talks
				</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/blog">
					Blog
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
nav {
	grid-column: 1 / -1;
	background-color: var(--background-color);
}
</style>
