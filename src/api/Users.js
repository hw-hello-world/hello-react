import client from './Client';

import Users from '../models/Users';

const BASE_URL = '/api/v1/users';

// ========== API

function users(url) {
  return client({ url: url || `${BASE_URL}?limit=5` })
    .then(function (resp, status, xhr) {
      var link = xhr.getResponseHeader("link");
      return new Users(resp, link);
    });
}

function me() {
  return client({ url: `${BASE_URL}/me`});
}

export {users, me}
