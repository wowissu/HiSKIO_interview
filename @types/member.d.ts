
export interface Member {
  username: string;
  avatar: string;
}

export interface MemberAuth{
  account: string;
  password: string;
}

export interface MemberToken {
  'access_token': string;
  'expires_in': number;
  'token_type': string;
}
