<template>
	<div>
		<ContentDoc />

		<h2>Web Development</h2>
		<TalksList path="/talks/web" />

		<h2>Miscellaneous</h2>
		<TalksList path="/talks/misc" />
	</div>
</template>

<style scoped>
ol {
	margin-top: 2rem !important;
	display: block;
	list-style: none;
	padding: 0;
}
</style>
