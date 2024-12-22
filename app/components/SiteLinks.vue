<script setup lang="ts">
const { links } = useAppConfig();
</script>

<template>
	<div class="links">
		<SiteLink
			v-for="link in links"
			:key="link.to"
			:to="link.to"
			:name="link.name"
			:icon="link.icon"
		/>
	</div>
</template>

<style scoped>
.links {
	display: grid;
	grid-template-columns: subgrid;
}
</style>
