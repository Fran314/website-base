<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({});
</script>

<template>
	<div class="some3">
		<div class="block">
			<h1>Something 3</h1>
			<div>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eveniet nemo vero delectus inventore similique. Non voluptates qui in ut deleniti ipsa! Illum, dolore repudiandae debitis iste quaerat error nisi in amet autem asperiores reprehenderit nam quae voluptatem recusandae corrupti nostrum quo minima voluptate inventore voluptatibus tenetur ab assumenda? At debitis dignissimos ea incidunt velit placeat, dolore tenetur perspiciatis pariatur sequi ad deleniti nobis facilis ipsa eaque labore repellendus minus quas illum! Optio similique ullam ipsam earum obcaecati vel porro pariatur eum officia inventore in, quos tempora facere totam dolor doloremque necessitatibus quaerat unde illum, adipisci autem. Mollitia, blanditiis reiciendis?
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.some3 {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 40rem;
	margin: 0 auto;

	@media (max-width: 500px) {
		width: 100%;
	}
}
</style>