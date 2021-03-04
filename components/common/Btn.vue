<template>
  <a class="btn" :class="{ outline }" v-on="$listeners" @click="onClick">
    <slot name="default">
      {{ text }}
    </slot>

    <div @click.stop>
      <slot name="modal" :show="modal.show" />
    </div>
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component<Btn>({
  mounted () {

  }
})
export default class Btn extends Vue {
  @Prop({ type: String, default: 'div' }) public tag!: string;
  @Prop({ type: Boolean, default: false }) public outline!: boolean;
  @Prop({ type: String }) public text!: string;

  public modal = {
    show: false
  }

  public onClick () {
    if (this.$scopedSlots.modal) {
      this.modal.show = !this.modal.show
    }
  }
}
</script>

<style lang="scss" scope>
.btn {
  @apply w-16 h-8;
  @apply rounded border border-hi-brand;
  @apply flex items-center justify-center;
  @apply cursor-pointer text-sm;
  @apply text-white bg-hi-brand;

  &.outline {
    @apply text-hi-brand bg-white;
  }
}
</style>
