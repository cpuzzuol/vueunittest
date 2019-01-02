<template>
	<div>
		{{ name }}
		<button @click="getWidgets">Get!</button>
		<ol>
			<li v-for="widget in widgets">{{ widget.title }}</li>
		</ol>
	</div>
</template>

<script>
	import axios from 'axios'
	import { widgets } from '@/assets/data'
	import { mapActions, mapState } from 'vuex'
	export default {
		name: "Widgets",
		props: {
			name: String
		},
		created() {
			this.setWidgets(widgets)
		},
		computed: {
			...mapState([
				'widgets'
			])
		},
		methods: {
			...mapActions([
				'setWidgets'
			]),
			getWidgets(){
				axios.get('https://jsonplaceholder.typicode.com/posts')
					.then(response => {
						this.setWidgets(response.data)
						console.log(response)
					})
					.catch(e => {
						console.log(e)
					})
			}
		},
	}
</script>

<style scoped>

</style>
