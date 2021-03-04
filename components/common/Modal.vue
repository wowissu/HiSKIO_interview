<template>
  <ModalContainer v-if="show" v-attr="$attrs">
    <slot name="default" />
  </ModalContainer>
</template>

<script lang="ts">
import { Component, VModel, Vue } from 'nuxt-property-decorator'
import ModalContainer from './ModalContainer.vue'

@Component<Modal>({
  components: { ModalContainer }
})
export default class Modal extends Vue {
  @VModel({ type: Boolean }) public show!: boolean
}
</script>
