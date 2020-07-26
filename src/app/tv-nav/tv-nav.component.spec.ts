import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvNavComponent } from './tv-nav.component';

describe('TvNavComponent', () => {
  let component: TvNavComponent;
  let fixture: ComponentFixture<TvNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
