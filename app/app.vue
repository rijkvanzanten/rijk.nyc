<template>
	<NuxtRouteAnnouncer />

	<div id="grid">
		<SiteHeader id="header" />
		<SiteNav id="nav" />
		<div id="page">
			<NuxtPage />
		</div>
	</div>
</template>

<style>
:root {
	--columns: 8;
}

#grid {
	padding: var(--space);
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	gap: var(--space-lg) var(--space);

	/* Each cell should have it's own background set to background-color */
	background-color: var(--foreground-color);
}

/* #header {
	grid-area: header;
}

#nav {
	grid-area: nav;
}

#page {
	grid-area: page;
} */
</style>
