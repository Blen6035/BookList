import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController, IonItemSliding } from '@ionic/angular';
import { Book } from './book';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  bookList: AngularFireList<Book>;
  books: Observable<any[ ]>;

  constructor( 
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController, 
    public af: AngularFireDatabase,
    private splashScreen: SplashScreen) { 
      this.bookList = this.af.list('/books');
      this.books = this.bookList.valueChanges(); 
      this.splashScreen.show();
      /*this.splashScreen.hide();*/

   }

   async addItem(){
    let addItem = await this.alertCtrl.create({
      header: 'Add a Book',
      message: 'Please enter Book Information. Enter in Book Title - Author Name format',
      inputs: [{
         name: 'title',
         type: 'text'
      }],
      buttons:[{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Add Book',
        handler: data => {
          let newBookRef = this.bookList.push(
            { id: '', title: data.title, status: 'open' }
            );
            newBookRef.update( { id: newBookRef.key } );
            toast.present();
          
        }
      }]
    })

    let toast = await this.toastCtrl.create({
      message: "Book Added!",
      duration: 2000,
      showCloseButton: false,
      color: 'success'
    });

    await addItem.present();
  }

  removeBook(slidingItem: IonItemSliding, book: Book) {
    this.bookList.remove( book.id );
  }

  ngOnInit() {
  }

}
