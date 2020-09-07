import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvertisePage } from './advertise.page';

describe('AdvertisePage', () => {
  let component: AdvertisePage;
  let fixture: ComponentFixture<AdvertisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvertisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
