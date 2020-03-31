<template>
  <div class="marketing">
  <div class="main">
    <div class='h1'>最新动态</div><hr>
  <div class="body" v-for="(item, i) in items" :key=i> 
    <div class='title'>{{items.title}}</div>
    <div class='content'>{{items.content}}</div>
    <div class="bottom">
    <div class='bottom-left'>分类：<span>{{items.bottom}}</span>{{items.data}}</div>
<div class="bottom-right">查看更多></div>
    </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
data(){
  return{
items:{
   title:'[新品]BOostXXXXXX]',
   content:'开篇，如何辨别宝宝的豪华',
   bottom:'产品市场',
   data:'2019-09-12:17:40'
   }
   
   }
}
}
</script>
<style lang="less" scoped>
.main{
   width: 1000 / 1600 * 100vw;
 margin-top: 12px;
.h1{
  font-weight: 600;
color: #2099f6; 
font-size: 24px; }
hr{
background-color: #2099f6;
height: 5px;
}
.body{
  border-bottom: dashed #aaa;
}
.title{
  font-size: 22px;
  color: #000;
}
.bottom{
  display: flex;
  .bottom-left{
    flex: 1;
     span{
      color: #2099f6;
        padding-right: 20px;

    }
  }
  .bottom-right{
align-self: flex-end;
  }
}
}
</style>