import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePlateformeWebComponent } from './service-plateforme-web.component';

describe('ServicePlateformeWebComponent', () => {
  let component: ServicePlateformeWebComponent;
  let fixture: ComponentFixture<ServicePlateformeWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePlateformeWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePlateformeWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
