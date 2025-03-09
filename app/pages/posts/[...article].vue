<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("posts").path(route.path).first();
});
</script>

<template>
	<div>
		<ContentRenderer v-if="page" :value="page" />

		<hr />

		<NuxtLink to="/posts">← Back to all posts</NuxtLink>
	</div>
</template>
