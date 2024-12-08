<template>
	<div>
		<ContentDoc>
			<template #default="{ doc }">
				<h1>{{ doc.title }}</h1>
				<ContentRenderer :value="doc" />
			</template>
		</ContentDoc>

		<hr>

		<NuxtLink to="/blog">
			← Back to blog
		</NuxtLink>
	</div>
</template>
