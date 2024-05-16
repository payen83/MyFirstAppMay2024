import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waktu-solat',
  templateUrl: './waktu-solat.page.html',
  styleUrls: ['./waktu-solat.page.scss'],
})
export class WaktuSolatPage implements OnInit {
  month: string;
  year: number;
  dataSolat: any = {
    day: '',
    fajr: null,
    dhuhr: null,
    asr: null,
    hijri: null
  }

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    let data: any;
    this.getAPI().then((response: any) => {
      if(response){
        data = response;
        console.log(data);
        this.month = data.month;
        this.year = data.year;
        let currentIndex = 15;
        this.dataSolat = data.prayers[currentIndex];
      }
    })
  }

  convertTime(unixTime: number){
    let unix_timestamp = unixTime;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  getAPI(){
    let baseURL: string = 'https://api.waktusolat.app/v2/solat/SGR01';
    return new Promise((resolve, reject) => {
        this.httpClient.get(baseURL)
        .subscribe({
          next: ( response: any ) => { resolve( response ); },
          error: ( error: any ) => { 
            reject( error ); 
          }
        })
    });
  }

}
