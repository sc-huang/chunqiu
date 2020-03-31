<template>
  <div id="app">
    <!-- <el-container> -->
      <!-- <el-header> -->
        <Header />
      <!-- </el-header> -->
      <!-- <el-main> -->
        <router-view class="main"></router-view>
      <!-- </el-main> -->
      <!-- <el-footer> -->
        <Footer />
      <!-- </el-footer> -->
    <!-- </el-container> -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang='less'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 5px; */
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
.main{
/*   
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  */
  //  width: 1200px;
   margin: 0 auto;
   
   }
</style>
