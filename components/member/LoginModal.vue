<template>
  <Modal v-model="show" content-class="login-modal">
    <div class="flex flex-col space-y-6">
      <!-- logo -->
      <div class="brand-logo">
        <img src="https://hiskio.com/_nuxt/img/bd9ace2.png" alt="" class="h-full w-full">
      </div>
      <!-- tabs -->
      <div class="tabs">
        <div class="tab active">
          <span>登入</span>
        </div>
        <div class="tab">
          <span>註冊</span>
        </div>
      </div>
      <!-- Third part login -->
      <div class="third-part-login space-y-4">
        <a class="flex items-center justify-center rounded-md border border-gray-500 py-2 rounded-6px w-320px">
          <img src="https://hiskio.com/_nuxt/8f910008cc1f9a1424ee7922ac45b8c5.svg" alt="HiSKIO facebook login" class="mr-2">
          <p class="text-gray-600 text-base w-140px">使用Facebook登入</p>
        </a>
        <a class="flex items-center justify-center rounded-md border border-gray-500 py-2 rounded-6px w-320px">
          <img src="https://hiskio.com/_nuxt/65420621c7d704b4af31d084de3c81d6.svg" alt="HiSKIO google login" class="mr-2">
          <p class="text-gray-600 text-base w-140px">使用Google登入</p>
        </a>
        <a class="flex items-center justify-center rounded-md border border-gray-500 py-2 rounded-6px w-320px">
          <img src="https://hiskio.com/_nuxt/b67216514b51fe05596e9ce50482282e.svg" alt="HiSKIO github login" class="mr-2">
          <p class="text-gray-600 text-base w-140px">使用Github登入</p>
        </a>
        <a class="flex items-center justify-center rounded-md border border-gray-500 py-2 rounded-6px w-320px">
          <img src="https://hiskio.com/_nuxt/6a04c0b4553d1297a872a26567231633.svg" alt="HiSKIO linkedin login" class="mr-2">
          <p class="text-gray-600 text-base w-140px">使用LinkedIn登入</p>
        </a>
      </div>
      <!-- Login From -->
      <form class="form space-y-3" @submit.prevent="onSubmit">
        <p class="text-center text-gray-700 mb-4">
          使用 HiSKIO ID 登入
        </p>
        <Input v-model="postdata.account" icon="user-circle" placeholder="請輸入HiSKIO ID" />
        <Input v-model="postdata.password" type="password" icon="lock" placeholder="請輸入登入密碼" />
        <p class="text-gray-500 text-sm">
          <fa icon="check-square" class="inline-block text-lg text-hi-brand" />
          登入註冊即代表您同意<a href="https://hiskio.com/user-policy" target="_blank" class="underline cursor-pointer">使用者</a>
          及<a href="https://hiskio.com/privacy-policy" target="_blank" class="underline cursor-pointer">隱私權政策</a>
        </p>
        <div class="py-4">
          <Btn full size="md" type="submit">
            登入
          </Btn>
        </div>
        <div class="flex items-center justify-center text-base text-gray-700">
          忘記密碼
        </div>
      </form>
    </div>
  </Modal>
</template>

<script lang="ts">
import { Component, ModelSync, Vue } from 'nuxt-property-decorator';
import { MemberAuth } from '@/@types/member';
import Modal from '../common/Modal.vue';
import Input from '../common/Input.vue';
import Btn from '../common/Btn.vue';

@Component({
  components: { Modal, Input, Btn }
})
export default class LoginModal extends Vue {
  @ModelSync('value', 'change', { type: Boolean }) public show!: boolean;

  public postdata: MemberAuth = {
    account: 'wowissu',
    password: 'small4herp'
  }

  public onSubmit () {
    this.$memberStore.doLogin(this.postdata);

    // TODO 缺少 verify 與 notify
  }
}
</script>

<style lang="scss" scope >
  .login-modal {
    max-width: 450px;
    padding-bottom: 28px;
    padding-top: 40px;
    background-size: contain;
    background-position: top;
    background-color: #fff;
    background-repeat: no-repeat;
    background-image: url(https://hiskio.com/_nuxt/img/0ac4f78.png);
  }

  .brand-logo {
    width: 120px;
    height: 18px;
    margin: 0 auto;
  }

  .tabs {
    @apply flex flex-no-wrap justify-center;

    .tab {
      @apply text-2xl font-black flex items-center justify-center text-gray-600;

      width: 160px;

      span {
        @apply border-b-4 py-2 px-2 border-transparent;
      }

      &.active {
        @apply text-hi-brand;

        span {
          @apply border-hi-brand;
        }
      }
    }
  }

  .third-part-login {
    @apply flex flex-col items-center justify-between mx-auto ;
  }

  .form {
    width: 320px;
    margin: 0 auto;
  }
</style>
