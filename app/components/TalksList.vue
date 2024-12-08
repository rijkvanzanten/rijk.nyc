<template>
	<ContentList
		v-slot="{ list }"
		:path="path"
	>
		<ol>
			<li
				v-for="article in list"
				:key="article._path"
			>
				<NuxtLink :to="article._path">
					{{ article.name }}
				</NuxtLink>
			</li>
		</ol>
	</ContentList>
</template>

<script lang="ts" setup>
defineProps<{ path: string }>();
</script>
