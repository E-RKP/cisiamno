class ContoBancario {
constructor(name, surname, saldo){

  this.nome = name
  this.cognome = surname
  this.saldo = saldo
}

deposita(cifra){
  this.saldo = this.saldo+cifra
  return this.saldo;
}

preleva(cifra){

  if (cifra > this.saldo){
    console.log('Saldo non sufficente')
    return;
  }
  
  this.saldo = this.saldo-cifra
  return this.saldo;
}

statoConto(){
  console.log(this.saldo)
}
}

