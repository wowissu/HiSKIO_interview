
export interface Course {
  'id': number,
  'title': string,
  'image': string,

  /** 課程最終售價 */
  'fixed_price': number,

  /** 募資成功人數門檻 */
  'fundraising_tickets': number,

  /** 目前購買人數 */
  'consumers': number,

  /** 募資價格排程 */
  'prices': CoursePrice[],

  /** 講師資訊 */
  'lectures': Lectures[]
}

export interface CoursePrice {
  /** 是否募資期間 */
  'fundraising': boolean,

  /** 價格 */
  'price': number,

  /** 價格排程時間 */
  'schedule_at': string
}

export interface Lectures {
  'id': number,
  'username': string,
  'avatar': string
}

export interface CourseFundraising{
  account: string;
  password: string;
}
