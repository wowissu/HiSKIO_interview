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
          <div class="hidden md:flex text-gray-700 space-x-2 flex-no-wrap">
            <nuxt-link to="https://hiskio.com/teach" class="whitespace-no-wrap hover:text-hi-brand">
              我想開課
            </nuxt-link>
            <nuxt-link to="https://hiskio.com/account/missions" class="whitespace-no-wrap hover:text-hi-brand">
              任務版
            </nuxt-link>
            <nuxt-link to="https://hiskio.com/account/courses/continue" class="whitespace-no-wrap hover:text-hi-brand">
              我的課程
            </nuxt-link>
          </div>

          <!-- 購物車/FAQ -->
          <div class="flex items-center space-x-3">
            <!-- cart -->
            <a class="cursor-pointer text-gray-400" :class="{ 'active-cart': cartsItems.length }" @click="openCarts">
              <fa icon="shopping-cart" />
            </a>
            <!-- FAQ -->
            <a href="" class="cursor-pointer hidden md:block text-gray-400">
              <fa icon="question-circle" />
            </a>
            <!-- side list -->
            <a href="" class="cursor-pointer text-gray-600 md:hidden">
              <fa icon="list" />
            </a>
          </div>

          <!-- 登入與註冊 -->
          <div v-if="!isLogin" class="items-center space-x-3 hidden md:flex">
            <Btn outline>
              <span class="whitespace-no-wrap">登入</span>
              <template #modal="{ modal }">
                <LoginModal v-model="modal.show" />
              </template>
            </Btn>
            <Btn>
              <span class="whitespace-no-wrap">註冊</span>
            </Btn>
          </div>

          <!-- My Avatar -->
          <div v-else class="avatar w-8 h-8 hidden md:flex flex-shrink-0 flex-grow-0">
            <img :src="member.avatar" alt="" class="h-full w-full">
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
  get member () {
    return this.$memberStore.member!;
  }

  get cartsItems () {
    return this.$cartsStore.items;
  }

  get isLogin () {
    console.log(this.$memberStore.isLogin);
    return this.$memberStore.isLogin;
  }

  public openCarts () {
    // this.$root.$emit();
  }
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

.active-cart {
  @apply text-hi-brand relative;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    right: 0;
    display: block;
    width: 6px;
    height: 6px;
    background-color: #eb6767;
    border-radius: 9999px;
  }
}
</style>
