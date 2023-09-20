import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  bmi: number
  message: string

  constructor(private route: ActivatedRoute, private router: Router) {
    this.bmi = +route.snapshot.paramMap.get('bmi')!

    if(this.bmi < 18.5) {
      this.message = 'UNDERWEIGHT'
    } else if (this.bmi < 24.9) {
      this.message = 'NORMAL'
    } else {
      this.message = 'OVERWEIGHT'
    }
  }

  goBack(){
    this.router.navigate([''])
  }
}