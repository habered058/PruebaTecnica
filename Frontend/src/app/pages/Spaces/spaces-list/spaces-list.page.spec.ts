import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpacesListPage } from './spaces-list.page';

describe('SpacesListPage', () => {
  let component: SpacesListPage;
  let fixture: ComponentFixture<SpacesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
