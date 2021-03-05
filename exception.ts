import { AxiosResponse } from 'axios';

export class ResponseError<T = any> extends Error {
  public name = 'ResponseError';

  constructor (public response: AxiosResponse<T>, msg: string) {
    super(msg);
  }
}

export class LoginError<T extends { message: string }> extends ResponseError {
  public name = 'LoginError';

  constructor (public response: AxiosResponse<T>) {
    super(response, response.data.message);
  }
}
