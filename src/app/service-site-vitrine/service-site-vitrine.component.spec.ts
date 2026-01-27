import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSiteVitrineComponent } from './service-site-vitrine.component';

describe('ServiceSiteVitrineComponent', () => {
  let component: ServiceSiteVitrineComponent;
  let fixture: ComponentFixture<ServiceSiteVitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSiteVitrineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSiteVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
