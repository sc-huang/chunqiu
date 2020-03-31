<template>
  <div class="index">
    <div class="index_carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <div
            style="background:url(https://ps.ssl.qhimg.com/sdmt/456_264_100/t01b23afc01e5224c8f.webp)center center  ;height:343px;"
          ></div>
        </el-carousel-item>
      </el-carousel>
      <!-- <el-carousel-item
          v-for="(item,index) in swiperList"
          :key="index"
        >
          <div :style="`background:url(${$axios.defaults.baseURL+item.url}) center center  ;height:700px;`"> </div>
      </el-carousel-item>-->
      <!-- </el-carousel> -->

    </div>
          <div class="body">
    <div class="content" v-for="item in 6" :key=item>

  <div class="title">热门信息<span>more 》</span></div><hr>
      <!-- 内容主体 -->
      <div class="content_body">深圳周末团体旅游周边登山潮汐漂流真人<span>2019-09-30</span></div>
      <div class="content_body">深圳周末团体旅游周边登山潮汐漂流真人<span>2019-09-30</span></div>
      <div class="content_body">深圳周末团体旅游周边登山潮汐漂流真人<span>2019-09-30</span></div>
      <div class="content_body">深圳周末团体旅游周边登山潮汐漂流真人<span>2019-09-30</span></div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>

<style lang="less" scoped>
.index{
 width: 1220 / 1600 * 100vw;
margin-top: 12px;
}

.index_carousel {
  position: relative;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.body{
display: flex;
flex-wrap: wrap;

}
.content{
  padding-right: 28px;
  padding-bottom: 23px;
}
.content .title{
  color: #2098f5;
  font-weight: 600;
  font-size: 30 / 1953 * 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
font-size: 23 / 1953 * 100vw;
padding-top: 4px;
}
}
.content_body{
  border-bottom: 2px dotted #ccc;
  padding:15px 0;
  span{
    padding:0px 22px 0 68px;
  }
}
hr{
  background-color: #db251a;
  height: 5px;
}
</style>