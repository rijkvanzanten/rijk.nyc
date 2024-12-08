<template>
	<div>
		<NuxtLink to="/talks">
			← All talks
		</NuxtLink>
		<hr>
		<ContentDoc>
			<template #default="{ doc }">
				<h1>{{ doc.name }}</h1>
				<ContentRenderer :value="doc" />

				<template v-if="doc.videoId">
					<h2>Watch</h2>
					<ScriptYouTubePlayer :video-id="doc.videoId">
						<template #awaitingLoad>
							<div class="play-button">
								<svg
									height="100%"
									version="1.1"
									viewBox="0 0 68 48"
									width="100%"
								><path
									d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
									fill="#f00"
								/><path
									d="M 45,24 27,14 27,34"
									fill="#fff"
								/></svg>
							</div>
						</template>
					</ScriptYouTubePlayer>
				</template>

				<template v-if="doc.live">
					<h2>As presented live at:</h2>
					<ol>
						<li
							v-for="item in doc.live"
							:key="item.name + '-' + item.date"
						>
							{{ item.name }} – <NuxtTime :datetime="item.date" />
						</li>
					</ol>
				</template>
			</template>
		</ContentDoc>
	</div>
</template>

<style scoped>
.play-button {
	inline-size: 64px;
	position: absolute;
	inset-inline-start: 50%;
	inset-block-start: 50%;
	transform: translate(-50%, -50%);
}
</style>
