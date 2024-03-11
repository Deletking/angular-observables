import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotAndColdComponent } from './hot-and-cold.component';

describe('HotAndColdComponent', () => {
  let component: HotAndColdComponent;
  let fixture: ComponentFixture<HotAndColdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotAndColdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotAndColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
