<template>
  
    <div class="conferens">
      <div class="d-flex justify-content-between head"><p>Конференциялар рýйхати</p><div class="span"><span class="ml-5" style="">10 noyabr</span><span class="ml-5" style="">10 noyabr</span><span class="ml-5" style="">10 noyabr</span></div></div>
        <button type="button" class="collapsible mt-3">10:30 - 11:00 <span class="ml-10">Тошкент давлат шарқшунослик институтига университет мақоми берилганлиги муносабати.</span></button>
<div class="content">
 <div class="d-flex justify-content-center align-items-center px-7 py-3" style="backgroundColor: white">
  <span class="mr-7">11:00-11:30</span><p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p><img src="../../assets/images/person.png" alt=""><p>Максим Вересов </p>
 </div>
 <div class="d-flex justify-content-center align-items-center px-7 py-3" style="backgroundColor: white">
  <span class="mr-7">11:00-11:30</span><p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p><img src="../../assets/images/person.png" alt=""><p>Максим Вересов </p>
 </div>
 <div class="d-flex justify-content-center align-items-center px-7 py-3" style="backgroundColor: white">
  <span class="mr-7">11:00-11:30</span><p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p><img src="../../assets/images/person.png" alt=""><p>Максим Вересов </p>
 </div>
</div>
<button type="button" class="collapsible mt-3">10:30 - 11:00 <span class="ml-10">Тошкент давлат шарқшунослик институтига университет мақоми берилганлиги муносабати.</span></button>
<div class="content">
 <div class="d-flex justify-content-center align-items-center px-7 py-3" style="backgroundColor: white">
  <span class="mr-7">11:00-11:30</span><p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p><img src="../../assets/images/person.png" alt=""><p>Максим Вересов </p>
 </div>
 <div class="d-flex justify-content-center align-items-center px-7 py-3" style="backgroundColor: white">
  <span class="mr-7">11:00-11:30</span><p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p><img src="../../assets/images/person.png" alt=""><p>Максим Вересов </p>
 </div>
 <div class="d-flex justify-content-center align-items-center px-7 py-3" style="backgroundColor: white">
  <span class="mr-7">11:00-11:30</span><p>Институтига университет мақоми берилганлиги муносабати билан университет иимй кенгаши қарори билан</p><img src="../../assets/images/person.png" alt=""><p>Максим Вересов </p>
 </div>
</div>
<div class="end d-flex justify-content-end mt-5"><p class="mr-2 cursor-pointer" style="color: #005AEF;">11-noyabr</p><img src="../../assets/images/amg.svg" alt=""></div>
   </div>       
</template>
<script>
export default {
    mounted(){
        var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
    }
}
</script>
<style>
   .conferens{
    margin-top: 300px;
    margin-left: 155px;
    margin-right: 115px;
    background-color: white;
   }
   .conferens .head p{
    font-size: 28px;
    font-weight: 800;
    color: black;
   }
   .conferens .head .span{
    margin-right: 200px;
   }
   .conferens .head .span span{
    cursor: pointer;
   }
   .conferens .head .span span:hover{
    color: #005AEF;
   }
   .conferens .collapsible {
  background-color: white;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  text-align: left;
  outline: none;
  font-size: 18px;
  font-weight: 700;
}



.conferens .content {
  
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
.conferens .content span{
  width: 89px;
}
.conferens .content img{
  width: 60px;
}
</style>