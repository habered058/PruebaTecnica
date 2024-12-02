import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpacesDetailPage } from './spaces-detail.page';

describe('SpacesDetailPage', () => {
  let component: SpacesDetailPage;
  let fixture: ComponentFixture<SpacesDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
