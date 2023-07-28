import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyFormComponentComponent } from './modify-form-component.component';

describe('ModifyFormComponentComponent', () => {
  let component: ModifyFormComponentComponent;
  let fixture: ComponentFixture<ModifyFormComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyFormComponentComponent]
    });
    fixture = TestBed.createComponent(ModifyFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
