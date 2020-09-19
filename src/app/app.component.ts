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
  editandoTodo: Todo = null;
  
  salvar(){
    if(this.editandoTodo){
      this.editandoTodo.descricao=this.descricao;
    }
    else{
      const d = new Todo(this.descricao);
      this.abertas.push(d);
    }
    this.editandoTodo=null;
    this.descricao=null;
    
  }
  executar(todo: Todo){
    let indice = this.abertas.indexOf(todo);
    this.abertas.splice(indice,1);
    this.concluidas.push(todo);
  }
  
  excluir(todo: Todo){
    if(this.editandoTodo === todo){
      alert('Impossivel excluir durante a execução!');
    }else{
      if(confirm('Tarefa ainda aberta, tem certeza que deseja excluir?')){
        const a = this.abertas.indexOf(todo);
        this.abertas.splice(a,1);
      }
    }
  }

  excluirConcluidas(todo: Todo){
    if(confirm('Você está prestes a deletar uma tarefa concluida, tem certeza?')){
      const c = this.concluidas.indexOf(todo);
      this.concluidas.splice(c,1);
    }
  }

  cancelar(): void{
    this.editandoTodo=null;
    this.descricao=null;
  }

  editar(todo: Todo){
    this.editandoTodo=todo;
    this.descricao=todo.descricao;
  }
}
