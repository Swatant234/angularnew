import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomgroupComponent } from './customgroup.component';

describe('CustomgroupComponent', () => {
  let component: CustomgroupComponent;
  let fixture: ComponentFixture<CustomgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
