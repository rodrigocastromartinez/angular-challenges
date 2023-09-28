import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather?appid='
  key = '7afed3f6606a5dc540c51522d0860c88'

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.url}${this.key}&q=${city}`

    return this.http.get(url)
  }
}
