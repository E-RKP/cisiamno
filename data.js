class ContoBancario {
constructor(name, surname, saldo){

  this.nome = name
  this.cognome = surname
  this.saldo = saldo
  this.movimenti = []
}

deposita(cifra){
  this.saldo = this.saldo+cifra
  this.movimenti.push('+'+cifra)
}

preleva(cifra){

  if (cifra > this.saldo){
    console.log('Saldo non sufficente')
    return;
  }
  
  this.saldo = this.saldo-cifra
  this.movimenti.push('-'+cifra)
  
}

statoConto(){
  console.log(this.saldo)
}

}

let utente1 = new ContoBancario('Mario', 'Rossi', 0)
utente1.deposita(100)
utente1.preleva(100)
utente1.deposita(4000)
console.log(utente1)
