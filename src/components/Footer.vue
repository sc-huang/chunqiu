<template>
  <div class="footer">
    <div class="footer_title">
<a href="">权益保障 </a><span>|</span>
<a href="">纠纷处理 </a><span>|</span>
<a href="">信息发布 </a><span>|</span>
<a href="">最新动态 </a><span>|</span>
<a href="">联系我们 </a><span>|</span>
    </div>

<i>深圳市椿湫网络科技有限公司 版权所有©</i>
<i>粤ICP备19119215号-1</i>
<i>联系方式：18819317665</i>
<i>深圳市南山区东方科技大厦1409</i>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.footer {
  min-width: 1200px;
  padding-top: 30px;
  margin: 40px auto 0;
  // width: 1000px;
  height: 160px;
    background: #333;
  color: #ccc;

  .footer_title{
 display: flex;
 justify-content: center;
 font-size: 14 / 750 *50vw;
 margin-bottom: 23px;
  }
  span{
    padding: 0 18px 0 14px;
  }
  i{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
  }
}
</style>