import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator';
import _ from 'lodash';
import { CartsAddManyItem, CartsItem, CartsInfo } from '~/@types/carts';
import { getLocalCartsItems, setLocalCartsItems } from '~/functions/carts.fn';
import { hasAccessToken } from '~/functions/member.fn';

@Module({
  name: 'carts',
  namespaced: true,
  stateFactory: true
})
export default class CartsModule extends VuexModule {
  public items: CartsItem[] = [];

  /** 小計的錢錢 */
  public subtotal = 0;
  /** 全部的錢錢 */
  public total = 0;

  @VuexMutation
  public setItems (val: CartsModule['items']) {
    this.items = val;
  }

  @VuexMutation
  public setSubtotal (val: number) {
    this.subtotal = val;
  }

  @VuexMutation
  public setTotal (val: number) {
    this.total = val;
  }

  /** 取得購物車
   * 沒有 get ???
   */
  @VuexAction({ rawError: true })
  public async fetchCartItems (postdata?: CartsAddManyItem) {
    try {
      const info = await this.store.$axios.$post<CartsInfo>('/carts', {
        coupon: postdata?.coupon ?? '',
        items: postdata?.items ?? getLocalCartsItems()
      });

      this.setItems(info.data);
      this.setSubtotal(info.subtotal);
      this.setTotal(info.total);
    } catch (err) {
      this.setItems([]);
      this.setSubtotal(0);
      this.setTotal(0);

      throw err;
    }
  }

  @VuexAction({ rawError: true })
  public addCartsItem (postdata: CartsAddManyItem) {
    const items = _.uniqBy(getLocalCartsItems().concat(postdata.items), 'id');
    setLocalCartsItems(items);

    return this.fetchCartItems({
      coupon: postdata.coupon,
      items
    });
  }

  @VuexAction({ rawError: true })
  public async removeCartsItem (id: CartsItem['id']) {
    const items = getLocalCartsItems().filter(item => item.id !== id);
    setLocalCartsItems(items);

    if (hasAccessToken()) {
      await this.store.$axios.$delete('/carts', {
        data: { items: [{ id, coupon: '' }] }
      });
    }

    return this.fetchCartItems();
  }
}
