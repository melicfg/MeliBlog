import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { users } from '../users.model';
import { User } from '../interfaces/users.interfaces';
import { stringLength } from '@firebase/util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { 

    this.afAuth.authState.subscribe((User) => {
      if(User) {
        this.userData = User;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
    }
     SignIn(email: string, password: string) {
      return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        this.afAuth.authState.subscribe((user) =>{
          if(user) {
            this.router.navigate(['home']);
          }  
        });
      })
      .catch((error) => {
        window.alert(error.message)
      });
      }
    
      SignUp(email:string, password:string){
        return this.afAuth
          .createUserWithEmailAndPassword(email,password)
          .then((result) => {
            console.log("hola1")
            this.SendVerificationMail();
            this.SetUserData(result.user);
          })
          .catch((error)=>{
            window.alert(error.message);
          });
      }
      SendVerificationMail() {
        console.log("hola")
        return this.afAuth.currentUser
        .then((u:any) => u.sendEmailVerification())
        .then(() => {
          this.router.navigate(['verify-email-address'])
        });
      }

      get isLoggedInn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null && user.email.Verified !== false?true:false;
      }

      SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
          `users/${user.uid}`
        );
        const userData: User = {
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
          merge: true,
        });
      }
      SignOut(){
        return this.afAuth.signOut().then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['login'])
          window.location.reload()
        })
      }
}
