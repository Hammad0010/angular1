import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsbComponent } from './isb.component';

describe('IsbComponent', () => {
  let component: IsbComponent;
  let fixture: ComponentFixture<IsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
