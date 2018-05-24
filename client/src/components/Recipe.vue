<template>
  <div class="container">
    <section class="articles">
      <div class="column is-10 is-offset-1">

        <div class="card article">
          <div class="card-content">
            <p class="title article-title">TITLE</p>
            <p class="subtitle article-subtitle">Author Name</p>

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
                    <img src="../assets/heart.svg">
                  </figure>
                </button>
              </div>
            </div>

            <figure class="media-left">
              <div class="media-content has-text-centered">
                <img src="@/assets/recipe_main_mydia_pane.jpg"/>
              </div>
            </figure>

            <div class="columns">
              <div class="column is-three-fifths">
                <div class="content article-body">
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
                <div class="content">
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

<style scoped>

  .articles {
    margin: 5rem 0;
  }

  .articles .content p {
    line-height: 1.9;
  }

  .media-left {
    margin-bottom: 1rem;
  }

  div.column.is-10:first-child {
    padding-top: 0;
    margin-top: 0;
  }

  .article-title {
    font-size: 2rem;
    font-weight: lighter;
    line-height: 2;
  }

  .article-subtitle {
    color: #909AA0;
    margin-bottom: 3rem;
  }

  .article-body {
    line-height: 1.4;
    text-align: left;
  }
  .button{
    border: none;
  }
</style>
