import { Component, Injectable, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({ providedIn: 'root' })
export class AppComponent implements OnInit {


constructor(private weatherService:WeatherService, private toastr:ToastrService){}
  weatherData?:WeatherData;
  cityName:string='London';

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
    this.cityName='';
  }
  onSubmit(){
    this.getWeatherData(this.cityName)
    this.cityName='';
  }

  private getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      
      next :(response)=>{
        if(response){
          this.weatherData=response;
        let icon=response.weather[0].icon;
        let iconUrl="http://openweathermap.org/img/w/" + icon + ".png";
        console.log(iconUrl);
        console.log(iconUrl);
        console.log(icon);
        console.log(response);
        }
        else{
          this.toastr.info('something wrong please try leater');
        }
        

      },
      
    });
    
    
    
    

  }
}
