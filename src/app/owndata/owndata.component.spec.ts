import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwndataComponent } from './owndata.component';

describe('OwndataComponent', () => {
  let component: OwndataComponent;
  let fixture: ComponentFixture<OwndataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwndataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwndataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
