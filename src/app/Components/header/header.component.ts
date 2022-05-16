import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  constructor(private cartService:CartService, private route:Router) { }

  ngOnInit(): void {

  this.cartService.getProducts()
  .subscribe(res=>{
    this.totalItem = res.length;
  })
  }
  showorder(){
    this.route.navigate(['/cart']);
  }
}
