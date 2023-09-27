import { Component } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  employeesList: Employee[] = [
    {id: 1, name: "John", lastName: "Smith", sex: "Male", salary: 24000},
    {id: 2, name: "Mary", lastName: "Jane", sex: "Female", salary: 25000},
    {id: 3, name: "Rod", lastName: "Stewe", sex: "Male", salary: 22500},
    {id: 4, name: "Meredith", lastName: "Crank", sex: "Female", salary: 21000},
    {id: 5, name: "Creed", lastName: "Rocks", sex: "Male", salary: 19000}
  ]

  filter: string = 'all'

  constructor() {

  }

  countAll() {
    return this.employeesList.length
  }

  countMales() {
    return this.employeesList.filter(employee => employee.sex === "Male").length
  }

  countFemales() {
    return this.employeesList.filter(employee => employee.sex === "Female").length
  }
}
