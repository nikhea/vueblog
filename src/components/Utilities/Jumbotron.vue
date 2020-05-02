<template>
  <div class="container jumbotron">
    <div class="text">
      <h1>welcome to fortune article!</h1>
      <p>View our list of article from all over the world</p>
      <router-link to="/newArticles">
      <button>Add New Article</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Jumbotron"
};
</script>

<style scoped>
.jumbotron {
  margin-top: 70px;
  margin-bottom: 3rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
  padding: 4rem 2rem;
  border-radius: 0.5rem;
}
.text {
  margin-left: 40px;
  /* color: #fff */
}
.text > * {
  margin-bottom: 15px;
  font-weight: normal;
  text-transform: capitalize;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;

}
button {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  padding: 10px 15px;
  text-transform: capitalize;
  border-radius: 5px;
  margin-top: 12px;

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    opacity 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
button:hover {
  background: var(--dark);
  opacity: 0.8;
}
</style>