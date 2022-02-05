
function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Methods', 'POST');
    request.send(JSON.stringify(body))

    }



function cadastraUsuario() {
    event.preventDefault()
    let url = "http://192.168.15.5:5000/test"
    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("tel").value
    let mensagem = document.getElementById("message").value
    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(mensagem)

    body = {
        "name": nome,
        "email": email,
        "telefone": telefone,
        "mensagem": mensagem
    }

    fazPost(url, body)
}