<template>
    <ul>
        <router-link
            v-for="item in tabbar"
            :key="item.id"
            :to="item.path"
            tag="li"
            active-class="active"
        >
            <span class="iconfont">{{item.iconfont}}</span>
            <p>{{item.title}}</p>
        </router-link>
    </ul>
</template>
<script lang='ts'>
import { tabbar } from '../utils/constants'
import { ITabbar } from '@/interfaces/interfaces'
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Tabbar extends Vue {
    tabbar: ITabbar[] = [...tabbar]
    mounted () {
      console.log(this.tabbar)
    }
}
</script>
<style lang="scss" scoped>
    ul {
        width:100%;
        height:0.5rem;
        border-top:1px solid white;
        display:flex;
        z-index: 99;
        position:fixed;
        bottom:0px;
        background:black;
        li{
            flex:1;
            text-align:center;
            font-size:0.12rem;
            color:#7e8c8d;
            padding-top:.05rem;
            p{
                height:0.14rem;
                line-height:0.14rem;
            }
            span{
                font-size:.25rem
            }
        }
        .active{
            color:#fff
        }
    }
</style>
