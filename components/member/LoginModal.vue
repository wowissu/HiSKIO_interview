<template>
  <Modal v-model="show" content-class="login-modal">
    <div>
      login modal
    </div>
  </Modal>
</template>

<script lang="ts">
import { Component, VModel, Vue } from 'nuxt-property-decorator'
import Modal from '../common/Modal.vue'

@Component({
  components: { Modal }
})
export default class LoginModal extends Vue {
  @VModel({ type: Boolean }) public show!: boolean
}
</script>
