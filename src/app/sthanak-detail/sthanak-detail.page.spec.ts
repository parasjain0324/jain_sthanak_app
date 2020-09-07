import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SthanakDetailPage } from './sthanak-detail.page';

describe('SthanakDetailPage', () => {
  let component: SthanakDetailPage;
  let fixture: ComponentFixture<SthanakDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SthanakDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SthanakDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
