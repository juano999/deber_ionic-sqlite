// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { IonicModule } from '@ionic/angular';

// import { HomePage } from './home.page';

// describe('HomePage', () => {
//   let component: HomePage;
//   let fixture: ComponentFixture<HomePage>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomePage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(HomePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { Component } from '@angular/core';
import { Task } from '../model/task';
import { TasksService } from '../services/database2.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Task[] = [];

  constructor(
    private taskService: TasksService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.taskService.getTasks().then(
      data => this.tasks = data
    );
  }

  goEditTask(id: number) {
    this.router.navigateByUrl(`/edit${id != undefined ? '/' + id : ''}`);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).then(
      () => this.taskService.getTasks().then(
        data => this.tasks = data
      )
    );
    
  }

  async presentAlertConfirm(id: number, title: string) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Estás seguro que quieres borrar la tarea <strong> ${title}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteTask(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
