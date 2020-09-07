import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SthanakPage } from './sthanak.page';

describe('SthanakPage', () => {
  let component: SthanakPage;
  let fixture: ComponentFixture<SthanakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SthanakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SthanakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
