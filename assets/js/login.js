function logar() {
    var code = document.getElementById('code').value;
    var password = document.getElementById('password').value;
    var mensagemErro = document.getElementById('mensagemErro');

    if (code == "admin" && password == "admin"){
        location.href = "./pages/home.html"
    } else {
        mensagemErro.style.display = 'block';
    }
}