module.exports = function(application){
    application.get('/chat',function(request,response){
        application.app.controllers.chat.chatGet(application,request,response);
        
    });

    application.post('/chat',function(request,response){
        application.app.controllers.chat.chatPost(application,request,response);
    });
}