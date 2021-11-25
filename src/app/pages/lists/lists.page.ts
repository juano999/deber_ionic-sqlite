import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TasksService } from 'src/app/services/database2.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  task: Task = {title: '', description: ''};

  constructor( 
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.task = this.tasksService.getTask(+id);
    }
  }

  saveTask() {
    this.tasksService.saveTask(this.task);
  }

}
