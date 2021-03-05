import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator';
import * as ls from 'local-storage';
import { Member, MemberAuth, MemberToken } from '~/@types/member';
import { LocalStorageName } from '~/@types/app';
@Module({
  name: 'member',
  namespaced: true,
  stateFactory: true
})
export default class MemberModule extends VuexModule {
  public member: Member | null = null;

  get isLogin () {
    return this.member !== null;
  }

  @VuexMutation
  public setMember (val: MemberModule['member']) {
    this.member = val;
  }

  @VuexMutation
  public setLogin (val: MemberToken) {
    saveLogin(val);
  }

  @VuexAction({ commit: 'setLogin', rawError: true })
  public doLogin (postdata: MemberAuth) {
    return this.store.$axios.$post<MemberToken>('/auth/login', postdata);
  }

  @VuexAction({ commit: 'setMember', rawError: true })
  public fetchMe () {
    try {
      return this.store.$axios.$get<Member>('/me');
    } catch (err) {
      console.error(err);

      return Promise.resolve(null);
    }
  }
}

function saveLogin (info: MemberToken) {
  ls.set(LocalStorageName.AccessToken, info.access_token || '');
  ls.set(LocalStorageName.ExpiresIn, info.expires_in || '');
  ls.set(LocalStorageName.TokenType, info.token_type || '');
}
