var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

//������ �����ϰ� �����մϴ�.

http.createServer(function(request,response){
    //EJSPage.ejs ������ �н��ϴ�.
    fs.readFile('EJSPage.ejs','utf8',function(error,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data,{
            name : 'RiniIanTta !!!!!',
            description:'Hello EJS With Node is ...!'
          }));
    });
  }).listen(52273,function(){
      console.log('Server Running at http://127.0.0.1:52273');
  });