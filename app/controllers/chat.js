module.exports.iniciaChat = function(application,request,response){
    var dataForm = request.body;
    // o dado nao sera exibido caso, no html, não esteja defina a propriedade name do input
    console.log(dataForm);
    request.assert('nome','Nome ou apelido é obrigatorio').notEmpty();
    
    var errors = request.validationErrors();
    if(errors){
        // console.log(errors);
        response.render('index',{validacao:errors});
        return;
    }
    
    response.render('chat');
}