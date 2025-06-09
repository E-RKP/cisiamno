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


class coglione extends ContoBancario{
  constructor (name, surname, saldo, siono){
    super(name, surname, saldo)

    if (siono === true){
      this.coglione = 'lo è'
    }else{
      this.coglione = 'non lo è'
    }
    
  }

}

let utente2 = new coglione ('mario', 'rossi', 0, false)
console.log(utente2)


let persona = {
  
  nome: 'Mario',
  cognome: 'rossi',
  età: 100,
  saluta: function(){
    return `Ciao mi chiamo ${this.nome} ${this.cognome} e ho ${this.età} anni`
  }
}

console.log(persona.saluta())
function aggiungiEtà(oggetto){
  oggetto.età = oggetto.età+1
}
aggiungiEtà(persona);
console.log(persona.età)

let carello = {
  prodotti: [

    {
      nome: 'yogurt',
      quantità: 10,
      prezzo: 0.99
    },

    {
      nome: 'salame',
      quantità: 1,
      prezzo: 5.99
    },

    {
      nome: 'maionese',
      quantità: 24,
      prezzo: 1.69
    },


    {
      nome: 'limone',
      quantità: 100,
      prezzo: 0.35
    },


    {
      nome: 'acqua',
      quantità: 314,
      prezzo: 0.45
    },
  ],

  aggiungiProdotto: function(prodotto){
    for (i=0; i<carello.prodotti.length;i++){
      if (carello.prodotti[i].nome === prodotto){
        return;
      }
    }
    carello.prodotti.push({
      nome: prodotto,
      quantità: 1,
      prezzo: 'non ancora disponibile'
    })
  },

  rimuoviprodotto: function(prodotto){
    for (i=0; i<carello.prodotti.length;i++){
      if (carello.prodotti[i].nome === prodotto){
        carello.prodotti.splice(i,1)
      }
    }
  },

  veroCarello: function(array){

    let totale = 0
    for (i=0; i<carello.prodotti.length;i++){
      for (j=0; j<array.length;j++){
        if (array[j] === carello.prodotti[i].nome){
          totale = totale+carello.prodotti[i].prezzo
        }

      }
    }
    
    return totale;
  }
}

carello.aggiungiProdotto('mozzarella')
carello.rimuoviprodotto('limone')
console.log(carello.prodotti)
console.log(carello.veroCarello(['maionese', 'salame', 'maionese']))