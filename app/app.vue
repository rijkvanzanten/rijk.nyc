<template>
	<NuxtRouteAnnouncer />

	<div id="grid">
		<SiteHeader id="header" />
		<div id="page">
			<NuxtPage />
		</div>
		<SiteNav id="nav" />
		<SiteLinks id="links" />
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
}

#page {
	background-color: var(--background-color);
	padding: var(--space-lg);
	grid-column: 1 / -1;

	@media (width > 550px) {
		grid-column: 2 / span 7;
	}

	@media (width > 950px) {
		grid-column: 1 / span 6;
	}

	* + * {
		margin-top: 1em;
	}

	h2 {
		margin-top: 3em;
	}

	hr {
		border: 0;
		border-block-end: 2px dashed var(--foreground-color);
		margin: 2rem 0;
	}

	> * {
		max-width: 38rem;
	}
}

#nav {
	grid-column: 1 / -1;

	@media (width > 950px) {
		grid-column: 7 / span 2;
	}
}

#links {
	grid-column: 1 / -1;
}
</style>
