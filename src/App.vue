
  
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>



<script>
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  methods: {},
  computed: {},
  created() {}
};
</script>

<style >
:root {
  --primary-color: #343a40;
  --blue: #007bff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
}
*:focus {
  outline: none;
}
a {
  text-decoration: none;
}

img {
  width: 100%;
}
.container {
  width: 1110px;
  margin: 0 auto;
}
ul {
  list-style-type: none;
}
</style>
