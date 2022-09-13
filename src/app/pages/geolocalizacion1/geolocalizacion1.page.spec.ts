import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Geolocalizacion1Page } from './geolocalizacion1.page';

describe('Geolocalizacion1Page', () => {
  let component: Geolocalizacion1Page;
  let fixture: ComponentFixture<Geolocalizacion1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Geolocalizacion1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Geolocalizacion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
