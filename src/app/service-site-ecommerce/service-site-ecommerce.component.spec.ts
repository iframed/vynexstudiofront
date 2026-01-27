import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSiteEcommerceComponent } from './service-site-ecommerce.component';

describe('ServiceSiteEcommerceComponent', () => {
  let component: ServiceSiteEcommerceComponent;
  let fixture: ComponentFixture<ServiceSiteEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSiteEcommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSiteEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
