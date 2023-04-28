import { Component, OnInit } from '@angular/core';
import { Coffee } from '../Coffee';
import { CoffeeService } from '../Coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Coffee[] = [];

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffees();
  }

  getCoffees(): void {
    this.coffeeService.getCoffees()
      .subscribe(coffees => this.coffees = coffees);
  }

  getTypeCount(tipo: string): number {
    return this.coffees.filter(coffee => coffee.tipo === tipo).length;
  }

}
