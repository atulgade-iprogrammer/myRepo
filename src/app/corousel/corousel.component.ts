import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';

@Component({
  selector: 'app-corousel',
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.css']
})
export class CorouselComponent implements OnInit {


  data:any;
  constructor(private service:MovieDataService) { }
  ngOnInit(): void {
  
  }
isActive(num:number){
  if(num==0) return true;
  return false;
};

}
