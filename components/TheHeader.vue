<template>
  <div class="h-50px">
    <header class="fixed top-0 z-10 w-full bg-white shadow-m h-50px px-2 sm:px-4">
      <div class="flex items-center justify-between h-full mx-auto max-w-6xl ">
        <div class="flex items-center justify-start flex-2">
          <!-- logo -->
          <div class="h-full w-auto flex items-center mr-2 md:mr-8">
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
        <div class="flex items-center justify-end space-x-3 flex-1">
          <!-- 我想開課 -->
          <div class="hidden md:block">
            <nuxt-link to="https://hiskio.com/teach" class="whitespace-no-wrap">
              我想開課
            </nuxt-link>
          </div>

          <!-- 購物車/FAQ -->
          <div class="flex items-center space-x-3">
            <a class="cursor-pointer">
              <fa icon="shopping-cart" class="text-gray-400" />
            </a>
            <a href="" class="cursor-pointer hidden md:block text-gray-400">
              <fa icon="question-circle" />
            </a>
            <!-- side list -->
            <a href="" class="cursor-pointer text-gray-600 md:hidden">
              <fa icon="list" />
            </a>
          </div>

          <!-- 登入與註冊 -->
          <div class="items-center space-x-3 hidden md:flex">
            <Btn tag="a" outline>
              登入
              <template #modal="{ modal }">
                <LoginModal v-model="modal.show" />
              </template>
            </Btn>
            <Btn tag="a">
              註冊
            </Btn>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Btn from '@/components/common/Btn.vue';
import LoginModal from '@/components/member/LoginModal.vue';

@Component({
  components: { Btn, LoginModal }
})
export default class TheHeader extends Vue {

}
</script>

<style lang="scss" scope>
.logo-hiskio {
  height: 15px;
  width: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(https://hiskio.com/_nuxt/83be888b894f82d42deb8757e6839fca.svg);
}
</style>
