import { Component, OnInit } from '@angular/core';
// import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RepositaryService} from './../repositary.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prod_status = "Add";
  functionType:any;
  post:any;
  pic:any="./test"
  objId:any;
  constructor(private service:RepositaryService,private http: HttpClient,private eservice:RepositaryService,private router: Router,private route: ActivatedRoute) { }
  tempvalue: any = [{ productName: "", productPrice: "", productDescription: "", productFilePath: "", productFileName: "", productFileExtention: "", }]
  ngOnInit(): void {

    let path = this.route.snapshot.url;
    console.log("path",path)
    if(path.length==2){
      this.prod_status = "Edit";
      this.functionType="editProduct"
      this.service.getData1(path[1].path).subscribe(data=>{
        console.log("sucess",data);
        let res:any
        res=data
        this.objId=path[1].path,
        this.tempvalue.productName=res.results.name;
        this.tempvalue.productPrice=res.results.price;
        this.tempvalue.productDescription=res.results.description;
        this.tempvalue.productFilePath=res.results.image;
      })
    }
    else{
      this.prod_status = "Add";
      this.functionType="addProduct"
    }
    console.log("path",path.length,  this.functionType)
  }

  uploadFile(event) {

    this.tempvalue.productFileName = event.target.files[0];
    // this.tempvalue.productFileName
    // this.tempvalue.productFileExtention
  
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    reader.onload =  (e: any)=> {
      // $('#photoImgId').removeAttr("hidden");
      // $('#photoImgId').attr('src', e.target.result);
      console.log("e.target.result",e.target.result)
      this.pic=e.target.result
    }

    console.log("this.tempvalue", reader.result,event.target.resil)
  }
  upload() {
    const FormD = new FormData();
    let baseurl = "http://localhost:3100/";
    FormD.append("image", this.tempvalue.productFileName, this.tempvalue.productFileName.name)
    console.log("FormD", FormD)
    this.http.post(baseurl, FormD)
      .subscribe(res => {
        console.log("res", res)
      }
      ,er => {
        console.log("res", er)
      })
      
  }

  addProduct(){
    this.post={
      id:this.objId,
      "productName":this.tempvalue.productName,
      "productPrice":this.tempvalue.productPrice,
      "productDescription":this.tempvalue.productDescription,
      "productPath":this.tempvalue.productFilePath,
      
    }
    this.eservice.postData1(this.functionType,this.post).subscribe(data=>{
      let results:any
      results=data;
      console.log("sucess added product",results.message)
      if(results.resCode==200){
        alert("added product successfull");
      }else{
        alert("added product failed");
      }

    })
  }
}
