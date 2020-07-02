import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPcComponent } from './detail-pc.component';

describe('DetailPcComponent', () => {
  let component: DetailPcComponent;
  let fixture: ComponentFixture<DetailPcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
