<template>
  <div class="progress">
    <div class="pg-block">
      <div class="pg-box">
        <div class="pg-rate" :style="{width: `${rate}%`}" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component<Progress>({})
export default class Progress extends Vue {
  @Prop({ type: Number }) public rate!: number;
}
</script>

<style lang="scss" scope>
.progress {
  .pg-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
  }

  .pg-box {
    @apply rounded-md overflow-hidden w-full h-2;

    background-color: #f5f5f5;
  }

  .pg-rate {
    @apply bg-gradient-to-r from-red-500 to-red-600 h-full rounded-md;
  }
}
</style>
