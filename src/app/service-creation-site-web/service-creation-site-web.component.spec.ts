import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCreationSiteWebComponent } from './service-creation-site-web.component';

describe('ServiceCreationSiteWebComponent', () => {
  let component: ServiceCreationSiteWebComponent;
  let fixture: ComponentFixture<ServiceCreationSiteWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCreationSiteWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCreationSiteWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
