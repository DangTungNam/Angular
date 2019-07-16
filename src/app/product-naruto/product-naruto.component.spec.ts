import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNarutoComponent } from './product-naruto.component';

describe('ProductNarutoComponent', () => {
  let component: ProductNarutoComponent;
  let fixture: ComponentFixture<ProductNarutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNarutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNarutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
