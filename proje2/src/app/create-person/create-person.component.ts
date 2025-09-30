import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { PersonelService } from '../service/personel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-person',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.scss'
})
export class CreatePersonComponent {
  private fb = inject(FormBuilder);
  private personelService = inject(PersonelService);
  private toastr = inject(ToastrService);

  createForm = this.fb.nonNullable.group({
    firstname: ['', [Validators.required, Validators.minLength(5)]],
    lastname: '',
    email: '',
  });

  create() {
    const firstname = this.createForm.controls['firstname'].value;
    const lastname = this.createForm.controls['lastname'].value;
    const email = this.createForm.controls['email'].value;
    // this.createForm.value özelliği hazır model objesini verir.
    this.personelService.savePerson(this.createForm.value).subscribe({
      next: (result) => {
        this.createForm.reset();
        //this.createForm.setValue({firstname:'', lastname:'', email:''});
        //this.createForm.patchValue({firstname:''});
        this.toastr.info('People Created.');
      }
    });

  }
}
