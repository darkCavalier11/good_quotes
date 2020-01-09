var randomQuote = (callback)=>{
    var request = require("request");
    request({url: 'https://api.quotable.io/random', json: true}, (err, res)=>{
    callback(res.body.content, res.body.author)
})
}
module.exports = randomQuote