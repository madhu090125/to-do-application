import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,MatTableModule,MatIconModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-application';

  value = "";
  displayedColumns = ["Task","Action"];
  tasks: { Task: string ,done:boolean}[] = [];
  datasource = new MatTableDataSource(this.tasks);
  onClickAdd(value:string){
    if(value.trim()){
      this.tasks.push({Task:value,done:false});
      this.datasource.data = this.tasks;
      console.log(this.tasks);
    }
    this.value ='';
  }

  onclickDone(element:any){
    element.done = !element.done;
    console.log(element.done);
  }

  onClickClose(element:any){
    console.log(element);
    const index = this.tasks.indexOf(element);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.datasource.data = this.tasks;
    }
    console.log(this.tasks);

  }
  
  
}
