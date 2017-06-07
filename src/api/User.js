import * as client from './Client';

import {Users} from '../models/Users';

const BASE_URL = '/api/v1/users';

// ========== API

function users(url) {
  return client.get({ url: url || `${BASE_URL}?limit=20` })
    .then(function (resp, status, xhr) {
      var link = xhr.getResponseHeader("link");
      return new Users(resp, link);
    });
}

function me() {
  return client.get({ url: `${BASE_URL}/me` })
    .then(function (resp) {
      // TODO: maybe create User model.
      return resp;
    });

}

export {users, me}
