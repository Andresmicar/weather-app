import { Component, OnInit } from '@angular/core';
import { WeatherService} from './services/weather.service';
import { from } from 'rxjs';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  weather;
  
 constructor(private weatherService: WeatherService){

 }
  ngOnInit(){

  }
  getWeather(zipCode: string){
    this.weatherService.getWeather(zipCode)
    .subscribe(
      res => {
      console.log(res);
      this.weather = res},
      err => console.log(err)
    )
  }
    submitLocation(zipCode: HTMLInputElement){
      this.getWeather(zipCode.value);

      zipCode.value = '';
      zipCode.focus();
      
      return false;
    }
}
