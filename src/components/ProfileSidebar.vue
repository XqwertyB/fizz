<template>
  <div class="profileSidebar">
    <img src="../assets/images/profile.png" alt="" />
    <a href="#" class="my-2" style="color: #005AEF;">Info@mai.com</a>
    <button>My home pages</button>
    <div class="d-flex my-2">
      <p>Шахский маълумотлар</p>
      <img src="../assets/images/Vector.svg" alt="" />
    </div>
    <div class="d-flex">
      <p>Коференция маркази</p>
      <img src="../assets/images/Vector.svg" alt="" />
    </div>
  </div>
</template>

<style>
.profileSidebar {
  margin-left: 145px;
  margin-top: 300px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
  width: 280px;
  padding: 30px 0 150px 0;
}
.profileSidebar img {
  width: 200px;
}
.profileSidebar .d-flex{
    justify-content: space-between;
    align-items: center;
}
.profileSidebar .d-flex img {
  width: 12px;
}
.profileSidebar button{
    border: 1px solid grey;
    padding: 5px 20px;
}
</style>
