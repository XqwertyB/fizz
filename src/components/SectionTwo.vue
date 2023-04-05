<template>
    <div class="two">
        <div class="text">
            <h2><span>COPU institutida</span> malaka oshirish</h2>
            <p>Bizning o'quv dasturimiz COPUdagi har bir talabani jamiyat <br /> manfaati uchun yangi bilimlarni o'rganish, muloqot qilish va <br /> almashishga undaydi. Bu talabalarga COPUda o'qish paytida <br /> o'ziga xos kashfiyot qilish imkoniyatini beradi va <br /> bilim va innovatsiyalarga bo'lgan ishtiyoqni uyg'otadi.</p>
            <div class="btn">
                <button class="btn1">Murojaat qiling</button>
                <button class="btn2">Ko'proq</button>
            </div>
        </div>
        <div class="pic">
            <img src="../assets/images/card-1.png" class="img1" alt="">
            <img src="../assets/images/card-2.png" class="img2" alt="">
            <img src="../assets/images/card-3.png" class="img3" alt="">
            <img src="../assets/images/card-4.png" class="img4" alt="">
            <img src="../assets/images/card-5.png" class="img5" alt="">
            <p>Keyinchalik <img src="../assets/images/key.svg" alt=""></p>
        </div>
    </div>
</template>
export default {

}
<style>
    .two{
        background-image:url("../assets/images/bg.png");
        background-repeat: no-repeat;
        background-attachment: scroll;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left:145px;
        padding-right: 195px;
        padding-top: 200px;
    }
    .two h2{
        font-family: Manrope;
        font-size: 30px;
        font-weight: 700;
        line-height: 55px;
        letter-spacing: 0em;
        text-align: left;
    }
    .two h2 span{
        color:#1C71FF;
    }
    .two p{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 0em;
        text-align: left;
        margin-top:10px;
        margin-bottom:20px;
    }
    .two .text .btn{
        margin-bottom:200px;
    }
    .two .text .btn .btn1{
        height: 45px;
        width: 200px;
        border-radius: 0px;
        background-color: #1C71FF;
        color: white;
        margin-right:10px;
    }
    .two .text .btn .btn2{
        height: 45px;
        width: 160px;
        border: 1px solid #1C71FF;
        background-color: white;
        color: #191919;
    }
    .two .pic .img1{
        position: absolute;
        top: 1400px;
        right: 90px;
    }
    .two .pic .img2{
        position: absolute;
        top: 1620px;
        right: 90px;
    }
    .two .pic .img3{
        position: absolute;
        top: 1840px;
        right: 90px;
    }
    .two .pic .img4{
        position: absolute;
        top: 1530px;
        right: 400px;
    }
    .two .pic .img5{
        position: absolute;
        top: 1750px;
        right: 400px;
    }
    .two .pic p{
        margin-top:310px;
        margin-left: -310px;
        cursor: pointer;
        display: flex;
    }
    .two .pic p img{
        margin-left:10px;
        width:10px;
    }
</style>