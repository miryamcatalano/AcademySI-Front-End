import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCorsoComponent } from './reg-corso.component';

describe('RegCorsoComponent', () => {
  let component: RegCorsoComponent;
  let fixture: ComponentFixture<RegCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegCorsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
