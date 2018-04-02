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

		<div class="dropdown is-hoverable">
  			<div class="dropdown-trigger">
    			<button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
      			<span>Food Recipes</span>
      			<span class="icon is-small">
        			<i class="fas fa-angle-down" aria-hidden="true"></i>
      			</span>
    			</button>
  			</div>
  			<div class="dropdown-menu" id="dropdown-menu4" role="menu">
    			<div class="dropdown-content">
      				<a href="#" class="dropdown-item">
        				Appetizers
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Meat & Poultry
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Fish
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
       					Salads
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Pasta
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Soups
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Light Meals
      				</a>
    			</div>
  			</div>
		</div>
		<div class="dropdown is-hoverable">
  			<div class="dropdown-trigger">
    			<button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
      			<span>Dessert Recipes</span>
      			<span class="icon is-small">
        			<i class="fas fa-angle-down" aria-hidden="true"></i>
      			</span>
    			</button>
  			</div>
  			<div class="dropdown-menu" id="dropdown-menu4" role="menu">
    			<div class="dropdown-content">
      				<a href="#" class="dropdown-item">
        				Chocolate
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Cakes
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Biscuits & Cookies
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
       					Fruit
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Ice Cream
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Jams & Conserves
      				</a>
      				<hr class="dropdown-divider">
      				<a href="#" class="dropdown-item">
        				Pastries
      				</a>
    			</div>
  			</div>
		</div>

  		<!-- <div class="columns"> -->
    		<!-- <div class="column"> -->
      			<div class="card">
      				
      				<div class="card-image">
      					<figure class="image is-3by2">
  							<img src="./almondcookies.png">
						</figure>
					</div>
        			<div class="card-content">
        				<div class="media">
        					<div class="media-left">
        						<figure class="image is-128x128">
        							<img src="./chef_1.png">
        						</figure>
        					</div>
        					<div class="media-content">
        						<p class="title is-4">Oatmeal Cookies</p>
        						<p class="subtitle is-6">Panikkos Hadjigeorgiou</p>
        					</div>
        				</div>

        				<div class="content">
      						Check out this simple and quick recipe for the perfect healthy afternoon snack!
    					</div>

        			</div>
          				
        			<!-- </div> -->
        			<footer class="card-footer">
        				<div class="card-footer-item">
          					<a href="#" class="button is-success">
            					<i class="far fa-save"></i>
          					</a>
        				</div>
          				<div class="card-footer-item">
            				<a href="#" class="button is-danger">
              					<i class="far fa-star"></i>
            				</a>
          				</div>
          				<div class="card-footer-item">
            				<a href="#" class="button is-info">
              					<i class="fas fa-plus"></i>
            				</a>
          				</div>
        			</footer>
      			</div>
    		<!-- </div> -->
  		<!-- </div> -->
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