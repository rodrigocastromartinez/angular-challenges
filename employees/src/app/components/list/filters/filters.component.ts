import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Input() all: number
  @Input() males: number
  @Input() females: number
  @Output() filterChange = new EventEmitter<string>()
  
  filter = 'all'

  constructor() {
    this.all = 0
    this.males = 0
    this.females = 0
  }

  onFilterChange() {
    this.filterChange.emit(this.filter)
  }
}
