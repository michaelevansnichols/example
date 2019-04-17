<template>
  <div class="hello">
  <div>
    <p>Number of times you clicked the button:</p>
    <p class="count">{{count}}</p>
  </div>
    <button v-on:click="count++" >Click on me</button>
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
<style scoped>
.hello{
  background-color: rgb(241, 241, 241);
  padding: 48px;
  margin: 24px 0 24px 0;
}
button {
    border-radius: 3px;
    font-size: 14px;
    font-weight: 400;
    padding: 6px 10px;
    background-color: #1aaa55;
    border-color: #168f48;
    color: #fff;
    outline: none;
}
.count {
    font-size: 32px;
    font-weight: bold;
    margin: 12px;
}
p {
    margin: 0;
}

</style>