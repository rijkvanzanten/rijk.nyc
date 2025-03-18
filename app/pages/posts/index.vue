<script lang="ts" setup>
const { data: page } = await useAsyncData("/posts", () => {
	return queryCollection("pages").path("/posts").first();
});

const { data: posts } = await useAsyncData("$posts-list", () => {
	return queryCollection("posts").select("path", "title", "date").order("date", "DESC").all();
});
</script>

<template>
	<div>
		<ContentRenderer v-if="page" :value="page" />

		<ol v-if="posts" class="list-none p-0">
			<li v-for="article in posts" :key="article.path" class="p-0">
				<NuxtLink :to="article.path">
					<NuxtTime :datetime="article.date" />
					— {{ article.title }}
				</NuxtLink>
			</li>
		</ol>
	</div>
</template>
