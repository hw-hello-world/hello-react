import R from 'ramda';

class Link {

  constructor(link) {
    var xs = link.split('; ');
    this.link = xs[0].replace(/[<>]/g, '');
    this.type = xs[1].replace('rel=', '').replace(/['"]/g, '');
  }

  isNext() {
    return this.type === 'next';
  }

  isPrev() {
    return this.type === 'prev';
  }

  isSelf() {
    return this.type === 'self';
  }
}

class Links {
  constructor(linkStr) {
    var links = R.map(function (link) {
      return new Link(link);
    }, linkStr.split(', '));

    this.links = links;
    this.next = R.filter(function (link) { return link.isNext(); }, links)[0];
    this.prev = R.filter(function (link) { return link.isPrev(); }, links)[0];
  }

  getNext() {
    return this.next;
  }

  hasNext() {
    return !!this.getNext();
  }

  getPrev() {
    return this.prev;
  }

  hasPrev() {
    return !!this.getPrev();
  }

}

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

export default Users;
