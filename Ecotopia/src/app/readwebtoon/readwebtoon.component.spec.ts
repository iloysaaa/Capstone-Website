import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadwebtoonComponent } from './readwebtoon.component';

describe('ReadwebtoonComponent', () => {
  let component: ReadwebtoonComponent;
  let fixture: ComponentFixture<ReadwebtoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadwebtoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadwebtoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
