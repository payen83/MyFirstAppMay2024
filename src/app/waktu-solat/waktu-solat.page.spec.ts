import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaktuSolatPage } from './waktu-solat.page';

describe('WaktuSolatPage', () => {
  let component: WaktuSolatPage;
  let fixture: ComponentFixture<WaktuSolatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaktuSolatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
