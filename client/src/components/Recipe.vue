<template>
  <div class="container is-mobile">
    <section class="articles" id="rec-article">
      <div class="column is-10 is-offset-1">

        <div class="card article">
          <div class="card-content" id="rec-card-content">
            <p class="title article-title" id="rec-article-title">TITLE</p>
            <p class="subtitle article-subtitle" id="rec-article-subtitle">Author Name</p>

            <div class="columns is-multiline">

              <div class="column">
                <strong>Difficulty</strong>
                <br/>
                Beginner
              </div>
              <div class="column">
                <strong>Total Time</strong>
                <br/>
                35'
              </div>
              <div class="column">
                <strong>Rating</strong>
                <br/>
                5/5
              </div>
              <div class="column">
                <button class="button is-medium">
                  Favourite
                  <figure class="avatar">
                    <img id="rec-heart" src="../assets/heart.svg">
                  </figure>
                </button>
              </div>
            </div>

            <figure class="media-left" id="rec-media-left">
              <div class="media-content has-text-centered" id="rec-card_image">
                <img src="@/assets/recipe_main_mydia_pane.jpg"/>
              </div>
            </figure>

            <div class="columns">
              <div class="column is-three-fifths">
                <div class="content article-body" id="rec-method">
                  <h3>Method</h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget urna enim. Ut cursus feugiat
                  mattis.
                  Donec vitae gravida augue. Aenean scelerisque metus ac erat accumsan, quis iaculis tellus pretium.
                  Suspendisse ultrices semper odio, quis tristique lorem vulputate at. Quisque luctus nulla vel rhoncus
                  lobortis. Vestibulum euismod ut ipsum in faucibus. Aenean fermentum vel ligula sed pulvinar.
                  Suspendisse
                  potenti. Donec et velit mattis, bibendum dui et, fermentum turpis.
                  <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere
                    sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                  <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea
                    dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non
                    sodales neque sodales ut etiam.
                    Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>

                </div>
              </div>
              <div class="column">
                <div class="content" id="rec-ingredients">
                  <h3>Ingredients</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget urna enim. Ut cursus feugiat
                    mattis.
                    Donec vitae gravida augue. Aenean scelerisque metus ac erat accumsan, quis iaculis tellus pretium.
                    Suspendisse ultrices semper odio, quis tristique lorem vulputate at. Quisque luctus nulla vel
                    rhoncus
                    lobortis. Vestibulum euismod ut ipsum in faucibus. Aenean fermentum vel ligula sed pulvinar.
                    Suspendisse
                    potenti. Donec et velit mattis, bibendum dui et, fermentum turpis.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .container{
    opacity: 0.95;
  }
  div.column.is-10:first-child {
    padding-top: 0;
    margin-top: 0;
  }
</style>
