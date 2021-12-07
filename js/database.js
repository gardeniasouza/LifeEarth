submitAuthFormCad.addEventListener('click', function (){
  create(nome.value, email.value, date.value, senha.value, senhaCheck.value);
});
function create(name, email, date, senha, senhaConf){
  var data = {
    name: name, 
    email: email,
    date: date,
    senha: senha,
    senhaConf: senhaConf
  };
  return firebase.database().ref().child('users').push(data);
}
