module.exports = function(application){
    application.get('/chat',function(request,response){
        application.app.controllers.chat.iniciaChat(application,request,response);
        
    });

    application.post('/chat',function(request,response){
        application.app.controllers.chat.iniciaChat(application,request,response);
    });
}