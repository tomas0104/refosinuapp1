import { Component, OnInit } from '@angular/core';
import { ServiceTodoService } from '../../services/service-todo.service';
import { encuesta } from '../../models/encuesta.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})
export class EncuestasPage implements OnInit {

  encuestas: encuesta[];
  id = null;
  constructor(private todoService: ServiceTodoService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.todoService.getEncuestas().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.encuestas = todos;
    })
  }

  async eliminar(id:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar!',
      message: 'Estas seguro de eliminar esta encuesta!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            this.todoService.removeEncuesta(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
