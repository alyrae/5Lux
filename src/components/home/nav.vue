<template>
    <ul class="navWrapper">
        <router-link
            v-for="item in homeNav"
            :key="item.ad_link"
            :to="item.ad_link | changePath"
            tag="li"
        >
            <img :src="item.ad_code" alt="">
            <p>{{item.ad_name}}</p>
        </router-link>
    </ul>
</template>
<script lang="ts">
// https://apim.restful.5lux.com.cn/index/index_button
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'
import * as interfaces from '../../interfaces/interfaces'
import axios from 'axios'
@Component({
  filters: {
    changePath (data: string) {
      // http://mobile.5lux.com/newgoods
      let index = data.lastIndexOf('/')
      return data.slice(index)
    }
  }
})
export default class Nav extends Vue {
    @State homeNav!: interfaces.IHomeNavItem[]
    @Mutation mutationHomeNav!: (Payload: interfaces.IHomeNavItem[]) => void
    mounted () {
      if (!this.homeNav.length) {
        axios({
          url: 'https://apim.restful.5lux.com.cn/index/index_button'
        }).then(res => {
          console.log(res)
          this.mutationHomeNav(res.data.data.list)
        })
      }
    }
}
</script>
<style lang="scss" scoped>
    ul {
        width: 100%;
        height: .75rem;
        display: flex;
        justify-content: space-between;
        background: #fff;
        position: sticky;
        top: .44rem;
    }
    li {
        flex: 1;
        text-align: center;
        height: 100%;
        font-size: 12px;
    }
    .imgWrapper {
        width: 100%;
        height: 100%;
    }
    img {
        width: 30%;

    }
</style>
