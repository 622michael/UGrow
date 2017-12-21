var GoogleAuth = require('google-auth-library')
var auth = new GoogleAuth
var CLIENT_ID = 'abcd'
var client = new auth.OAuth2(CLIENT_ID, '', '')

var OAuthFunctions = {
   verifyIdToken:function(idToken, callback){
    client.verifyIdToken(
      idToken,
      CLIENT_ID,
      function(error, login) {
          if(error != null){
            callback(error, null)
          } else {
            callback(null, login.getPayload())
          }
      });
   },
   getUserFromPayload:function(payload){
    var userId = payload['hd']
    var expireTime = payload['exp']
    var email = payload['email']
    var name = payload['name']
    //get id_token from front end somehow idk
   },
   client:client
}


module.exports = OAuthFunctions;