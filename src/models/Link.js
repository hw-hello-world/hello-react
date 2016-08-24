import R from 'ramda';

// FIXME: temporary hack.
const DOMAIN = 'http://rain.okta1.com:1802';

class Link {

  constructor(link) {
    var xs = link.split('; ');
    this.link = xs[0].replace(/[<>]/g, '').replace(DOMAIN, '');
    this.type = xs[1].replace('rel=', '').replace(/['"]/g, '');
  }

  isNext() {
    return this.type === 'next';
  }

  isSelf() {
    return this.type === 'self';
  }
}

class Links {
  constructor(linkStr) {
    var links = [];

    if (R.is(String, linkStr)) {
      links = R.map(function (link) {
        return new Link(link);
      }, linkStr.split(', '));
    }

    this.links = links;
    this.next = R.filter(function (link) { return link.isNext(); }, links)[0];
  }

  getNext() {
    return this.next;
  }

  hasNext() {
    return !!this.getNext();
  }

}

export {Link, Links}
