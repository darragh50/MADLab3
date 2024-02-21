import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

/*Data binding*/
export class AppComponent {
  title:string = 'my-first-app';
  name:string = 'Darragh';
  age:number = 20;
}
