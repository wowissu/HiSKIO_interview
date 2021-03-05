<template>
  <component
    :is="is"
    class="btn"
    :class="{ outline, full, [`size-${size}`]: size }"
    v-bind="$attrs"
    :tag="tag"
    :to="to"
    v-on="$listeners"
  >
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
import { RawLocation } from 'vue-router';

@Component<Btn>({
  mounted () {
    if (this.$scopedSlots.modal) {
      this.$el.addEventListener('click', this.ModalClickHandler);
    }
  },
  destroyed () {
    this.$el.removeEventListener('click', this.ModalClickHandler);
  }
})
export default class Btn extends Vue {
  @Prop({ type: String, default: 'button' }) public tag!: string;
  @Prop({ type: Boolean, default: false }) public outline!: boolean;
  @Prop({ type: Boolean, default: false }) public full!: boolean;
  @Prop({ type: String }) public size!: string;
  @Prop({ type: String }) public text!: string;
  @Prop({ type: [String, Object] }) public to!: RawLocation;

  public modal = {
    show: false
  }

  get is () {
    return this.to ? 'nuxt-link' : this.tag;
  }

  public ModalClickHandler () {
    this.modal.show = !this.modal.show;
  }
}
</script>

<style lang="scss" scope>
.btn {
  @apply px-4 h-8;
  @apply rounded border border-hi-brand;
  @apply inline-flex items-center justify-center;
  @apply cursor-pointer text-sm;
  @apply text-white bg-hi-brand;

  &:focus {
    @apply outline-none;
  }

  &.outline {
    @apply text-hi-brand bg-white;
  }

  &.size {
    &-md {
      @apply px-8 h-10;
    }

    &-lg {
      @apply px-16 h-12;
    }
  }

  &.full {
    @apply w-full;
  }
}
</style>
