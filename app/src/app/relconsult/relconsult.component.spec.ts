import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelconsultComponent } from './relconsult.component';

describe('RelconsultComponent', () => {
  let component: RelconsultComponent;
  let fixture: ComponentFixture<RelconsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelconsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelconsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
