import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.css']
})
export class ProductRemoveComponent implements OnInit {

    product!: Product

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute

    ) {  }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id')
    this.productService.readById(id!).subscribe(product => {
      this.product = product
    })

  }
  deleteProduct(): void{
    this.productService.remove(`${this.product.id}`).subscribe(() => {
        this.productService.showMenssage('produto excluido com sucesso!')
        this.router.navigate(['/products'])
    })   }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
