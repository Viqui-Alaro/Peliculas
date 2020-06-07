import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShideshowParesComponent } from './shideshow-pares.component';

describe('ShideshowParesComponent', () => {
  let component: ShideshowParesComponent;
  let fixture: ComponentFixture<ShideshowParesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShideshowParesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShideshowParesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
