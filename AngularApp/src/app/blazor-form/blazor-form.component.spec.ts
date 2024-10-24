import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazorFormComponent } from './blazor-form.component';

describe('BlazorFormComponent', () => {
  let component: BlazorFormComponent;
  let fixture: ComponentFixture<BlazorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlazorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlazorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
