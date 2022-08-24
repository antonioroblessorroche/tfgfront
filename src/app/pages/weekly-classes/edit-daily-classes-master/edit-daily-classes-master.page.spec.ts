import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDailyClassesMasterPage } from './edit-daily-classes-master.page';

describe('EditDailyClassesMasterPage', () => {
  let component: EditDailyClassesMasterPage;
  let fixture: ComponentFixture<EditDailyClassesMasterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDailyClassesMasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDailyClassesMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
