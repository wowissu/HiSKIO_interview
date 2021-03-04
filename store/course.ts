import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator';
import { Course } from '~/@types/course';

@Module({
  name: 'member',
  namespaced: true,
  stateFactory: true
})
export default class CourseModule extends VuexModule {
  public courses: Course[] | null = null;

  @VuexMutation
  public setCourses (val: CourseModule['courses']) {
    this.courses = val;
  }

  /** 取得課程列表 */
  @VuexAction({ rawError: true })
  public fetchCourses () {
    try {
      this.store.$axios.$get<Course[]>('​/courses​/fundraising');
    } catch (err) {
      return Promise.resolve<Course[]>([]);
    }
  }
}
