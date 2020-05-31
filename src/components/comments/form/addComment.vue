<template>
  <div>
    <div class="form">
      <form @submit="submit">
        <div class="form-group author">
          <label>author</label>
          <input type="text" v-model="author" />
        </div>
        <div class="form-group">
          <label>content</label>
          <!-- <input type="text" v-model="content" class="content" /> -->
          <textarea type="text" v-model="content" class="content" />
        </div>
        <div class="form-group">
          <input type="submit" class="btn" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props:["id"],
  data() {
    return {
      content: "",
      author: "",
      
    };
  },
  methods: {
    ...mapActions(["addComment"]),
    submit: function(e) {
      e.preventDefault();
      // const add = {
      //   content: this.content,
      //   author: this.author
      // };
      // this.addComment(add);
      console.log(this.id)
    }
    
  }
};
</script>


<style scoped>
.form {
  /* margin: 0 auto; */
  display: grid;
  /* grid-template-columns: repeat(12, 1fr) */
}
form {
  border: 2px solid black;
  background: #3434;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px 0px;
  margin-right: 650px;
  /* grid-column: 1/9 */
}
.form-group {
  display: grid;

  margin: 10px 0px;
}
label {
  text-transform: capitalize;
  margin: 12px 25px;
}
input,
textarea {
  border: 1px solid #333;
  margin: 0px 20px;
  padding: 4px 0px;
  background: #fff;
}

.content {
  height: 12vh;
}
.btn {
  padding: 4px 0px;
}
.btn:hover {
  background: #333;
  color: #fff;
}
</style>