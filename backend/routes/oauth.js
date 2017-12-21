var express = require('express')
var router = express.Router()
var oauth = require('../oauth')
router.get('/idToken', function(req, res){
    oauth.verifyIdToken(req.query.tokenId, function(error, payload){
        if(error != null){
            res.send(error)
        } else{
            const user = oauth.getUserFromPayload(payload)
            res.send(user)
        }     
    })
})

module.exports = router; 
