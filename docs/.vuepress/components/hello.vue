<template>
    <div class="hello">
    <div>
        <p>Number of times you clicked the button:</p>
        <p class="count">{{count}}</p>
    </div>
    <button v-on:click="count++" >Click on me</button>
    <p class="hint">(Click at least 5 times)</p>
    <div class="works" v-if="count>4">
        Looks like it works :)
    </div>
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
  margin: 24px auto 24px auto;
  width: 60%;
}
button {
    border-radius: 3px;
    font-size: 16px;
    font-weight: 400;
    padding: 12px 20px;
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
.hint {
    font-size: 12px;
    color: rgb(128, 128, 128);
    padding: 24px 0 0 0;
}
.works {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 96px;
    font-size: 96px;
    -webkit-animation: slide 0.5s forwards;
    animation: slide 0.5s forwards;
}
@keyframes slide {
    0% {bottom: -500px}
    50% {bottom: 50px}
    75% {bottom: -25px}
    90% {bottom: 10px}
    100% { bottom: 0; }
}

</style>