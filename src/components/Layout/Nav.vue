<template>
  <div class="nav">
    <div class="container navs">
      <router-link to="/" class="nav_brand">ArticleProject</router-link>
      <ul>
        <li>
          <router-link to="/articules">Articles</router-link>
        </li>
        <li>
          <router-link to="#">About</router-link>
        </li>
        <li>
          <router-link to="/newArticles">Create</router-link>
        </li>
          <li>
          <router-link to="#">Login</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
a {
  color: #fff;
  
}
.nav {
  background-color: #343a40;
  padding: 22px;
  position: sticky;
}
.navs {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 0px;
  margin-top: -13px;
}
.navs > * {
  margin-top: -8px;
}
.nav_brand {
  grid-column: 2/5;
  font-size: 1.3em;
  font-weight: bold;
  letter-spacing: 1.5px
}

ul {
  grid-column: 9/13;
  display: flex;
  justify-content: space-around;
  padding: 0px 22px;
}
ul > * {
  margin-top: 3px;
  font-weight: normal;
}
li {
  padding-bottom: 3px;
  transition: all 2s;
  
}
li:hover {
  border-bottom: 1px solid #fff;
  padding-bottom: 0px;
}
</style>