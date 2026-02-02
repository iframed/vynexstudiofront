import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSiteEcommercePrixComponent } from './service-site-ecommerce-prix.component';

describe('ServiceSiteEcommercePrixComponent', () => {
  let component: ServiceSiteEcommercePrixComponent;
  let fixture: ComponentFixture<ServiceSiteEcommercePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSiteEcommercePrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSiteEcommercePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
