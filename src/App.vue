<template>
  <div id='app'>
    <b-container>
      <b-row id='top' class='mt-3 mb-2'>
        <b-col id='top-logo' md='6' sm='12' xs='12'>
          <img src="./assets/img/top_logo.png" alt="top_logo">
        </b-col>
        <b-col id='top-access' md='6' sm='12' xs='12'>
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
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./css/styles.css";
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
