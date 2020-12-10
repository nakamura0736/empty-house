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
            <svg class="bd-placeholder-img card-img-top" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%"/><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
            <div class="card-body">
               <h5 class="card-title">①Card title that wraps to a new line</h5>
               <!-- <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
            </div>
         </div>
         <div class="card p-3">
            <blockquote class="blockquote mb-0 card-body">
               <p>②Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
               <footer class="blockquote-footer">
               <small class="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
               </small>
               </footer>
            </blockquote>
         </div>
         <div class="card">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%"/><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
            <div class="card-body">
               <h5 class="card-title">③Card title</h5>
               <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
         </div>
         <div class="card bg-primary text-white text-center p-3">
            <blockquote class="blockquote mb-0">
               <p>④Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
               <footer class="blockquote-footer text-white">
               <small>
                  Someone famous in <cite title="Source Title">Source Title</cite>
               </small>
               </footer>
            </blockquote>
         </div>
         <div class="card text-center">
            <div class="card-body">
               <h5 class="card-title">⑤Card title</h5>
               <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
         </div>
         <div class="card p-3 text-right">
            <blockquote class="blockquote mb-0">
               <p>⑥Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
               <footer class="blockquote-footer">
               <small class="text-muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
               </small>
               </footer>
            </blockquote>
         </div>
         <div class="card">
            <div class="card-body">
               <h5 class="card-title">⑦Card title</h5>
               <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
         </div>
         </div>
      </div>
   </div>

</template>

<script>
</script>

<style>
.card-columns {
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(md) {
    column-count: 2;
  }
  @include media-breakpoint-only(sm) {
    column-count: 2;
  }
}
</style>