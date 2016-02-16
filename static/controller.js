var exampleView = (function() {
    return {
        helloWorld: helloWorld,
        setMensagem: setMensagem,
    }

    var _mensagem;

    function _setMensagem(mensagem) {
        _mensagem = mensagem;
    }

    function helloWorld() {
        console.log(_mensagem);
    }

})();
