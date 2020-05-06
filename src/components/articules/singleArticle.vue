<template>
  <div class="container">
    <router-link to="/articules">
      <button class="btn warning">go back</button>
    </router-link>

    <h1>{{ getOneArticeState.comments}}</h1>
    <h1>{{ getOneArticeState.title}}</h1>
    <img :src="getOneArticeState.image" alt="artticule img" />
    <p>{{getOneArticeState.description}}</p>
    <button @click="deletes(getOneArticeState._id)">delete</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SingleArticle",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  components: {},
  methods: {
    ...mapActions(["getOneArticule", "deleteOneArticule"]),
    deletes: function(_id) {
      console.log(_id);
      this.deleteOneArticule(_id);
      setTimeout(() => {
        this.$router.push("/articules");
      }, 3000);
    }
  },
  computed: {
    ...mapGetters(["getOneArticeState"])
  },
  created() {
    this.getOneArticule(this.id);
  }
};
</script>


<style scoped>
h1 {
  /* background: red; */
}
</style>