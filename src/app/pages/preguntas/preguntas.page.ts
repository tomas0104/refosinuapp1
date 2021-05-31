import { Component, OnInit } from '@angular/core';
import { ServiceTodoService }  from '../../services/service-todo.service';
import { PreguntaService }  from '../../services/pregunta.service';
import { NavController, MenuController ,LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { encuesta } from '../../models/encuesta.interface';
import { ActivatedRoute } from '@angular/router';
import { pregunta } from '../../models/preguntas.interface';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

 
  encuestas:encuesta[];
  id = null;
  preguntasencuesta:any[];
  pre = {
    respuesta3:'' ,
    respuesta4:'' 
  } as pregunta;

  constructor(
    private todoService:ServiceTodoService,
    private preguntaservice: PreguntaService,
    private db: AngularFirestore,
    private toastCtrl: ToastController,
    private nav:NavController,
    private route: ActivatedRoute,
    private loadingcontroller: LoadingController
  ) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id){
      this.loadTodo();
    }
    this.todoEncuentas();
  }

  async loadTodo(){
    const loading = await this.loadingcontroller.create({
      message: 'Cargando....'
    });
    await loading.present();

    this.preguntaservice.getPregunta(this.id).subscribe(todo => {
      loading.dismiss();;
      this.pre = todo;
    });
  }
 
  todoEncuentas(){
    this.todoService.getEncuestas().subscribe( (res) =>{
      this.encuestas = res;
      console.log('Encuestas', res);
    });
  }

  async saveTodo() {
    if(this.formValidation()){ 
      let loading = await this.loadingcontroller.create({
        message: 'Guardando...'
      });
      loading.present();
      try{
    await loading.present();
     if (this.id) {
      this.preguntaservice.upDatePregunta(this.pre, this.id).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/');
      });
    } else {
      const id=Math.random().toString(36).substring(2);
     await this.db.collection('pregunta').doc(id).set({
      id: id,
      idencuesta: this.pre.idencuesta,
      pregunta1:  this.pre.pregunta1,
      respuesta1: this.pre.respuesta1,
      respuesta2: this.pre.respuesta2,
      respuesta3: this.pre.respuesta3,
      respuesta4: this.pre.respuesta4,
      tipop: this.pre.tipop,
    });
      console.log(this.id);
       loading.dismiss();
       this.pre.pregunta1='';
       this.pre.respuesta1='';
       this.pre.respuesta2='';
       this.pre.respuesta3='';
       this.pre.respuesta4='';
       this.todoPreguntas();
    }
  }catch(e){
    this.showToast(e);
  }
  loading.dismiss();
  }
  }

  async onRemoveTodo(idTodo:string) {
    this.preguntaservice.removePregunta(idTodo);
  }
 
  todoPreguntas(){
    this.db.collection('pregunta', ref => ref.where('idencuesta', '==', this.pre.idencuesta )
    .orderBy('pregunta1', 'desc')).valueChanges().subscribe( res =>{
      this.preguntasencuesta=res; 
    });
  }

  formValidation(){
    if (!this.pre.pregunta1) {
      // show toast message
      this.showToast("Por favor digite la pregunta");
      return false;
    }
    if (!this.pre.respuesta1) {
      // show toast message
      this.showToast("Por favor digite por lo menos la respuesta uno y dos");
      return false;
    }
    if (!this.pre.respuesta2) {
      // show toast message
      this.showToast("Por favor digite por lo menos la respuesta uno y dos");
      return false;
    }
    if (!this.pre.idencuesta) {
      // show toast message
      this.showToast("Por favor seleccione la encuesta");
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
