import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator';
import { Member, MemberAuth, MemberToken } from '~/@types/member';
import { LoginError } from '~/exception';
import { clearLogin, hasAccessToken, saveLogin } from '~/functions/member.fn';
@Module({
  name: 'member',
  namespaced: true,
  stateFactory: true
})
export default class MemberModule extends VuexModule {
  public member: Member | null = null;

  get isLogin () {
    return this.member !== null && hasAccessToken();
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
    return this.store.$axios.post<MemberToken>('/auth/login', postdata).then((res) => {
      if (res.status === 202) {
        throw new LoginError(res as any);
      }

      return res.data;
    });
  }

  @VuexAction({ rawError: true })
  public doLogout () {
    this.store.$axios.$post<MemberToken>('/auth/logout');
    clearLogin();
    window.location.reload();
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
