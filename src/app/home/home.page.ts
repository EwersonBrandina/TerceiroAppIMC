import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num1 : string
  num2 : string
  escolha : string
  saida : string
  saida2 : string
  img : any = "assets/icon/favicon.png"
  constructor() {}


calcular(){
  var n1 = parseFloat(this.num1)
  var n2 = parseFloat(this.num2)
  var resultado = (n1/(n2**2)).toFixed(2)
  if (this.escolha == "Homem"){
    if (Number(resultado) <= 19){
      this.saida = resultado.toString()
      this.saida2 = "Abaixo do Peso"
      this.img = "assets/icon/favicon.png"
    }
    if (Number(resultado) > 19 && Number(resultado) < 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Peso Ideal"
      this.img = "assets/icon/favicon.png"
    }
    if (Number(resultado) > 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Acima do Peso"
      this.img = "assets/imagem_alerta.png"
    }
  }
  else{
    if (Number(resultado) <= 19){
      this.saida = resultado.toString()
      this.saida2 = "Abaixo do Peso"
      this.img = "assets/icon/favicon.png"
    }
    if (Number(resultado) > 19 && Number(resultado) < 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Peso Ideal"
      this.img = "assets/icon/favicon.png"
    }
    if (Number(resultado) > 27.3){
      this.saida = resultado.toString()
      this.saida2 = "Acima do Peso"
      this.img = "assets/imagem_alerta.png"
    }

  }
}
}
