import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMasterTrainingCentersPage } from './edit-master-training-centers.page';

describe('EditMasterTrainingCentersPage', () => {
  let component: EditMasterTrainingCentersPage;
  let fixture: ComponentFixture<EditMasterTrainingCentersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMasterTrainingCentersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMasterTrainingCentersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
