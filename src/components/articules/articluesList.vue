<template>
  <div class="container">
    <!-- <h1>{{ articules}}</h1> -->
    <router-link :to="`/articles/${articules._id}`">
      <div class="articles">
        <img class="articles_img" :src="articules.image" alt="artticule img" />
        <h1 class="articules_title">{{ articules.title | toUppercase}}</h1>
        <div class="articules_description">
          <div v-if="articules.description.length > 17">
            <!-- <p>{{articules.description.substring(0,201)}}...</p> -->
            <p>{{articules.description | reduceLength}}...</p>
          </div>
          <div v-else>
            <p>{{articules.description}}</p>
          </div>
          <div class="articles_author">
            <h6>written by {{articules.author}}</h6>
          </div>
          <!-- <div>{{articules.createdDate.toLocaleString()}}</div> -->
          <div>{{articules.createdDate | moment}}</div>
        </div>
        <!-- <router-link :to="`/articles/${articules._id}`">
        <button class="artticles_btn">read</button>
        </router-link>-->
      </div>
    </router-link>
  </div>
</template>


<script>
// import VueMomemt from 'vue-moment'
import moment from 'moment'
export default {
  name: "articluesList",
  props: ["articules"],
  data() {
    return {
      dat: new Date()
    };
  },
  mixins:[],
  methods: {
     moment: function () {
    return moment();
  }
  },
  filters: {
    reduceLength(value) {
      return `${value.substring(0, 201)}...`;
    },
    toUppercase(value){
   return value.toUpperCase()
    },
    change(value){
      console.log(value)
      return value.toLocaleString()
    },
     moment: function (value) {
    // return moment(value).format('MMMM Do YYYY, h:mm:ss a');
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');
  }
  },
  created() {
    // console.log(this.articules.createdDate.spl);
    // console.log(this.dat.toLocaleString());
  }
};
</script>

<style scoped>
.articles {
  background: #eee;
  padding: 33px 62px 10px 34px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0px;
  color: #333;
  /* text-align: center */
}
.articles:hover {
  background: #333;
  color: #eee;
}

.articles_img {
  grid-column: 1/4;
  grid-row: 1/19;
}
.articules_title {
  grid-column: 4/12;
  margin: 10px 0px 0px 32px;
  /* margin: 22px 0px; */
}
.articules_description {
  grid-column: 4/12;
  margin: 10px 0px 0px 32px;
}
.articles_author > h6 {
  font-weight: normal;
  margin-top: 37px;
  display: flex;
  justify-content: flex-end;
  font-style: italic;
}
a,
.artticles_btn {
  /* grid-column: 11/13; */
  /* grid-row: 20; */
  /* background: red;
  text-align: center;
  margin-top: 12px; */
}
</style>