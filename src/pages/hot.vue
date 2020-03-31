<template>
  <div class="marketing">
    <div class="main">
      <div class="h1">热门信息</div>
      <hr />
      <div class="body" v-for="(item) in items" :key="item">
        <div class="body_left">
          <div class="title">{{items.title}}</div>
          <div class="content">{{items.content}}</div>
          <div class="bottom">
            <div class="bottom-left">分类：<span>{{items.bottom}}</span>{{items.data}}</div>
            <div class="bottom-right">查看更多></div>
          </div>
        </div>
        <div class="body_right">
<img src="https://ps.ssl.qhimg.com/sdmt/284_324_100/t0126b78675025b0972.webp" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {
        title: "撸起袖子加油干",
        content: "产品描述少时诵诗书所所所所所所所",
        bottom: "热门信息",
        data: "2019-09-12:17:40"
      }
    };
  }
};
</script>
<style lang="less" scoped>
.main {
 width: 1000 / 1600 * 100vw;
 margin-top: 12px;

  .h1 {
    font-weight: 900;
    color: #2099f6;
    font-size: 24px;
  }
  hr {
    background-color: #2099f6;
    height: 5px;
    margin-bottom: -1px;
  }
  .body {
    display: flex;
    border-bottom: dashed #aaa;
    .body_left{
      flex:1;
      
    }
    .body_right {
      width: 140 / 750 * 100vw;
      img{
    width: 100%;
  height: 184px;
      }

    }
  }
  .title {
    font-size: 11 / 750 * 100vw;
    font-weight: 400;
    color: #000;
    padding: 12px 12px 12px 0px;
  }
  .bottom {
    display: flex;
    padding-top: 110px;
  justify-content: space-between;
  .bottom-left {
      // flex: 1;
      span{
        color: #2099f6;
        padding-right: 20px;
      }
    }
    .bottom-right {
      // align-self: flex-end;
    }
  }
}
</style>