import * as ls from 'local-storage';
import { LocalStorageName } from '~/@types/app';
import { CartsStoreItem } from '~/@types/carts';

export function getLocalCartsItems (): CartsStoreItem[] {
  return ls.get<CartsStoreItem[]>(LocalStorageName.Carts) ?? [];
}

export function setLocalCartsItems (items: CartsStoreItem[]) {
  return ls.set(LocalStorageName.Carts, items);
}
