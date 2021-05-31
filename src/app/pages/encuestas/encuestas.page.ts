import { Component, OnInit } from '@angular/core';
import { ServiceTodoService } from '../../services/service-todo.service';
import { encuesta } from '../../models/encuesta.interface';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})
export class EncuestasPage implements OnInit {

  encuestas: encuesta[];

  constructor(private todoService: ServiceTodoService) { }

  ngOnInit() {
    this.todoService.getEncuestas().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.encuestas = todos;
    })
  }

  eliminar(id:string){
    this.todoService.removeEncuesta(id);
  }

}
