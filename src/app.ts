var fs = require('fs');

/**
 * Colección que revista usuarios
 *//*
const users = {
  username: String,
  password: String
}

class Register {
  constructor(protected username: string, protected password: string){}

  getUser(){
    return this.username;
  }

  getPasswrod(){
    return this.password;
  }

  emailPassword(email: string, password: string){
    users.forEach(element => {
      
    });
  }
}*/
/*// Log in as Joe
const joeCredentials = Realm.Credentials.emailPassword("joe@example.com", "passw0rd")
const joe = await app.logIn(joeCredentials);
// The active user is now Joe
assert(joe.id === app.currentUser.id);

// Log in as Emma
const emmaCredentials = Realm.Credentials.emailPassword("emma@example.com", "pa55word")
const emma = await app.logIn(emmaCredentials);
// The active user is now Emma, but Joe is still logged in
assert(emma.id === app.currentUser.id);
*/

var msg = '';
console.log(`BIENVENIDO AL PROGRAMA DE PROCESO DE NOTAS!!`)
console.log(`Introduce el usuario: `)



fs.writeFile('helloworld.txt', 'Hello World!', () => {
  console.log('File helloworld.txt has just been created');
});


/*
fs.readFile('helloworld.txt', (err, data) => {
  if(err) {
    console.log(`No se ha podido leer el fichero`, err) 
  } else {
    console.log(data.toString())
  }
});
*/
