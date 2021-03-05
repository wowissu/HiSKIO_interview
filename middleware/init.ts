import { getModule } from 'nuxt-property-decorator';
import { middleware } from '~/wrapper';
import MemberModule from '~/store/member';
import CourseModule from '~/store/course';
import CartsModule from '~/store/carts';

export default middleware(({ store }) => {
  const memberStore = getModule(MemberModule, store);
  const courseStore = getModule(CourseModule, store);
  const cartsStore = getModule(CartsModule, store);

  Promise.all([
    memberStore.fetchMe(),
    courseStore.fetchCourses(),
    cartsStore.fetchCartItems()
  ]);
})
;
