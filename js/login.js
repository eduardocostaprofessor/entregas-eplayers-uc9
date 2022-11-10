//quando a página estiver carregada por completo
$(document).ready(function(){
    // $("#email").val("Eduardo Costa")

    // $("button").click(function(){
    //     alert('Olá, botão clicado');        
    // })


    $("#signin").click( function(){
        // let email = document.getElementById("email").value;
        // let senha = document.getElementById("senha").value;
        let email = $("#email").val();
        let senha = $("#senha").val();

        console.log( podeCadastrar(email, senha) );

        if( podeCadastrar(email, senha) ) {
            alert("Preenchido corretamente")
        } else {
            alert("Preencher todos os campos")
        }

    } )



    function podeCadastrar(e, s) {
        if( e == "" || s == "" ) {//sem preencher
            return false;//avisa que não está tudo preenchido
        } else {
            return true;//está tudo preenchido
        }
    }
});// fim do jQuery Ready




