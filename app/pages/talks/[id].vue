<template>
	<div>
		<ContentDoc>
			<template #default="{ doc }">
				<h1>{{ doc.name }}</h1>
				<ContentRenderer :value="doc" />
				<template v-if="doc.videoId">
					<h2>Watch</h2>
					<ScriptYouTubePlayer
						:video-id="doc.videoId"
					/>
				</template>
			</template>
		</ContentDoc>
	</div>
</template>
