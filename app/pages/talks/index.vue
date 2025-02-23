<script lang="ts" setup>
const { data: page } = await useAsyncData('/talks', () => {
	return queryCollection('pages').path('/talks').first();
});

const { data: talks } = await useAsyncData('$talks-list', () => {
	return queryCollection('talks').select('path', 'title').all();
});
</script>

<template>
	<div>
		<ContentRenderer
			v-if="page"
			:value="page"
		/>

		<ol v-if="talks">
			<li
				v-for="article in talks"
				:key="article.path"
			>
				<NuxtLink :to="article.path">
					{{ article.title }}
				</NuxtLink>
			</li>
		</ol>
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
