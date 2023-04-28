/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CoffeeListComponent } from './coffee-list.component';
import { Coffee } from '../Coffee';
import { CoffeeService } from '../Coffee.service';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ],
      providers: [CoffeeService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const coffee = new Coffee(
        faker.datatype.number(),
        faker.word.noun(),
        faker.word.verb(),
        faker.address.country(),
        faker.word.verb(),
        Number(faker.random.numeric()),
        faker.image.imageUrl(),
      );
      component.coffees.push(coffee);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <tr> elements', () => {
    expect(debug.queryAll(By.css('tbody > tr'))).toHaveSize(3);
  });
});
