<template>
  <div id="app">
    <div class="sidebar">
      <div id="list"></div>
    </div>

    <div class="body-text">
      <div id="detail"></div>
    </div>
  </div>
</template>

<style>
#detail {
  height: 100%;
}

.sidebar {
  height: 100%;
  width: 300px;
  position: -webkit-sticky; /* for Safari users */
  position: sticky;
  top: 0px;
  float: left;
  background-color: lightblue;
}

li {
  font-size: 13px;
}

.sidebar div {
  padding: 8px;
  font-size: 24px;
  display: block;
}

.body-text {
  margin-right: 150px;
  font-size: 18px;
  height: 100%;
}

</style>
