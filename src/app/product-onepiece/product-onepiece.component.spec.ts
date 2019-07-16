import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnepieceComponent } from './product-onepiece.component';

describe('ProductOnepieceComponent', () => {
  let component: ProductOnepieceComponent;
  let fixture: ComponentFixture<ProductOnepieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOnepieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOnepieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
