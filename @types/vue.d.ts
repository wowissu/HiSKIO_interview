
import { PrototypeMods } from './vuex-module-decorators';
import { price } from '~/helper';

declare module 'vue/types/vue' {
  export interface Vue extends PrototypeMods {
    $price: typeof price
  }
}
