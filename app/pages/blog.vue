<template>
	<div>
		<ContentDoc />
		<ContentList
			v-slot="{ list }"
			path="/blog/"
		>
			<ol>
				<li
					v-for="article in list"
					:key="article._path"
				>
					<NuxtLink :to="article._path">
						<NuxtTime :datetime="article.date" /> — {{ article.title }}
					</NuxtLink>
				</li>
			</ol>
		</ContentList>
	</div>
</template>
