<template>
	<div>
		<p class="name">{{ name }}</p>
		<button @click="getWidgets">Get!</button>
		<ol>
			<li v-for="widget in widgets">{{ widget.title }}</li>
		</ol>
		{{ myWidgetFn('tacos') }}
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
		data() {
			return {}
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
						//console.log(response)
					})
					.catch(e => {
						//console.log(e)
					})
			},
			myWidgetFn(input){
				return input.toUpperCase()
			}
		},
	}
</script>

<style scoped>

</style>
