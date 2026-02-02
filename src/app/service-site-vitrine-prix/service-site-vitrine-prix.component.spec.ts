import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSiteVitrinePrixComponent } from './service-site-vitrine-prix.component';

describe('ServiceSiteVitrinePrixComponent', () => {
  let component: ServiceSiteVitrinePrixComponent;
  let fixture: ComponentFixture<ServiceSiteVitrinePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSiteVitrinePrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSiteVitrinePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
