import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCompnentComponent } from './reusable-compnent.component';

describe('ReusableCompnentComponent', () => {
  let component: ReusableCompnentComponent;
  let fixture: ComponentFixture<ReusableCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableCompnentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
