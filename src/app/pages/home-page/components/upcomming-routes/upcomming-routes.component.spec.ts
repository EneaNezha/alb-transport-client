import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingRoutesComponent } from './upcomming-routes.component';

describe('UpcommingRoutesComponent', () => {
  let component: UpcommingRoutesComponent;
  let fixture: ComponentFixture<UpcommingRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcommingRoutesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpcommingRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
