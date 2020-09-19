import { Component } from '@angular/core';
import { Todo } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  descricao=null;
  abertas=[];
  concluidas=[];
  editando=null;
  

  salvar(){
    if(this.editando){

      this.editando.descricao=this.descricao;
    }
    else{
      let d = new Todo(this.descricao);

      this.abertas.push(d);
    }
    this.editando=null;
    this.descricao=null;
    
  }
  executar(todo: Todo){
    let indice = this.abertas.indexOf(todo);
    this.abertas.splice(indice,1);
    this.concluidas.push(todo);
  }
  
  excluir(todo: Todo){
    if(this.editando == todo){
      alert('Impossivel excluir durante a execução!');
    }

    else{
      if(confirm('Tarefa ainda aberta, tem certeza que deseja excluir?')){

        let a = this.abertas.indexOf(todo);

        this.abertas.splice(a,1);
      }
    }
  }

  excluirConcluidas(todo: Todo){
    if(confirm('Você está prestes a deletar uma tarefa concluida, tem certeza?')){
      let c = this.concluidas.indexOf(todo);

      this.concluidas.splice(c,1);
    }
  }
  editar(todo: Todo){
    this.editando=todo;

    this.descricao=todo.descricao;
  }
  cancelar(){
    this.editando=null;
    this.descricao=null;
    
  }
}
