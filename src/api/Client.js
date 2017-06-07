import jquery from 'jquery';
import R from 'ramda';

function jqueryClient(opt) {
  return jquery
    .ajax(R.merge(
      {
        dataType: "json",
        method: 'GET',
      },
      opt));
}

function get(opt) {
  return jqueryClient(R.merge({method: 'GET'}, opt));
}

function post(opt) {
  return jqueryClient(R.merge({method: 'POST'}, opt));
}

function put(opt) {
  return jqueryClient(R.merge({method: 'PUT'}, opt));
}

export default jqueryClient;

module.exports = {
  get,
  post,
  put,
};
