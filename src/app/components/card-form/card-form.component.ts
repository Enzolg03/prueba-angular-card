import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  private fb = inject(FormBuilder)
  
  form = this.fb.group({
    name: ['',[Validators.required]],
    number: ['',[Validators.required]],
    type: ['',[Validators.required]],
    cvv: ['',[Validators.required]]
  })

  create(){
    console.log(this.form.value);
  }
}
