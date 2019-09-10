<template>
  <div class="home">
    <div class="hasAppWrapper" v-if="showHasApp">
        <span class="iconfont icon" @click="close">&#xe711;</span>
        <img :src="imgBase64" alt="" class="img">
        <div class="content">
            <h2>注册享1880元大礼包</h2>
            <h3>下载第五大道APP</h3>
        </div>
        <div class="btn" @click="tapBtn">立即体验</div>
    </div>
    <div class="searchWrapper" @click="tapSearch">
        <div class="search">
            <span class="iconfont find">&#xe618;</span>
            <p>5LUX.COM</p>
        </div>
        <span class="iconfont bag">&#xe6fc;</span>
    </div>
    <homeContent></homeContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import homeContent from '../../components/home/content.vue'
@Component({
  components: {
    homeContent
  }
})
export default class Home extends Vue {
  imgBase64: string = 'data:image/png;base64,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'
  // TODO:为什么showHasApp需要!修饰符 否则会报错
  @State showHasApp!: boolean
  @Mutation mutationShowHasApp!: (payload: boolean) => void
  close () {
    this.mutationShowHasApp(false)
  }
  tapBtn () {

  }
  tapSearch () {
    // this.$router.push('/search')
  }
}
</script>
<style lang="scss" scoped>
    .hasAppWrapper {
        width: 100%;
        padding: .06rem 0;
        display: flex;
        background: #000;
        .icon {
            padding:0 .12rem;
            color: #fff;
            font-size: .2rem;
            line-height: .48rem;
        }
        .img {
            width: .48rem;
            height: .48rem;
            margin-right: .12rem;
        }
        .content{
            h2{
                height: .24rem;
                color: #fff;
                font-size: .13rem;
                line-height: .24rem
            }
            h3{
                height: .24rem;
                color: #ccc;
                font-size: .12rem;
                line-height: .24rem
            }
        }
        .btn{
            width: .84rem;
            height: .36rem;
            border-radius: .05rem;
            position: absolute;
            right: .12rem;
            top: .14rem;
            color: #fff;
            font-size: .14rem;
            line-height: .36rem;
            text-align: center;
            background: #f33;
        }
    }
    .searchWrapper {
        width: 100%;
        height: .44rem;
        overflow: hidden;
        position: sticky;
        top: 0px;
        z-index: 2;
        background: rgba(0, 0, 0, 0);
        .search {
            width: 3.03rem;
            height: .3rem;
            margin: .07rem .16rem 0rem;
            border-radius:.03rem;
            background-color: hsla(0, 0%, 100%, .25);
            position:relative;
            background:#fff;
            p {
                margin: 0 auto;
                color: #ccc;
                font-size: .14rem;
                line-height: .3rem;
                text-indent: .27rem;
            }
            .find {
                position: absolute;
                left: .07rem;
                top: .07rem;
                color: #333
            }
        }
        .bag {
            position:absolute;
            right:.13rem;
            top:.08rem;
            color: #fff;
            font-size: .25rem
        }
    }
</style>
