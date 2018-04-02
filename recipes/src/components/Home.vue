<template>
	<div class="home">
		<section class="hero is-primary">
    		<div class="hero-body">
      			<div class="container">
        			<h1 class="title is-1">Nomnomz Foodz</h1>
        			<h2 class="subtitle">Check out the recipes of the day!</h2>
      			</div>
    		</div>
  		</section>


  		<div class="columns">
    		<div class="column">
      			<div class="card">
        			<div class="card-content">
          				<h2 class="title">Recipe of the day</h2>
          				<h3 class="subtitle">Panikkos Hadjigeorgiou</h3>
        			</div>
        			<footer class="card-footer">
        				<div class="card-footer-item">
          					<a href="#" class="button is-success">
            					<i class="fa fa-thumbs-up"></i>
          					</a>
        				</div>
          				<div class="card-footer-item">
            				<a href="#" class="button is-danger">
              					<i class="fa fa-thumbs-down"></i>
            				</a>
          				</div>
          				<div class="card-footer-item">
            				<a href="#" class="button is-info">
              					<i class="fa fa-retweet"></i>
            				</a>
          				</div>
        			</footer>
      			</div>
    		</div>

  		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				title: 'Welcome Back',
				user: {
					firstName: 'Leni',
					lastName: 'Belly'
				}
			}
		}
	}
</script>

<style scoped>
	
</style>