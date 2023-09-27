export class Employee {
    id: number
    name: string
    lastName: string
    sex: string
    salary: number

    constructor(id: number, name: string, lastName: string, sex: string, salary: number){
        this.id = id
        this.name = name
        this.lastName = lastName
        this.sex = sex
        this.salary = salary
    }
}