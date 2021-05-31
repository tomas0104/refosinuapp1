import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { encuesta } from '../models/encuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceTodoService {

 
  private encuestaCollection: AngularFirestoreCollection<encuesta>;
  private encuesta: Observable<encuesta[]>;

  constructor(db: AngularFirestore) {
    this.encuestaCollection = db.collection<encuesta>('encuesta');
    this.encuesta = this.encuestaCollection.snapshotChanges().pipe(map(
      actions =>{
       return actions.map( a =>{
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, ...data}
       });
      }
    ));
   }

  getEncuestas(){
    return this.encuesta; 
  }

  getEncuesta(id:string){
    return this.encuestaCollection.doc<encuesta>(id).valueChanges();
  }

  addEncuestas(encuesta: encuesta){
    return this.encuestaCollection.add(encuesta);
  }

  upDateEncuesta(encuesta: encuesta, id:string ){
    return this.encuestaCollection.doc(id).update(encuesta);
  }

  removeEncuesta(id:string){
    return this.encuestaCollection.doc(id).delete();
  }

}
