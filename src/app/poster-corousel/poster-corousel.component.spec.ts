import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterCorouselComponent } from './poster-corousel.component';

describe('PosterCorouselComponent', () => {
  let component: PosterCorouselComponent;
  let fixture: ComponentFixture<PosterCorouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterCorouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterCorouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
