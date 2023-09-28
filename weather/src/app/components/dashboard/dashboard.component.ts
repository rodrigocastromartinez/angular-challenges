import { Component } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
// Initialization for ES Users
import {
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  city = ''
  loading = false
  query = false
  temperature = 0
  humidity = 0
  conditions = ''

  constructor(private _weatherService: WeatherService) {}
  
  ngOnInit() {
    initTE({ Ripple })
  }

  getWeather() {
    this.query = true
    this.loading = true
    console.log(this.city)

    this._weatherService.getWeather(this.city).subscribe(data => {
      this.loading = false
      this.temperature = +(data.main.temp - 273).toFixed(1)
      this.humidity = data.main.humidity
      this.conditions = data.weather[0].description
      console.log(data)
    })
  }
}
