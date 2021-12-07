function getUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let userLabel_1 = document.getElementById("profile__name")
      let userLabel_2 = document.getElementById("profile-main__name")
      userLabel_1.innerHTML = user.displayName
      userLabel_2.innerHTML = user.displayName
    } else {
      swal
        .fire({
          icon: "success",
          title: "Redirecionando para a tela de autenticação",
        })
        .then(() => {
          setTimeout(() => {
            window.location.replace("dashboard.html")
          }, 1000)
        })
    }
  })
}

window.onload = function () {
  getUser()
}
