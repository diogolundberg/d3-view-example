var exampleView = (function() {
    return {
        init: init,
        helloWorld: helloWorld,
        setMensagem: setMensagem,
    }

    var _mensagem;

    function setMensagem(mensagem) {
        _mensagem = mensagem;
    }

    function helloWorld() {
        console.log(_mensagem);
    }


    function init(argument) {
        $('#show').click(function(event) {
            $('img').show();
        });

        $('#hide').click(function(event) {
            $('img').hide();
        });
    }

})();
