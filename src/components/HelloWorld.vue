<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<router-link to="/zg">zg</router-link>
	hr
	<router-link to="/wg">wg</router-link>	
	<router-view></router-view>
  </div>
</template>

<script>	
	
export default {
  name: 'HelloWorld',
  props: {
    msg: ''
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
