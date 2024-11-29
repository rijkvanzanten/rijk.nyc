<template>
	<NuxtRouteAnnouncer />

	<div id="grid">
		<SiteHeader id="header" />
		<div id="page">
			<NuxtPage />
		</div>
		<SiteNav id="nav" />
	</div>
</template>

<style>
:root {
	--columns: 8;
}

#grid {
	padding: var(--space);
	display: grid;
	grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
	gap: var(--space);
	min-height: 100%;
	grid-template-rows: max-content 1fr max-content;
	align-items: stretch;

	/* Each cell should have it's own background set to background-color */
	background-color: var(--foreground-color);
}

#page {
	background-color: var(--background-color);
	grid-column: 2 / -1;
	padding: var(--space-lg);

	* + * {
		margin-top: 1em;
	}
}
</style>
