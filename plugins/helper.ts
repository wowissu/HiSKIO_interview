import { plugin } from '~/wrapper';
import { price } from '~/helper';

export default plugin((_context, inject) => {
  inject('price', price);
});
