var oauth = require('../../oauth')
var sinon = require('sinon')

describe("verify ID token", function() {
    it("should give an error in the callback", function(done){
        var verifyIdToken = sinon.stub(oauth.client, 'verifyIdToken')
        var error = new Error('an error has occured!')
        verifyIdToken.yields(error, null);
        var callback = sinon.spy();
      
        oauth.verifyIdToken('abcd', callback);
      
        verifyIdToken.restore();
        sinon.assert.calledWith(callback, error, null);
        done()
    });
    it("should give the payload in the callback", function(done){
        var verifyIdToken = sinon.stub(oauth.client, 'verifyIdToken')
        var MockLoginObject = {
            getPayload:function(){
                return {success: 1};
            }
        }
        
        verifyIdToken.yields(null, MockLoginObject);
        var callback = sinon.spy();
      
        oauth.verifyIdToken('abcd', callback);
      
        verifyIdToken.restore();
        sinon.assert.calledWith(callback, null, MockLoginObject.getPayload());
        done()
    });
})