import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLogicielGestionComponent } from './service-logiciel-gestion.component';

describe('ServiceLogicielGestionComponent', () => {
  let component: ServiceLogicielGestionComponent;
  let fixture: ComponentFixture<ServiceLogicielGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceLogicielGestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLogicielGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
