<template>
   <div id='home'>
      <div class='jumbotron mb-0'>
         <div class='top-msg' id='msg-1st'>
            <h1 class='text-light'>あなたの
               <br class='br-1st'>「実家」は
               <br class='br-2nd'>「空き家」になって
               <br class='br-3rd'>いませんか？
            </h1>
         </div>
         <div class='top-msg' id='msg-2nd'>
            <h1 class='text-light'>
               空き家の「無料相談」<br>
               空き家の「引き取り」
            </h1>
         </div>
      </div>
      <div id='pg-header' class="pb-0 pt-4 mb-4 border-bottom">
         <h1>ご相談はこちら</h1>
      </div>
      <div id='pg-body' class='mx-auto' style='width: 95%;'>
         <div class='pb-4'>
            <h5>相談をご希望の方は以下のフォームへ入力いただくか、メール、お電話にてご連絡ください。</h5>
         </div>
         <div class='items pb-4'>
            <div class='items pb-4'>
               <a href='https://forms.gle/2EsXZ91s8SivLL4p6' class='btn btn-primary' type='dark' target='_blank' rel='noopener noreferrer'>ご相談フォーム</a>
            </div>
         </div>
         <div class='items pb-4'>
            <h3 class='border-bottom'>電話番号</h3>
            <div>
               <h4>
                  <a href="tel:117">080-0000-0000</a>
               </h4>
            </div>
         </div>
         <div class='items pb-4'>
            <h3 class='border-bottom'>メールアドレス</h3>
            <h4>
               <a href='mailto:xxxxx@gmail.com' target=”_blank”>xxxxxx&#64;gmail.com</a>
            </h4>
         </div>
      </div>
      <div id='pg-header' class="pb-0 pt-4 mb-4 border-bottom">
         <h1>ご相談の流れ</h1>
      </div>
      <div id='pg-body' class='mx-auto' style='width: 95%;'>
         <div class="card mb-3" style="max-width: 24rem;">
            <div class="card-body">
               <h5 class="card-title">① ご連絡をしていただく。</h5>
            </div>
            <img class="card-img-top" src="../assets/img/1-phone-call.png" alt="Card image cap">
         </div>
         <div class="card mb-3" style="max-width: 24rem;">
            <div class="card-body">
               <h5 class="card-title">② 空き家を見せていただく。</h5>
            </div>
            <img class="card-img-top" src="../assets/img/2-check-house.png" alt="Card image cap">
         </div> 
         <div class="card mb-3" style="max-width: 24rem;">
            <div class="card-body">
               <h5 class="card-title">③ どういう方法があるかをご提案いたします。</h5>
            </div>
            <img class="card-img-top" src="../assets/img/3-proposal.png" alt="Card image cap">
         </div> 
         <div class="card mb-3" style="max-width: 24rem;">
            <div class="card-body">
               <h5 class="card-title">④ あなたにとって良い方法をお選びください。</h5>
            </div>
            <img class="card-img-top" src="../assets/img/4-happy-end.png" alt="Card image cap">
         </div> 
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
   position: relative;
}
#msg-2nd{
   position:absolute;
   text-align:center;
   bottom: 100px;
   left: 0;
   right: 0;
   margin: auto;
}
.top-msg h1 {
   text-shadow: 4px 4px 4px #000000;
   font-size: 64px;
}
@media screen and ( max-width:767px) { /* sm */
   .top-msg h1 {
      font-size: 32px;
   }
}
@media screen and (min-width:768px) and ( max-width:991px) { /* md */
   .br-1st{
      display: none;
   }
   .top-msg h1 {
      font-size: 56px;
   }
}
@media screen and (min-width:992px) and (max-width:1199px)  { /* lg */
   .br-1st, .br-3rd{
      display: none;
   }
   .top-msg h1 {
      font-size: 56px;
   }
}
@media screen and (min-width:1200px)  { /* xl */
   .br-1st, .br-3rd{
      display: none;
   }
}
</style>