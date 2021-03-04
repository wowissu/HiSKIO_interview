import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator';
import { Member, MemberAuth } from '~/@types/member';

@Module({
  name: 'member',
  namespaced: true,
  stateFactory: true
})
export default class MemberModule extends VuexModule {
  public member: Member | null = null;

  @VuexMutation
  public setMember (val: MemberModule['member']) {
    this.member = val;
  }

  @VuexAction({ rawError: true })
  public doLogin (postdata: MemberAuth) {
    return this.store.$axios.$post('/auth/login', postdata);
  }

  @VuexAction({ rawError: true })
  public async fetchMe () {
    try {
      const member = await this.store.$axios.$get<Member>('/me');

      this.setMember(member);
    } catch (err) {
      this.setMember(null);
    }
  }
}
