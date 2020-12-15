<template>
   <div class='pg-concept'>
      <div id='pg-header' class="pb-0 pt-4 mb-4 border-bottom">
         <h1>空き家でお困りの方の相談を承っております！</h1>
      </div>
      <div id='pg-body' class='mx-auto' style='width: 95%;'>
         <div class='pb-4'>
            <h5>以下のようなお困りごとがある方はお気軽にご連絡ください！</h5>
         </div>
         <div class="card-columns">
            <div class="card">
               <img class="card-img-top" src="../assets/img/empty-house.png" alt="Card image cap">
               <div class="card-body">
                  <h5 class="card-title">空き家を何とかしたい</h5>
               </div>
            </div>
            <div class="card">
               <img class="card-img-top" src="../assets/img/tearing-down-house.png" alt="Card image cap">
               <div class="card-body">
                  <h5 class="card-title">空き家を取り壊すのに何百万もかかるので悩んでいる</h5>
               </div>
            </div>
            <div class="card">
               <img class="card-img-top" src="../assets/img/annoying-house.png" alt="Card image cap">
               <div class="card-body">
                  <h5 class="card-title">私の空き家がご近所に迷惑をかけている</h5>
               </div>
            </div>
            <div class="card">
               <img class="card-img-top" src="../assets/img/inherited-house.png" alt="Card image cap">
               <div class="card-body">
                  <h5 class="card-title">親から相続した家が空き家になって困っている</h5>
               </div>
            </div>
            <div class="card">
               <img class="card-img-top" src="../assets/img/forniture.png" alt="Card image cap">
               <div class="card-body">
                  <h5 class="card-title">空き家の中にある不用品を処分したい</h5>
               </div>
            </div>
         </div>
      </div>
   </div>

</template>

<script>
</script>

<style>

@media screen and ( max-width:767px) { /* sm */
   .card-columns {
      column-count: 1;
   }
   .card {
      /* height: 400px; */
   }
   .card-img-top {
      /* height: 300px; */
   }
}
@media screen and (min-width:768px) and ( max-width:991px) { /* md */
   .card {
      height: 280px;
   }
   .card-columns {
      column-count: 2;
   }
}
@media screen and (min-width:992px) and (max-width:1199px)  { /* lg */
   .card {
      height: 260px;
   }
}
@media screen and (min-width:1200px)  { /* lg */
   .card {
      height: 300px;
   }
}
</style>