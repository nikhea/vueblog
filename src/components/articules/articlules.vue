<template>
  <div>
    <Jumbotron />
    <div v-for="articlues in getArticulesState" :key="articlues._id">
      <ArticluesItem :articules="articlues" />
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import ArticluesItem from "./articluesList";
// import Jumbotron from "./Jumbotron";
import Jumbotron from "../Utilities/Jumbotron";
export default {
  name: "articlues",
  components: {
    ArticluesItem,
    Jumbotron
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getArticule"])
  },
  computed: {
    ...mapGetters(["getArticulesState"])
  },
  created() {
    console.log(this.getArticulesState);
    this.getArticule();
  }
};
</script>



<style scoped>
</style>