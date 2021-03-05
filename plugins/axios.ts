import * as ls from 'local-storage';
import { capitalize } from 'lodash';
import { plugin } from '~/wrapper';
import { LocalStorageName } from '~/@types/app';

export default plugin(({ $axios }) => {
  $axios.interceptors.request.use((request) => {
    const token = ls.get(LocalStorageName.AccessToken);

    if (token) {
      const tokenType = ls.get<string>(LocalStorageName.TokenType);

      request.headers.authorization = `${capitalize(tokenType)} ${token}`;
    }

    return request;
  });
});
