<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
	return queryCollection("talks").path(route.path).first();
});
</script>

<template>
	<div>
		<ContentRenderer v-if="page" :value="page" />

		<VideoPlayer v-if="page?.videoId" :video-id="page.videoId" />

		<template v-if="page?.live">
			<h2>As presented live at:</h2>

			<ol>
				<li v-for="item in page.live" :key="item.name + '-' + item.date">
					{{ item.name }} –
					<NuxtTime :datetime="item.date" />
				</li>
			</ol>
		</template>

		<hr />

		<NuxtLink to="/talks">← Back to all talks</NuxtLink>
	</div>
</template>
