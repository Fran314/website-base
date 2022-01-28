<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({});
</script>

<template>
	<div class="some1">
		<div class="block">
			<h1>Something 1</h1>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit rem necessitatibus dolorum nostrum excepturi tenetur qui repellat eum fugiat explicabo aut illo natus obcaecati ratione, dolorem magnam dicta! Quas blanditiis libero facere asperiores nisi, sint possimus, itaque minima, ratione recusandae qui! Eligendi quod beatae ducimus sapiente adipisci, at enim!
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.some1 {
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