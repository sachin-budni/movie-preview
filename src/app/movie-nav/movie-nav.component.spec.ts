import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNavComponent } from './movie-nav.component';

describe('MovieNavComponent', () => {
  let component: MovieNavComponent;
  let fixture: ComponentFixture<MovieNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
