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
    //application.get recupera a variavel passada como parametro, definida em app com o .set
    application.get('io').emit('msgParaCliente',{nome:dataForm.nome,mensagem:' acabou de entrar'});

    response.render('chat',{dataForm:dataForm});
}