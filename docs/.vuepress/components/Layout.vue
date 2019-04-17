<template>
  <div class="container">
      <Content />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {

  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.container{
    min-height: 100vh;
    padding: 48px;
    margin: 0;
    text-align: center;
}
h1 {
    font-size: 32px;
    color: rgb(102, 102, 102);
    text-align: center;
}
h2 {
    font-size: 24px;
    color: rgb(77, 77, 77);
    border: none;
    text-align: center;
}
h3 {
    text-align: center;
    padding: 24px;
}
.container a {
    border-radius: 3px;
    font-size: 16px;
    font-weight: 400;
    padding: 12px 20px;
    background-color: #1aaa55;
    border-color: #168f48;
    color: #fff;
    outline: none;
    display: block;
    width: fit-content;
    margin: 0 auto 0 auto;
}

</style>