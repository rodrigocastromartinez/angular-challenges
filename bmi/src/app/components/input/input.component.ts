import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  height = 160
  gender = ''
  weight = 50
  age = 30
  incomplete = false

  constructor(private router: Router) {}

  substractWeight() {
    if(this.weight === 0) return
    this.weight = this.weight - 1
  }

  substractAge() {
    if(this.age === 0) return
    this.age = this.age - 1
  }

  changeHeight(event: any) {
      this.height = event.target.value
  }

  setGender(gender: string) {
    this.gender = gender
  }

  calculateBmi() {
    if(this.gender === ''){
      this.incomplete = true

      return
    } 

    const bmi = this.weight / Math.pow(this.height/100, 2)

    this.incomplete = false

    this.router.navigate(['/result', bmi.toFixed(1)])
  }
}