import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewWeeklyClassesMasterPage } from './new-weekly-classes-master.page';

describe('NewWeeklyClassesMasterPage', () => {
  let component: NewWeeklyClassesMasterPage;
  let fixture: ComponentFixture<NewWeeklyClassesMasterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWeeklyClassesMasterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewWeeklyClassesMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
