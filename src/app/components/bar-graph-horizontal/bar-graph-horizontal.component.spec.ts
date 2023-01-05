import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphHorizontalComponent } from './bar-graph-horizontal.component';

describe('BarGraphHorizontalComponent', () => {
  let component: BarGraphHorizontalComponent;
  let fixture: ComponentFixture<BarGraphHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarGraphHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarGraphHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
