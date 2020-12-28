<template>
   <div id='home'>
      <div class='jumbotron mb-0'>
         <h1 class='text-light'>あなたの
            <br class='br-1st'>「実家」は
            <br class='br-2nd'>「空き家」になって
            <br class='br-3rd'>いませんか？
         </h1>
      </div>
   </div>
</template>

<script>
</script>

<style>
.jumbotron {
   height: 800px;
   background:url(../assets/img/home.png) center no-repeat;
   background-size: cover;
   vertical-align: center;
}
#home h1 {
   text-shadow: 4px 4px 4px #000000;
   font-size: 64px;
}
@media screen and ( max-width:767px) { /* sm */
   #home h1 {
      font-size: 36px;
   }
}
@media screen and (min-width:768px) and ( max-width:991px) { /* md */
   .br-1st{
      display: none;
   }
   #home h1 {
      font-size: 56px;
   }
}
@media screen and (min-width:992px) and (max-width:1199px)  { /* lg */
   .br-1st, .br-3rd{
      display: none;
   }
   #home h1 {
      font-size: 56px;
   }
}
@media screen and (min-width:1200px)  { /* xl */
   .br-1st, .br-3rd{
      display: none;
   }
}
</style>