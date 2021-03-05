<template>
  <nav v-show="show" class="nav">
    <div class="nav-bg" @click="hide" />
    <div class="nav-container relative pt-16 animate__animated animate__slideInRight" :class="{ [`side-${side}`]: side }">
      <div class="nav-header absolute top-0 left-0 w-full h-16">
        <slot name="header">
          <div class="nav-header-default">
            {{ title }}
          </div>
        </slot>

        <div class="absolute right-0 top-0 h-16 w-16 flex items-center justify-center text-lg text-gray-500">
          <fa icon="times" class="cursor-pointer" @click.stop.prevent="hide" />
        </div>
      </div>
      <div class="nav-content">
        <slot name="default" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop, ModelSync } from 'nuxt-property-decorator';

@Component<Drawer>({})
export default class Drawer extends Vue {
  @ModelSync('value', 'change', { type: Boolean }) public show!: boolean

  @Prop({ type: String, default: 'right' }) public side!: 'right' | 'left';
  @Prop({ type: String }) public title!: string;

  public hide () {
    this.show = false;
  }
}
</script>

<style lang="scss" scope>
.nav {
  @apply fixed top-0 left-0 z-30 w-screen h-screen;

  .nav-bg {
    @apply absolute z-0 w-full h-full bg-black bg-opacity-75;
  }

  .nav-container {
    @apply absolute top-0 bg-white h-full w-full max-w-sm;

    &.side-right {
      @apply right-0;
    }

    &.side-left {
      @apply left-0;
    }
  }

  .nav-header-default {
    @apply flex items-center justify-center text-hi-price text-lg h-full;
  }
}
</style>
