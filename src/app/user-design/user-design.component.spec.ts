import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDesignComponent } from './user-design.component';

describe('UserDesignComponent', () => {
  let component: UserDesignComponent;
  let fixture: ComponentFixture<UserDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDesignComponent]
    });
    fixture = TestBed.createComponent(UserDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
