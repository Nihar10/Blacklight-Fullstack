import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrWeekComponent } from './curr-week.component';

describe('CurrWeekComponent', () => {
  let component: CurrWeekComponent;
  let fixture: ComponentFixture<CurrWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrWeekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
