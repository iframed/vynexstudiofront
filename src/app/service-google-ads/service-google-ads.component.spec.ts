import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGoogleAdsComponent } from './service-google-ads.component';

describe('ServiceGoogleAdsComponent', () => {
  let component: ServiceGoogleAdsComponent;
  let fixture: ComponentFixture<ServiceGoogleAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceGoogleAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGoogleAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
