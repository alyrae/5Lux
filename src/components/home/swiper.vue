<template>
    <div class="swiper-container">
        <div class="swiper-wrapper" v-if="homeSwiper.length">
            <div class="swiper-slide" v-for="item in homeSwiper" :key="item.sort">
                <img :src="item.slide_thumb" :alt="item.slide_title"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Mutation, State } from 'vuex-class'
import axios from 'axios'
import Swiper from 'swiper'
import { IHomeSwiperItem } from '@/interfaces/interfaces'
@Component
export default class Swipe extends Vue {
    @Mutation mutationHomeSwiper!: (payload: IHomeSwiperItem[]) => void
    @State homeSwiper!: IHomeSwiperItem[]
    createSwiper () {
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        }
      })
    }
    mounted () {
      if (!this.homeSwiper.length) {
        axios({
          url: 'https://apim.restful.5lux.com.cn/index/index_slider'
        }).then(res => {
          this.mutationHomeSwiper(res.data.data)
          console.log(this.homeSwiper)
        })
      } else {
        this.createSwiper()
      }
    }
    updated () {
      this.createSwiper()
    }
}
</script>
<style lang="scss" scoped>
    .swiper-container{
        width: 100%;
        height: 2.8rem;
        overflow: hidden;
        .swiper-wrapper {
            display: flex;
            .swiper-slide {
                flex-shrink: 0;
                img {
                    width: 100%;

                }
            }
        }

    }

</style>
