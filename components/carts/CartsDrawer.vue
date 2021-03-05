<template>
  <Drawer v-model="showCartsDrawer" title="購物車" slide>
    <div class="carts-item-list">
      <div v-for="(item, index) in items" :key="index" class="cart-item-wrapper">
        <div class="item">
          <!-- image -->
          <div class="item-image">
            <div class="aspect-w-16 aspect-h-9 ">
              <div :style="{ backgroundImage: `url(${item.image})` }" class="bg-cover bg-center" />
            </div>
          </div>
          <!-- info -->
          <div class="flex-1 pl-2 flex flex-col justify-between">
            <!-- title -->
            <div class="flex items-baseline justify-center">
              <p class="item-title pr-2">
                {{ item.name }}
              </p>
              <fa icon="trash" class="cursor-pointer text-gray-400" @click.stop="removeItem(item.id)" /></fa>
            </div>
            <!-- price -->
            <div class="flex flex-no-wrap items-center space-x-2">
              <div class="item-price whitespace-no-wrap">
                <span class="text-sm">$</span>
                {{ $price(item.subtotal) }}
              </div>
              <!-- 判斷方式待確認 -->
              <div class="text-xs sm:text-sm px-1 text-gray-454545 border border-gray-454545 inline-block rounded whitespace-no-wrap">
                募資課程
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { AppEmit } from '~/@types/app';
import Drawer from '~/components/common/Drawer.vue';

@Component<CartsDrawer>({
  components: { Drawer },
  created () {
    this.$root.$on(AppEmit.OpenCartsItems, this.openCartsItemsHandler);
  },
  destroyed () {
    this.$root.$off(AppEmit.OpenCartsItems, this.openCartsItemsHandler);
  }
})
export default class CartsDrawer extends Vue {
  public showCartsDrawer = false;

  get items () {
    return this.$cartsStore.items;
  }

  public openCartsItemsHandler (val: boolean = !this.showCartsDrawer) {
    this.showCartsDrawer = val;
  }

  public removeItem (id: number | string) {
    this.$cartsStore.removeCartsItem(id.toString());
  }
}
</script>

<style lang="scss" scope>
.carts-item-list {
  @apply flex flex-col;

  .cart-item-wrapper {
    @apply px-2 py-3 border-b border-gray-300;

    height: 115px;
  }

  .item {
    @apply flex flex-no-wrap;

    .item-image {
      @apply max-w-full rounded overflow-hidden shadow-md;

      width: 150px;
    }

    .item-title {
      @apply text-hi-carts-title line-clamp-2 h-12 w-full text-base;
    }

    .item-price {
      @apply text-dis-price text-lg font-bold;
    }
  }
}
</style>
