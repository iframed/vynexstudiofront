import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSeoComponent } from './service-seo.component';

describe('ServiceSeoComponent', () => {
  let component: ServiceSeoComponent;
  let fixture: ComponentFixture<ServiceSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
