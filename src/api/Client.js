import jquery from 'jquery';
import R from 'ramda';

// TODO: auth
// - import token from config file? alse set the target URL in webpack config properly (scripts/start.js)

var tokens = {
  // for local org
  local: '002w3WpvjwZ7wmx_UHQzXiw6EbfhkDt6P6kYFRrWsM',
  // for preview org freizl
  prev: '00WCpeIfPnOyaDcbi_E_lfm1ZqMdbUmvx_64aQYvTL'
};

function jqueryClient(opt) {
  return jquery
    .ajax(R.merge({ contentType: "application/json",
                    dataType: "json",
                    accept: "application/json",
                    method: 'GET',
                    beforeSend: function(xhr, settings) {
                      xhr.setRequestHeader('Authorization','SSWS ' + tokens.local);
                    }
                  },
                  opt));
}

export default jqueryClient;
