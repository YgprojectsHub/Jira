import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBoardDialogComponent } from './view-board-dialog.component';

describe('ViewBoardDialogComponent', () => {
  let component: ViewBoardDialogComponent;
  let fixture: ComponentFixture<ViewBoardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBoardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
