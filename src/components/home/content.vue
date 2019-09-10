<template>
    <div class="contentWrapper">
        <swiper></swiper>
        <homeNav></homeNav>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import swiper from './swiper.vue'
import homeNav from './nav.vue'
@Component({
  components: {
    swiper,
    homeNav
  }
})
export default class Content extends Vue {

}
</script>
<style lang="scss" scoped>
    .contentWrapper {
        margin-top: -0.44rem;
        height: 20rem;
        transform: translateZ(-1px)
    }
</style>
