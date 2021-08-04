<template>
  <div id="app">
    <div id="wrap">
      <iframe
        id="scaled-frame"
        :src="url"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      url: "",
    };
  },
  methods: {
    showDetails(e){
      this.url = e.detail.newsUrl || "";
    },
  },
  created() {
    window.addEventListener("showNewsDetail", this.showDetails, false);
  },
};
</script>
<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
/* iframe {
  width: 60%;
  height: 100%;
} */
#wrap {
  width: 750px;
  height: 1500px;
  padding: 0;
  overflow: hidden;
}

#scaled-frame {
  width: 1000px;
  height: 2000px;
  border: 0px;
}
#scaled-frame {
  zoom: 0.75;
  -moz-transform: scale(0.75);
  -moz-transform-origin: 0 0;
  -o-transform: scale(0.75);
  -o-transform-origin: 0 0;
  -webkit-transform: scale(0.75);
  -webkit-transform-origin: 0 0;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  #scaled-frame {
    zoom: 1;
  }
}
</style>
