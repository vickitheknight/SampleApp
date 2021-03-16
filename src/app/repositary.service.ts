import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
   
import { Observable } from 'rxjs';  
// import 'rxjs/Rx';
import { map } from "rxjs/operators"; 
// import 'rxjs/add/operator/map';  
// import 'rxjs/add/operator/do';  

@Injectable({
  providedIn: 'root'
})
export class RepositaryService {

  constructor(private  http:HttpClient) { }

  postData(datas){
    return this.http.post('http://localhost:3100',datas)
    // .map((res:Response)=>res.json())
  }

  getData(){
    return this.http.get('http://localhost:3100/products')


    // .pipe(map (res=>{
    //   console.log("resultsAPI",res)
    //   return res.json()
    // }))

    // .pipe(map((response: any) =>{ response.json()}));

   
  }
  getData1(id){
    return this.http.get('http://localhost:3100/get/'+id)
    // .pipe(map (res=>{
    //   console.log("resultsAPI",res)
    //   return res.json()
    // }))

    // .pipe(map((response: any) =>{ response.json()}));
  }
  postData1(method,datas){
    return this.http.post('http://localhost:3100/'+method,datas)
    // .map((res:Response)=>res.json())
  }
}
