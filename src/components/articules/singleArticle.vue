<template>
  <div class="container">
    <router-link to="/articules">
      <button class="btn warning">go back</button>
    </router-link>

    <!-- <h1>{{ getOneArticeState.comments}}</h1> -->
    <h1>{{ getOneArticeState.title}}</h1>
    <div>
      <span>written on</span>
      {{getOneArticeState.createdDate | moment}}
      <span>At</span>

      {{getOneArticeState.createdDate | momentTime}}
    </div>

    <img :src="getOneArticeState.image" alt="artticule img" />
    <p>{{getOneArticeState.description}}</p>
    <button @click="deletes(getOneArticeState._id)" class="del" disabled>delete</button>

    <div>
      <AddComment v-bind="id" />
    </div>
    <div>
      <!-- <Comments :comments="getOneArticeState.comments"/> -->
      <Comments :article="getOneArticeState" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import Comments from "../comments/comments";
import AddComment from "../comments/form/addComment";
export default {
  name: "SingleArticle",
  data() {
    return {
      id: this.$route.params.id
    };
  },
  components: {
    Comments,
    AddComment
  },
  methods: {
    ...mapActions(["getOneArticule", "deleteOneArticule"]),
    deletes: function(_id) {
      console.log(_id);
      this.deleteOneArticule(_id);
      setTimeout(() => {
        this.$router.push("/articules");
      }, 1000);
    },
    moment: function() {
      return moment();
    }
  },
  computed: {
    ...mapGetters(["getOneArticeState"])
  },
  created() {
    this.getOneArticule(this.id);
  },
  filters: {
    moment: function(value) {
      return moment(value).format("MMMM Do, YYYY");
      // return moment(value).format('MMMM Do YYYY, h:mm:ss a');
    },

    momentTime: function(value) {
      return moment(value).format("h:mm:ss a");
      // return moment(value).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
};
</script>


<style scoped>
h1 {
  /* background: red; */
}
.del {
  background: var(--danger);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 0px;
}
</style>