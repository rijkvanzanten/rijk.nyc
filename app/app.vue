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
	--columns: 2;
	--areas:
		"header header"
		"nav nav"
		"page page";
}

#grid {
	padding: var(--space);
	display: grid;
	grid-template-columns: repeat(var(--columns), 1fr);
	gap: calc(var(--space) * 2) var(--space);
	grid-template-areas: var(--areas);
}

#header {
	grid-area: header;
}

#nav {
	grid-area: nav;
}

#page {
	grid-area: page;
}
</style>
