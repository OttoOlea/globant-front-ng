import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDetailDialogComponent } from './pop-up-detail-dialog.component';

describe('PopUpDetailDialogComponent', () => {
  let component: PopUpDetailDialogComponent;
  let fixture: ComponentFixture<PopUpDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpDetailDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
