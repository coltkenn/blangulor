import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlazorAppComponent } from './blazor-app.component';

describe('BlazorAppComponent', () => {
  let component: BlazorAppComponent;
  let fixture: ComponentFixture<BlazorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlazorAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlazorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
