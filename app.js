// importa as configurações do servidor
var app = require('./config/server');

//parametrizar a porta de escuta
var server = app.listen(8000,function(){
    console.log('sevidor ON');
});

/**Isso significa que tanto requisiçoes
 * http quanto requisiçoes webSocket serão
 * feitas na porta 8000. O servidor responde a
 * 2 protocolos diferentes na msm porta
 * É preciso disponibilizar o socket do lado
 * do cliente tbm, a partir da tag
 * <script src="/socket.io/socket.io.js"></script>
 * inserida no final do html
 */
var io = require('socket.io').listen(server);
app.set('io',io); //faz io virar uma variável global para ser usada no controller

io.on('connection',function(socket){

    console.log('Usuario conectou');
    
    socket.on('disconnect',function(){
        console.log('Usuario desconectou');
    });
});//esta escutando eventos de conecçao

/**A função emit funciona juntamente com a funçao on
 * para utiliza-la é preciso passar o nome do evento
 * que esta escutando (quem escuta é on). O emit faz
 * um pedido para executar alguma açao e o on escuta 
 * esse pedido.
 */