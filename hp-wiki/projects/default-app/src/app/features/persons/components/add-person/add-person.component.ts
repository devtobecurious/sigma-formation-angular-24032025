import { Component, inject, viewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { initialValue, Person } from '../../models';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, pairwise } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'sig-add-person',
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class AddPersonComponent {


//#region ReactiveForm
private readonly formBuilder = inject(FormBuilder)
rxAddForm = this.formBuilder.nonNullable.group({
  name: ['', [Validators.required, Validators.minLength(1)]],
  age: [0, [Validators.minLength(1)]],
  medical: this.formBuilder.group({

  })
})

private watchForm = this.rxAddForm.valueChanges
.pipe(
  debounceTime(500),
  distinctUntilChanged(),
  pairwise(),
  takeUntilDestroyed()
)
//#endregion

ngOnInit(): void {
  
  this.watchForm.subscribe({
    next: item => console.info(item[0].age !== item[1].age)
  })
}

//#region Properties
get isNameValid(): boolean | undefined {
  return this.rxAddForm.get('name')?.valid
}
//#endregion

//#region  FormsModule
  item = initialValue
  private readonly http = inject(HttpClient)
  addForm = viewChild.required<NgForm>('addForm')
  //#endregion

  saveReactive(): void {
  
    const item = this.rxAddForm.value as Person
    //this.rxAddForm.patchValue({name: ''})
  }

  saveTdf(): void {
    //if(this.addForm().)

    this.http.post<Person>('url/person', this.item).subscribe({
      next: result => console.info('ajout reussi', result),
      complete: () => console.info('fin requete assurément')
    })
  }
}

