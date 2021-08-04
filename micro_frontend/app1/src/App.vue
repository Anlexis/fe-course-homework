<template>
  <div id="app">
    <ul>
      <li
        v-for="(news, key) in posts"
        :key="key"
        v-on:click="select(news.path)"
      >
        {{ news.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      posts: "",
    };
  },
  methods: {
    select: function(path) {
      const event = new CustomEvent("showNewsDetail", {
        detail: {
          newsUrl: path,
        },
      });
      window.dispatchEvent(event);
    },
  },
  created() {
    const postData = { page: "1", count: "20" };
    this.$http
      .post("https://api.apiopen.top/getWangYiNews", postData)
      .then((res) => {
        console.log(res.body.result);
        this.posts = res.body.result;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
