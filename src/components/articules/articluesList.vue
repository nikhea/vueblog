<template>
  <div>
    <!-- <h1>{{ articules}}</h1> -->
    <h1>{{ articules.title}}</h1>
     <!-- <img :src="articules.img" alt="artticule img"/> -->
  </div>
</template>


<script>
export default {
  name: "articluesList",
  props: ["articules"],
  data() {
    return {
    
    };
  }
};
</script>