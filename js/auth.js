//Informar se já está logado ou não
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log('Usuário Autenticado')
    console.log(user)
  } else {
    console.log('Usuário Não Autenticado')
  }
})

authFormLog.onsubmit = function (event) {
  event.preventDefault()
  if (authFormLog.submitAuthFormLog.innerHTML == 'Entrar') {
    firebase.auth().signInWithEmailAndPassword(authFormLog.emailLog.value, authFormLog.senhaLog.value)
      .then(function () {
        window.location.href = "./dashboard.html";
      })
      .catch(function (error) {
        console.log('Falha no acesso')
        console.log(error)
      }
      )
  }
}
authFormCad.onsubmit = function (event) {
  event.preventDefault()
  if (authFormCad.submitAuthFormCad.innerHTML == 'Cadastrar') {
    firebase.auth().createUserWithEmailAndPassword(authFormCad.email.value, authFormCad.senha.value)
      .then(function (result) {
        return result.user.updateProfile({
          displayName: document.getElementById("nome").value,
        })
      }).then(function () {
        window.location.href = "./dashboard.html";
      })
      .catch(function (error) {
        console.log('Falha no cadastro')
        console.log(error)
      })
  }
}

// Autenticar com Google
//authGoogleButton.addEventListener('click', function () {
  // Providers
//  var provider = new firebase.auth.GoogleAuthProvider();
//  signIn(provider);
//});

// Autenticar com Facebook
//authFacebookButton.addEventListener('click', function () {
  // Providers
//  var provider = new firebase.auth.FacebookAuthProvider();
//  signIn(provider);
//});

//Função de logar com autenticador
//function signIn(provider) {
//  firebase.auth()
//    .signInWithPopup(provider)
//    .then(function (result) {
//      console.log(result);
//      var token = result.credential.accessToken;
//      displayName.innerText = 'Bem vindo, ' + result.user.displayName;
//    }).catch(function (error) {
//      console.log(error);
//      alert('Falha na autenticação');
//    });
//}

// Função que permite ao usuário sair da conta dele
//logOutButton.addEventListener('click', function () {
//  firebase
//    .auth()
//    .signOut()
//    .then(function () {
//      displayName.innerText = 'Você não está autenticado';
//      alert('Você se deslogou');
//    }, function (error) {
//      console.error(error);
//    });
//});