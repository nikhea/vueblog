<template>
  <div class="container">
    <div class="render">
      <div v-show="show" class="Vshow">
        Pls enter all Fields
        <span @click="colseX">x</span>
      </div>
      <div v-show="add" class="Ashow">
        Article Added
        <span @click="colseX">x</span>
      </div>
    </div>

    <!-- <div class="render">
      <div v-show="show" class="Vshow">
        <div v-for="error in errors" :key="error.index" >
          {{error}}
          <span @click="colseX">X</span>
        </div>
      </div>
    </div>-->

    <div class="add">
      <form @submit="newArticle">
        <div class="form-group">
          <div class="form-label">title</div>
          <input type="text" v-model="title" />
        </div>
        <div class="form-group">
          <div class="form-label">author</div>
          <input type="text" v-model="author" />
        </div>
        <div class="form-group">
          <div class="form-label">image</div>
          <input type="text" v-model="image" />
        </div>
        <div class="form-group">
          <div class="form-label">description</div>
          <textarea name id cols="30" rows="10" v-model="description" />
        </div>
        <div class="btns">
          <button class="btn success">add new article</button>
          <router-link to="/articules">
            <button class="btn warning">cancle</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "",
  data() {
    return {
      title: "",
      author: "",
      image: "",
      description: "",
      show: false,
      add: false,
      errors: [],
      success: []
    };
  },
  methods: {
    ...mapActions(["addArticule"]),
    checkForm: function() {
      if (!this.title || !this.author || !this.image || !this.description) {
        this.show = true;
        // this.errors.push("please enter all fields");
      }
      if (!this.title) {
        this.show = true;
        // this.errors.push("title can not be empty");
      } else {
        this.show = false;
      }
      if (!this.author) {
        this.show = true;
        // this.errors.push("author can not be empty");
      } else {
        this.show = false;
      }
      if (!this.image) {
        this.show = true;
        // this.errors.push("image can not be empty");
      } else {
        this.show = false;
      }
      if (!this.description) {
        // this.errors.push("description enter all fields");
        this.show = true;
      } else {
        this.show = false;
      }

      // if (this.title || this.author || this.image || this.description) {
      //   this.show = false;
      //   this.add = true;
      // }
    },
    newArticle: function(e) {
      this.checkForm();
      e.preventDefault();
      let newArticle = {
        title: this.title,
        author: this.author,
        image: this.image,
        description: this.description
      };
      this.addArticule(newArticle);
      this.colseXz();
      if (this.add === true) {
        setTimeout(() => {
          this.$router.push("/articules");
        }, 5000);
      }
    },
    colseX: function() {
      this.show = false;
      this.add = false;
    },
    colseXz: function() {
      if (this.show !== true || this.show === true) {
        setTimeout(() => {
          this.show = false;
          if (this.title || this.author || this.image || this.description) {
            this.add = true;
          }
          setTimeout(() => {
            this.add = false;
          }, 2000);
        }, 2000);
      }
    }
  },
  created() {}
};
</script>


<style scoped>
.add {
  border: 0.5px solid rgb(51, 51, 51);
  margin: 2em;
  padding: 2em;
}
input,
textarea {
  display: block;
  width: 100%;
  /* height: calc(1.5em + 0.75rem + 2px); */
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border-bottom: 0.5px solid #ced4da;
}
input{
  margin-bottom: 15px
}
input:focus {
  border-bottom: 1.5px solid #ced4da;
}
textarea {
  height: 10vh;
}
textarea:focus {
  border-bottom: 1.5px solid #ced4da;
}

.form-label {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 10px 0px;
  text-transform: capitalize;
}
.btn {
  margin-right: 1rem;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btns {
  margin-top: 21px;
}
.success {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.warning {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.success:hover {
  background: var(--gray-dark);
}
.warning:hover {
  background: var(--info);
}
.render > div {
  /* width: 50em; */
  margin: 10px 20px;
  color: #fff;
  font-size: 1.5em;
  text-transform: uppercase;
  word-spacing: 0.2em;
  text-align: center;
  padding: 20px 0px;
}
.Vshow {
  background: var(--red);
    transition: background 0.2s;
}
.Ashow {
  background: var(--success);
}
.Vshow > span {
  border-radius: 50px;
  background: rgb(189, 51, 51);
  padding: 3px 10px;
  font-size: 22px;
  margin-left: 32px;
  cursor: pointer;
  color: #fff;
 

}

.Ashow > span {
  border-radius: 50px;
  background: lawngreen;
  padding: 3px 10px;
  font-size: 22px;
  margin-left: 32px;
  cursor: pointer;
  color: #fff;
  transition: all 1s
}
</style>





  // /* padding: 0.375rem 0.75rem; */
  // padding: 0rem;
  // margin: 0rem;
  // font-size: 1rem;
  // font-weight: 400;
  // /* line-height: 1.5; */
  // color: #495057;
  // background-color: #fff;
  // background-clip: padding-box;
  // border-bottom: 0.5px solid #ced4da;
  // /* border-radius: 0.25rem; */
  // transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;