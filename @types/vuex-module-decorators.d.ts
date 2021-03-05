
import { Store } from 'vuex';
import MemberModule from '@/store/member';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { KeysOfType } from './helper';
import CourseModule from '~/store/course';
import CartsModule from '~/store/carts';

/**
 * Register stores here.
 * alse check {@link src/@types/vue.prototype.d.ts}
 */
export interface Mods {
  member: { prototypeName: '$memberStore', module: MemberModule },
  course: { prototypeName: '$courseStore', module: CourseModule },
  carts: { prototypeName: '$cartsStore', module: CartsModule },
}

export type StoreMods = { [P in keyof Mods]: Mods[P]['module'] };
export type PrototypeMods = { [P in Mods[keyof Mods]['prototypeName']]: Mods[KeysOfType<{ [P in keyof Mods]: Mods[P]['prototypeName'] }, P>]['module'] };

export type AppVuexStore = Store<StoreMods> & {
  $axios: NuxtAxiosInstance
};

declare module 'vuex-module-decorators' {
  export interface VuexModule {
    store: AppVuexStore;
  }
}
