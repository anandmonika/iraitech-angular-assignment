import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentXComponent } from './component-x.component';

describe('ComponentXComponent', () => {
  let component: ComponentXComponent;
  let fixture: ComponentFixture<ComponentXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentXComponent]
    });
    fixture = TestBed.createComponent(ComponentXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
