authFormLog.onsubmit = function (event) {
    event.preventDefault()
    if (authFormLog.submitAuthFormLog.innerHTML == 'Acessar') {
      firebase.auth().signInWithEmailAndPassword(authFormLog.emailLog.value, authFormLog.passwordLog.value).catch(function (error) {
        console.log('Falha no acesso')
        console.log(error)
      })
    }
  }
  authFormCad.onsubmit = function (event) {
    event.preventDefault()
    if (authFormCad.submitAuthFormCad.innerHTML == 'Cadastrar') {
      firebase.auth().createUserWithEmailAndPassword(authFormCad.emailCad.value, authFormCad.passwordCad.value).catch(function (error) {
        console.log('Falha no cadastro')
        console.log(error)
      })
    }
  }
  
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('Usuário Autenticado')
      console.log(user)
    } else {
      console.log('Usuário Não Autenticado')
    }
  })
  
  
  // Função que permite ao usuário sair da conta dele
  
  firebase.auth().signOut().catch(function (error) {
    console.log('Falha ao sair da conta')
    console.log(error)
  })