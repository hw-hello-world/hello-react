(function (_, OktaSignIn) {

  var baseUrl = 'http://rain.okta1.com:1802/',
      oidcOpt = { clientId: '1670689453258860',
                  redirectUri: 'http://localhost:3000',
                  authScheme: 'OAUTH2',
                  authParams: {
                    responseType: 'id_token',
                    responseMode: 'okta_post_message',
                    scope: ['openid', 'email', 'profile', 'address', 'phone']
                  },
                  idpDisplay: 'SECONDARY',
                  idps: [ { 'type': 'FACEBOOK',
                            'id': '0oar25ZnMM5LrpY1O0g3'
                          }
                        ]
                },
      signinOpt = _.extend({ baseUrl: baseUrl }
                           //oidcOpt
                          ),
      oktaSignIn = new OktaSignIn(signinOpt);


  oktaSignIn.renderEl(
    { el: '#okta-login-container' },
    function (res) {
      console.debug('login success:', JSON.stringify(res));
      if (res.status === 'SUCCESS') {
        res.session.setCookieAndRedirect('http://localhost:3000/');
      }
    }
  );
})(_, OktaSignIn);
