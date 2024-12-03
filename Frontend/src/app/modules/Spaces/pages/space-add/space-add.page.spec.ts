import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpaceAddPage } from './space-add.page';

describe('SpaceAddPage', () => {
  let component: SpaceAddPage;
  let fixture: ComponentFixture<SpaceAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
