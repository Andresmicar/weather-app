import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '07d27c985af75b77a8a6ebb4d7139e55';
  URI: string= '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/forecast?zip=,es&appid=${this.apiKey}&units=metric&q=`
   }
   getWeather(zipCode: string){
    return this.http.get(`${this.URI}${zipCode}`);
 }
}
