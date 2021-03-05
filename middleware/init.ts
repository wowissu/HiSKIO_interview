import { getModule } from 'nuxt-property-decorator';
import { middleware } from '~/wrapper';
import MemberModule from '~/store/member';
import CourseModule from '~/store/course';
import CartsModule from '~/store/carts';
import 'animate.css';
import { hasAccessToken } from '~/functions/member.fn';

export default middleware(({ store }) => {
  const memberStore = getModule(MemberModule, store);
  const courseStore = getModule(CourseModule, store);
  const cartsStore = getModule(CartsModule, store);

  Promise.all([
    hasAccessToken() ? memberStore.fetchMe() : Promise.resolve(null),
    courseStore.fetchCourses(),
    cartsStore.fetchCartItems()
  ]);
})
;
