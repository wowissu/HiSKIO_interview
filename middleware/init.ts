import { getModule } from 'nuxt-property-decorator';
import { middleware } from '~/wrapper';
import MemberModule from '~/store/member';
import CourseModule from '~/store/course';

export default middleware(({ store }) => {
  const memberStore = getModule(MemberModule, store);
  const courseStore = getModule(CourseModule, store);

  Promise.all([
    memberStore.fetchMe(),
    courseStore.fetchCourses()
  ]);
})
;
