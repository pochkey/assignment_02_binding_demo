import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbindingdemoComponent } from './allbindingdemo.component';

describe('AllbindingdemoComponent', () => {
  let component: AllbindingdemoComponent;
  let fixture: ComponentFixture<AllbindingdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllbindingdemoComponent]
    });
    fixture = TestBed.createComponent(AllbindingdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
