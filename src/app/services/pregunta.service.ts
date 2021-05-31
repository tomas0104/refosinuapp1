import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { pregunta } from '../models/preguntas.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private preguntaCollection: AngularFirestoreCollection<pregunta>;
  private pregunta: Observable<pregunta[]>;

  constructor(db: AngularFirestore) {
    this.preguntaCollection = db.collection<pregunta>('pregunta');
    this.pregunta = this.preguntaCollection.snapshotChanges().pipe(map(
      actions =>{
       return actions.map( a =>{
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, ...data}
       });
      }
    ));
   }

  getPreguntas(){
    return this.pregunta; 
  }

  getPregunta(id:string){
    return this.preguntaCollection.doc<pregunta>(id).valueChanges();
  }

  addPregunta(pre: pregunta){
    return this.preguntaCollection.add(pre);
  }

  upDatePregunta(pregunta: pregunta, id:string ){
    return this.preguntaCollection.doc(id).update(pregunta);
  }

  removePregunta(id:string){
    return this.preguntaCollection.doc(id).delete();
  }
}
