<template>
  <div class="modal">
    <div class="modal-content">
      <!-- close btn -->
      <div class="modal-close-btn">
        <fa icon="times" /></fa>
      </div>

      <slot name="default" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component<ModalContainer>({})
export default class ModalContainer extends Vue {}
</script>

<style lang="scss" scope>
.modal {
  @apply fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-75 z-30;

  .modal-content {
    @apply relative rounded-lg max-h-screen bg-white py-10;

    min-width: 320px;
  }

  .modal-close-btn {
    @apply absolute top-30px right-30px;
  }
}
</style>
