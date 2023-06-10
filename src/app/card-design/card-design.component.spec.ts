import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesignComponent } from './card-design.component';

describe('CardDesignComponent', () => {
  let component: CardDesignComponent;
  let fixture: ComponentFixture<CardDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDesignComponent]
    });
    fixture = TestBed.createComponent(CardDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
