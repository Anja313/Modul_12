import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprinComponent } from './imprin.component';

describe('ImprinComponent', () => {
  let component: ImprinComponent;
  let fixture: ComponentFixture<ImprinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
