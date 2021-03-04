<template>
  <component :is="tag" class="btn" :class="{ outline, full, [`size-${size}`]: size }" v-on="$listeners" @click="onClick">
    <slot name="default">
      {{ text }}
    </slot>

    <div @click.stop>
      <slot name="modal" :modal="modal" />
    </div>
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component<Btn>({})
export default class Btn extends Vue {
  @Prop({ type: String, default: 'button' }) public tag!: string;
  @Prop({ type: Boolean, default: false }) public outline!: boolean;
  @Prop({ type: Boolean, default: false }) public full!: boolean;
  @Prop({ type: String }) public size!: string;
  @Prop({ type: String }) public text!: string;

  public modal = {
    show: false
  }

  public onClick () {
    if (this.$scopedSlots.modal) {
      this.modal.show = !this.modal.show;
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

  &.full {
    @apply w-full;
  }

  &.size {
    &-sm {
      @apply h-8;
    }

    &-md {
      @apply h-10;
    }

    &-lg {
      @apply h-12;
    }
  }
}
</style>
