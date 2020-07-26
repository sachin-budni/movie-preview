import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleNavComponent } from './people-nav.component';

describe('PeopleNavComponent', () => {
  let component: PeopleNavComponent;
  let fixture: ComponentFixture<PeopleNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
