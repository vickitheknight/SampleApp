import { Component, OnInit } from '@angular/core';
import { RepositaryService } from './../repositary.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-produts-page',
  templateUrl: './produts-page.component.html',
  styleUrls: ['./produts-page.component.css']
})
export class ProdutsPageComponent implements OnInit {
  productShow: any;
  isFav: any;
  post: any;
  constructor(private service: RepositaryService, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
 
    this.service.getData().subscribe(data => {
      console.log("sucess", data)
      this.productShow = data;
    })


  }
  edit(data) {
    this.router.navigate(["addproduct/" + data._id])
  }
  addfav(data) {
var fav=false;
    if (data.isFav == undefined || data.isFav == false) {
      fav = true
    } else {
      fav = false
    }
    console.log("test", data, fav)
    this.post = {
      id: data._id,
      "productName": data.name,
      "productPrice": data.price,
      "productDescription": data.description,
      "isFav": fav,
    }
    this.service.postData1("editProduct", this.post).subscribe(data => {
      let results: any
      results = data;
      console.log("sucess added product", results.message)
      if (results.resCode == 200) {
        this.ngOnInit();
        if(fav){
          alert("Scussfully Added into favorite");
        }
      } else {
        alert("failed");
      }

    })
  }

}
