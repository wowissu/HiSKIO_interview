import { Module, VuexAction, VuexModule, VuexMutation } from 'nuxt-property-decorator';
import { Course } from '~/@types/course';

@Module({
  name: 'course',
  namespaced: true,
  stateFactory: true
})
export default class CourseModule extends VuexModule {
  public courses: Course[] = [];

  @VuexMutation
  public setCourses (val: CourseModule['courses']) {
    this.courses = val;
  }

  /** 取得課程列表 */
  @VuexAction({ commit: 'setCourses', rawError: true })
  public fetchCourses () {
    try {
      return this.store.$axios.$get<Course[]>('/courses/fundraising');
    } catch (err) {
      console.error(err);

      return Promise.resolve<Course[]>([]);
    }
  }
}
