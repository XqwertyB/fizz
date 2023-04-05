<template>
    <div class="aboutTwo">
        <div class="section-one">
           <button>Диссертациялар (4)</button>
           <button>Монографиялар (3)</button>
           <button>Дарсликлар (10)</button>
           <button>Мақолалар (8)</button>
        </div>
        <div class="section-two">
           <button>Ўқув-услубий қўлланмалар (2)</button>
           <button>Патент ва гувоҳномалар (2)</button>
           <button>Фойдали моделлар (0)</button>
        </div>
    </div>
</template>
<style>
.aboutTwo{
    margin-left: 140px;
    margin-right: 110px;
    margin-top: 30px;
}
.aboutTwo .section-one{
    display: flex;
    justify-content: space-between;
}
.aboutTwo .section-one button{
    height: 60px;
width: 270px;
border-radius: 0px;
background-color: #F1F1F1;
}
.aboutTwo .section-one button:hover{
    background-color: #1C71FF;
    color: white;
}
.aboutTwo .section-two{
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
    margin-bottom: 7px;
}
.aboutTwo .section-two button{
    height: 60px;
width: 360px;
border-radius: 0px;
background-color: #F1F1F1;
}
.aboutTwo .section-two button:hover{
    background-color: #1C71FF;
    color: white;
}
</style>