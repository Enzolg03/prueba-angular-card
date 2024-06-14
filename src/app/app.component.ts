import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { CardFormComponent } from './components/card-form/card-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,CardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-crud-card';
}
