import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiWeeklyComponent } from './bi-weekly.component';

describe('BiWeeklyComponent', () => {
  let component: BiWeeklyComponent;
  let fixture: ComponentFixture<BiWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiWeeklyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
