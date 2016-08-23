import jquery from 'jquery';
import R from 'ramda';

// TODO: auth
// - import token from config file ?
// - get token after login?
// - forward session with the proxy server after login?
var TOKEN = '00CY5DahpcK7EMVPjBmc9yDJsGsdGyIIo34uiX-Cgl';

function jqueryClient(opt) {
  return jquery
    .ajax(R.merge({ contentType: "application/json",
                    dataType: "json",
                    accept: "application/json",
                    method: 'GET',
                    beforeSend: function(xhr, settings) {
                      xhr.setRequestHeader('Authorization','SSWS ' + TOKEN);
                    }
                  },
                  opt));
}

export default jqueryClient;
