<template>
  <div>
    Comments
    <div>
      <div v-for="comments in getStateComments.comments" :key="comments._id">
        <CommentItem :comments="comments" />
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import CommentItem from "./commentItem";
export default {
  name: "comments",
  data() {
    return {
      id: this.article._id
    };
  },
  props: ["comments", "article"],
  components: {
    CommentItem
  },

  methods: {
    ...mapActions(["getComments"]),
    getId: function() {
      this.getComments(this.id);
    }
  },
  computed: {
    ...mapGetters(["getStateComments"])
  },
  created() {
    this.getId();
    console.log(this.getStateComments.comments[0] )
    

  }
};
</script>
<style scoped>
</style>