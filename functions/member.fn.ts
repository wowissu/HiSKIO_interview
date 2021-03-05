import * as ls from 'local-storage';
import { LocalStorageName } from '~/@types/app';
import { MemberToken } from '~/@types/member';

export function saveLogin (info: MemberToken) {
  ls.set(LocalStorageName.AccessToken, info.access_token || '');
  ls.set(LocalStorageName.ExpiresIn, info.expires_in || '');
  ls.set(LocalStorageName.TokenType, info.token_type || '');
}

export function clearLogin () {
  ls.remove(LocalStorageName.AccessToken);
  ls.remove(LocalStorageName.ExpiresIn);
  ls.remove(LocalStorageName.TokenType);
}

export function hasAccessToken (): boolean {
  return !!ls.get<string>(LocalStorageName.AccessToken);
}
