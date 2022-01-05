import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GilgitComponent } from './gilgit.component';

describe('GilgitComponent', () => {
  let component: GilgitComponent;
  let fixture: ComponentFixture<GilgitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GilgitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GilgitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
