export interface CartsInfo {
  data: CartsItem[],
  'global_coupon': {},
  subtotal: number,
  total: number
}

export interface CartsItem {
  /** 為什麼 course.id 是 number 這裡是 string ??? */
  id: string,
  image: string,
  name: string,
  subtotal: number,
  total: number
}

export interface CartsStoreItem {
  id: CartsItem['id'],
  coupon: string
}

export interface CartsAddManyItem {
  coupon: string;
  items: CartsStoreItem[]
}
