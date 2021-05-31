import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, MenuController ,LoadingController, ToastController } from '@ionic/angular';
import { ServiceTodoService } from '../../services/service-todo.service';
import { encuesta } from '../../models/encuesta.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crearencuesta',
  templateUrl: './crearencuesta.page.html',
  styleUrls: ['./crearencuesta.page.scss'],
})
export class CrearencuestaPage implements OnInit {

  encuesta = {} as encuesta;
  id:null;
  constructor( private todoService:ServiceTodoService,
               private db: AngularFirestore,
               private toastCtrl: ToastController,
               private nav:NavController,
               private route: ActivatedRoute,
               private loadingcontroller: LoadingController ) { }
 
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id){
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingcontroller.create({
      message: 'Cargando....'
    });
    await loading.present();

    this.todoService.getEncuesta(this.id).subscribe(todo => {
      loading.dismiss();;
      this.encuesta = todo;
    });
  }

  async crearEncuesta(){
    if(this.formValidation()){ 
      let loading = await this.loadingcontroller.create({
        message: 'Guardando...'
      });
      loading.present();
      try{
    await loading.present();
    if(this.id){
      //actualizar
      this.todoService.upDateEncuesta(this.encuesta, this.id).then(() =>{
        loading.dismiss();
        this.nav.navigateForward('/preguntas');
      });
    }else{
     //agregar
     const id=Math.random().toString(36).substring(2);
     await this.db.collection('encuesta').doc(id).set({
      id: id,
      titulo: this.encuesta.titulo,
      descripcion: this.encuesta.descripcion,
      fecha_inicio: this.encuesta.fecha_inicio,
      fecha_final: this.encuesta.fecha_final,
      estado: this.encuesta.estado,
    });
      console.log(this.id);
       loading.dismiss();
       this.nav.navigateForward('/preguntas');
    }
  }catch(e){
    this.showToast(e);
  }
  loading.dismiss();
  }
}
  formValidation(){
    if (!this.encuesta.titulo) {
      // show toast message
      this.showToast("Por favor digite el titulo");
      return false;
    }
    if (!this.encuesta.descripcion) {
      // show toast message
      this.showToast("Por favor digite descripcion");
      return false;
    }
    if (!this.encuesta.fecha_inicio) {
      // show toast message
      this.showToast("Por favor digite la fecha de inicio");
      return false;
    }
    if (!this.encuesta.fecha_final) {
      // show toast message
      this.showToast("Por favor digite la fecha final");
      return false;
    }
    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000
      })
      .then(toastData => toastData.present());
  }

}
