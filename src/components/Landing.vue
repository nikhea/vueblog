<template>
  <div class="landing">
      <!-- <NavBar/> -->
    <div class="text">
      <h1>Welcome To Fortune Articles</h1>
      <hr />
      <router-link class="Link" to="/articules">View Articles</router-link>
    </div>
  </div>
</template>


<script>
// import NavBar from './Layout/Nav'
export default {
  name: "Landing",
  components:{
    // NavBar
  }
};
</script>

<style scoped>

h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 5rem;
  font-weight: 400;
}

@media only screen and (min-width: 768px) {
  img {
    width: 50%;
  }
}
hr {
  width: 400px;
  height: 3px;
  background-color: #fff;
  border: 0;
  margin-bottom: 50px;
  margin-top: 20px
}

.Link {
  background: #333;
  color: #fff;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  /* opacity: 0; */
  letter-spacing: 1.9px;
  box-shadow: 1px 1px 1px 1px;
  transition: all 1.2s
}
.Link:hover{
    box-shadow: none
}
.landing {
  background: linear-gradient(rgba(0, 0, 0, 0.712), rgba(0, 0, 0, 0.712)),
    url("/images/selective-focus-stacking-magazine-place-260nw-662452171.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 20%;

  color: #fff;
  animation: 1.5s fadein 0.4s forwards;
  opacity: 0;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>