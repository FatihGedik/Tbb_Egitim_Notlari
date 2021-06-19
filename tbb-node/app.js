const app = require('http').createServer(function(req,res){

        res.write('Naber ?')
        res.end()

});

app.listen(9091,() => {
    console.log("Demo");
});