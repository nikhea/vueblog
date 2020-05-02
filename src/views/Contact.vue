<template>
  <div class="contact">
    <div class="container">
      <div class="text">
        <h1>
          <span class="contact-color">Contact</span> Us
        </h1>
        <p>Please fill out the form below to contact us</p>
      </div>
      <legend>
        <form class="form" @submit.prevent="FormSubmit">
          <div class="form-group">
            <label for="name">Name:</label>
            <input class="grid-input" type="text" placeholder required />
          </div>
          <div class="form-group">
            <label for="name">Email:</label>
            <input class="grid-input" type="email" placeholder required />
          </div>

          <div class="form-group">
            <label for="message">Message:</label>
            <textarea class="grid-input" type="text" placeholder required />
          </div>
          <div class="form-group">
            <!-- <input type="submit" placeholder="Submit"/> -->
            <button class="btn">Submit</button>
          </div>
        </form>
      </legend>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    FormSubmit: function(e) {
      e.preventDefault();
      e.preventDefault();
    }
  }
};
</script>

<style  scoped>
input,
textarea {
  border-bottom: 1px solid #333;

  /* width: 80; */
  transition-property: border-bottom 2s;
  transition: all 0.3s linear;
}
input:focus {
  border-bottom: 2px solid var(--semiPrimary-color);
}
textarea:focus {
  border-bottom: 2px solid var(--semiPrimary-color);
}
input {
  padding: 5px;
}
textarea {
  height: 25vh;
}
.form {
  width: 100px;
  margin: 10px 0px;
}
.text {
  margin: 30px 0px;
  /* font-weight: normal; */
}
.text > * {
  margin: 15px 0px;
}
.text p {
  /* color: red; */
  text-transform: capitalize;
  letter-spacing: 2px;
}
h1 {
  font-weight: normal;
  letter-spacing: 5px;
}
.contact-color {
  color: var(--primary-color);
}

.form-group {
  width: 1000px;
  /* text-align: center; */
  display: grid;
  /* grid-template-columns: repeat(8, 1fr); */
  margin: 40px 0px;
}
label {
  /* grid-column: 1/3; */
  margin-bottom: 15px;
}
.grid-input {
  /* grid-column: 3/9; */
}
.btn {
  background: var(--semiPrimary-color);
  width: 150px;
  padding: 15px 1px;
  color: #fff;
  letter-spacing: 2px;
  transition: all 0.8s;
}
.btn:hover {
  background: #fff;
  border: 0.1px solid var(--semiPrimary-color);
  color: #333;
}
</style>