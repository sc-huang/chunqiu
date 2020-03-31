<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/" class="pages_logo">
          <img src="@/assets/index.gif" alt />
        </router-link>
      </li>
      <li>
        <router-link class=pages_item to="/">首页
        <span v-show="activePage=='/'">箭头</span>
        </router-link>
      </li>
      <li>
        <router-link class=pages_item to="hot">热门信息
        <span v-show="activePage=='/hot'">箭头</span>

        </router-link>
      </li>
      <li>
        <router-link class=pages_item to="recentnews">最新动态
        <span v-show="activePage=='/recentnews'">箭头</span>

        </router-link>
      </li>
      <li>
        <router-link class=pages_item to="marketing">产品市场
        <span v-show="activePage=='/marketing'">箭头</span>

        </router-link>
      </li>
      <li>
        <router-link class=pages_item to="investment">招盟加商
        <span v-show="activePage=='/investment'">箭头</span>

        </router-link>
      </li>
      <li>
        <router-link class=pages_item to="information">信息发布
        <span v-show="activePage=='/information'">箭头</span>

        </router-link>
      </li>
      <li>
        <router-link class=pages_item to="register">注册账号
        <span v-show="activePage=='/register'">箭头</span>

        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeName: "second",
      activePage:'/hot'
    };
  },
  watch:{
    '$route.push':function(newVal){
      console.log(66)
      this.activePage = newVal;
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  min-width: 1000px;
  // margin-bottom: 20px;
  height: 90px;
  line-height: 90px;
  background: #2099f6;
  color: white;

  .pages_item{
    position: relative;
    &::after{
      content: '';
      display: none;
      position: absolute;
      bottom: -150%;
      left: 40%;
      width: 10px;
      height: 20px;
      background-color: black;
    }
    &:hover{
        position: relative;
&::after{
  display: block;
}
    }
  }
 
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    .pages_logo {
      display: flex;
      align-items: center;
      img {
        width: 145 / 1500 * 100vw;
        padding-right: 128px;
      }
    }
    li {
      padding-left: 40px;
      font-size: 18 / 750 * 50vw;
      color: #eff7fe (0%);
    }

  }
}
</style>