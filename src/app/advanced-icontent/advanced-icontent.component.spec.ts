import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedIContentComponent } from './advanced-icontent.component';

describe('AdvancedIContentComponent', () => {
  let component: AdvancedIContentComponent;
  let fixture: ComponentFixture<AdvancedIContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedIContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedIContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
