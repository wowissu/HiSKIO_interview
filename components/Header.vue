<template>
  <div class="h-50px">
    <header class="fixed top-0 z-10 w-full bg-white shadow-m h-50px">
      <div class="flex items-center justify-between h-full mx-auto max-w-6xl">
        <div class="flex items-center justify-start">
          <!-- logo -->
          <div class="h-full w-auto flex items-center">
            <div class="logo-hiskio" />
          </div>
          <!-- search bar -->
          <div class="flex items-center justify-start">
            <fa icon="search" class="text-gray-600" /></fa>
            <div class="pl-3">
              <input type="text" placeholder="搜尋" class="focus:outline-none focus:border-hi-white border-b border-transparent bg-input-gray">
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end space-x-3">
          <!-- 我想開課 -->
          <div>
            <nuxt-link to="https://hiskio.com/teach">
              我想開課
            </nuxt-link>
          </div>

          <!-- 購物車/FAQ -->
          <div class="flex items-center space-x-3 text-gray-400">
            <a class="cursor-pointer">
              <fa icon="shopping-cart" />
            </a>
            <a href="" class="cursor-pointer">
              <fa icon="question-circle" />
            </a>
          </div>

          <!-- 登入與註冊 -->
          <div class="flex items-center space-x-3">
            <Btn outline>
              登入
              <template #modal="scope">
                <LoginModal v-model="scope.show" />
              </template>
            </Btn>
            <Btn>註冊</Btn>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Btn from '@/components/common/Btn.vue'
import LoginModal from '@/components/member/LoginModal.vue'

@Component({
  components: { Btn, LoginModal }
})
export default class Header extends Vue {

}
</script>

<style lang="scss" scope>
.logo-hiskio {
  height: 15px;
  width: 100px;
  margin-right: 31px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(https://hiskio.com/_nuxt/83be888b894f82d42deb8757e6839fca.svg);
}
</style>
