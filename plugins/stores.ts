import { getModule } from 'nuxt-property-decorator';
import CartsModule from '~/store/carts';
import CourseModule from '~/store/course';
import MemberModule from '~/store/member';
import { plugin } from '~/wrapper';

export default plugin(({ store }, inject) => {
  inject('memberStore', getModule(MemberModule, store));
  inject('courseStore', getModule(CourseModule, store));
  inject('cartsStore', getModule(CartsModule, store));
});
