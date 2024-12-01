<template>
	<div>
		<ContentDoc />
		<ContentList
			v-slot="{ list }"
			path="/talks/"
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
