<template>
  <!-- <div class="header"> -->
  <div class="header-wrapper">
    <div class="search-box">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input type="text" placeholder="search..." />
    </div>
    <div class="call-to-action">
      <div class="flagbox">
        <img src="../assets/flag.png" alt="" />
      </div>
      <div class="notification-box">
        <img src="../assets/Notification.png" alt="" />
      </div>
      <div class="message-box">
        <img src="../assets/message.png" alt="" />
      </div>
      <div class="avtarbox">
        <div class="avtar-image">
          <img src="../assets/Beared_Guy.png" alt="" />
        </div>
        <div class="about-avtar">
          <p class="avatar-name">Austin Robertson</p>
          <p class="avatar-profession">Marketing Administrator</p>
        </div>
      </div>
    </div>
    <!-- </div> -->

    <!-- <div class="welcome-text-wrapper">
      <div class="left-side">
        <h1>Hello Devs !</h1>
        <span
          >We are on a mission to help developers like you to build beautiful
          projects for FREE.</span
        >
      </div>
    </div> -->
  </div>

  <div class="graphic-img-box">
    <!-- <img src="../assets/Graphic_bg.png" alt="" /> -->
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  position: sticky;
  top: 0;
  background: #ffffffcc;
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  z-index: 10;
}
.call-to-action {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.call-to-action .flagbox {
  width: 27px;
  height: 27px;
}
.call-to-action .flagbox img {
  width: 100%;
}

.notification-box,
.message-box {
  width: 18px;
  height: 18px;
}
.notification-box img,
.message-box img {
  width: 100%;
}
.search-box {
  width: 304px;
  height: 36px;
  border: 1px solid #c0c9d3;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 4px 16px;
}
.search-box svg {
  color: #adb5bd;
}
.search-box input {
  border: none;
  color: #3b4248;
  font-style: italic;
  letter-spacing: 0.04rem;
  font-weight: 500;
  background: transparent;
  flex: 1;
}
.search-box input:focus {
  outline: none !important;
}
.search-box ::placeholder {
  font-weight: 500;
  font-size: 16px;
  color: #adb5bd;
  letter-spacing: 1px;
}

.avtarbox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  gap: 16px;
}
.avtarbox .avtar-image {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: contain;
}
.avtarbox .avtar-image img {
  width: 100%;
}
.avtarbox .about-avtar .avatar-name {
  font-weight: 600;
  font-size: 16px;
  margin: 0;
}
.avtarbox .about-avtar .avatar-profession {
  font-weight: 400;
  font-size: 13px;
  margin: 0;
}
.graphic-img-box {
  width: 100%;
  height: 170px;
  background: url("../assets/Graphic_bg.png");
  background-position: center;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  /* margin-top: -22px; */
}
.graphic-img-box img {
  width: 100%;
}
.welcome-text-wrapper {
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 16px 24px;
  color: white;
}
.welcome-text-wrapper h1 {
  font-weight: 700;
  letter-spacing: 0.06rem;
  font-size: 400;
  line-height: 50px;
}
.welcome-text-wrapper span {
  font-weight: 700;
  font-size: 23px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.04rem;
}
</style>
