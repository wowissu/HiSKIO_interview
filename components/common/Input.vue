<template>
  <div class="input">
    <div v-if="icon" class="prefix">
      <fa v-if="icon" :icon="icon" class="text-lg text-gray-400" /></fa>
    </div>
    <div class="input-wrapper">
      <input v-model="val" class="input-self" :type="type" :class="inputClass" :placeholder="placeholder">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, VModel } from 'nuxt-property-decorator';

@Component<Input>({})
export default class Input extends Vue {
  @VModel({ type: String }) public val!: string;
  @Prop({ type: [String, Object] }) public inputClass!: string | object
  @Prop({ type: String }) public icon!: string
  @Prop({ type: String }) public placeholder!: string
  @Prop({ type: String, default: 'text' }) public type!: string
}
</script>

<style lang="scss" scope>
  .input {
    @apply flex flex-no-wrap items-center justify-center w-full bg-input-gray;

    .prefix {
      @apply flex items-center justify-center;

      width: 30px;
    }

    .input-wrapper {
      @apply flex-1;
    }

    .input-self {
      @apply p-2 bg-transparent outline-none w-full;
    }
  }
</style>
