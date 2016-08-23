import R from 'ramda';

import {Links} from './Link';

function createUser(resp) {
  var profile = resp.profile;

  return R.mergeAll([
    {},
    resp,
    {
      profile: R.mergeAll(
        [
          {},
          profile,
          {
            fullName: profile.firstName + ' ' + profile.lastName
          }
        ])
    }
  ]);
}

class Users {
  constructor(resps, link) {
    var xs = R.map(createUser, resps);

    this.xs = xs;
    this.links = new Links(link);
  }

}

export {Users};
