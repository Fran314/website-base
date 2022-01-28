<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({});
</script>

<template>
	<div class="some4">
		<div class="block">
			<h1>Something 4</h1>
			<div>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nulla at ab voluptatem laudantium voluptatum! Quia laborum iusto tempore fugiat.
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.some4 {
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