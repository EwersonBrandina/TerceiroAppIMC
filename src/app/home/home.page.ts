import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Pessoa } from '../models/pessoa.model';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peso : string
  altura : string
  escolha : string
  saida : string
  saida2 : string
  img : any = "assets/icon/favicon.png"
  private pessoa : Pessoa
  //public pessoaForm : FormGroup
  //public arrayPessoa : any

  constructor(
    //private formBuilder : FormBuilder,
    private pessoaService : PessoasService
  ) {}


calcular(){
  var n1 = parseFloat(this.peso)
  var n2 = parseFloat(this.altura)
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
  this.pessoa = {
    id: Guid.createEmpty(),
    peso : this.peso,
    altura : this.altura,
    saida: this.saida.toString(),
    sexo : this.escolha,
    saida2 : this.saida2
  }
  this.pessoaService.inserir(this.pessoa)
  }

  //enviar(){
  //  if (this.pessoaForm.valid){
  //    this.pessoaService.inserir(this.pessoaForm.value)
  //  }
  //}

  ngOnInit(){
  //  this.pessoa = {id: Guid.createEmpty(), peso:"", altura:"", saida:""}
  //  this.pessoaForm = this.formBuilder.group({
  //    id: [this.pessoa.id],
  //    peso: [this.pessoa.peso, Validators.required],
  //    altura: [this.pessoa.altura, Validators.required],
  //    saida: [this.pessoa.saida, Validators.required]
  //  })
  //  this.pessoaService.listarTodos().then(arrayPessoa => {this.arrayPessoa = arrayPessoa})
  }
  
}

