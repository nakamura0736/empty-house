<template>
  <div id='app'>
    <b-container>
      <b-row id='top' class='mt-3 mb-2'>
        <b-col id='top-logo' lg='6' md='8' sm='12' xs='12'>
          <router-link to="/">
            <img src="./assets/img/top-logo.png" alt="top_logo">
          </router-link>
        </b-col>
        <b-col id='top-access' lg='6'  md='4' sm='12' xs='12'>
          <p>TEL. <a href="tel:117">080-0000-0000</a></p><br>
          <p>亀岡の空き家相談所</p><br>
          <p>〒000-0000</p><br>
          <p>京都府亀岡市きょうと町000-0</p>
        </b-col>
      </b-row>
      <b-navbar id='navbar' toggleable='lg' type='dark' variant='primary'>
        <b-navbar-brand class='mb-0' to='/'>空き家相談所</b-navbar-brand>

        <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>

        <b-collapse id='nav-collapse' is-nav>
          <b-navbar-nav class='font-small'>
            <b-nav-item to='/concept'>空き家相談所とは？</b-nav-item>
            <b-nav-item to='/questions'>よくある質問</b-nav-item>
            <b-nav-item to='/contact'>ご相談はこちら</b-nav-item>
            <b-nav-item to='/access'>アクセス</b-nav-item>
            <b-nav-item to='/privacy'>個人情報保護ポリシー</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view/>
      <footer class='footer pt-1 pb-1 bg-primary text-white'>
        <div class='text-center'> © 2020. 亀岡の空き家相談所 all rights reserved</div>
      </footer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
var touch = 'ontouchstart' in document.documentElement
  || navigator.maxTouchPoints > 0
  || navigator.msMaxTouchPoints > 0;
 
if (touch) { // remove all :hover stylesheets
  try { // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  padding-left: 0px;
  padding-right: 0px;
}
#top-logo{
  display: flex;
  align-items: flex-start;
}
#top-logo img:hover{
  box-shadow: 4px 4px 4px rgba(0,0,0,0.5);
  transform: translateY(-4px);
  transition-duration: 0.5s;
}
img {
  max-width: 100%;
  height: auto;
}
#top-access {
  line-height: 0.8;
  padding-top: 10px;
}
#top-access p{
  text-align: right;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
