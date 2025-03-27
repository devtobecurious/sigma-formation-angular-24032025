import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sig-edit-person',
  imports: [],
  templateUrl: './edit-person.component.html',
  styleUrl: './edit-person.component.css'
})
export class EditPersonComponent implements OnInit {
  
  private readonly activeRoute = inject(ActivatedRoute)
  private readonly router = inject(Router)

  ngOnInit(): void {
    this.activeRoute.params.subscribe({
      next: params => console.info(params['id'])
    })
  }

  save(): void {
    this.router.navigate(['persons'])
  }

  get id(): number {
    return +this.activeRoute.snapshot.params['id']
  }
}
