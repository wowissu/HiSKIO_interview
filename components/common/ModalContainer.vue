<template>
  <div class="modal">
    <div class="modal-bg" @click="onHide" />
    <div class="modal-content" :class="contentClass">
      <!-- close btn -->
      <div class="modal-close-btn" @click="onHide">
        <fa icon="times" /></fa>
      </div>

      <slot name="default" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'nuxt-property-decorator';

@Component<ModalContainer>({})
export default class ModalContainer extends Vue {
  @Prop({ type: [String, Object] }) public contentClass!: string | object

  public onHide () {
    this.$emit('hide');
  }
}
</script>

<style lang="scss" scope>
.modal {
  @apply fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-30;

  .modal-bg {
    @apply absolute z-0 w-full h-full bg-black bg-opacity-75;
  }

  .modal-content {
    @apply w-full relative rounded-lg max-h-screen bg-white py-10 z-10;

    min-width: 320px;
  }

  .modal-close-btn {
    @apply absolute top-30px right-30px cursor-pointer text-gray-600;
  }
}
</style>
