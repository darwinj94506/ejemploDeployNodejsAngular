import { Component,OnInit } from '@angular/core';
import {AppService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  datos=[];
  datos1="";
  constructor(private appService : AppService){}

  ngOnInit(){
    // console.log("on init");
    // this.appService.getDatos().subscribe(res=>{
    //   this.datos=res;
    //   this.datos1=this.datos[0].id;
    //   console.log(res);
    // },error=>{
    //   console.log(error);
    // })

  }
}
