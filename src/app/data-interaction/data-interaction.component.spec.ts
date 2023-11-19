import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInteractionComponent } from './data-interaction.component';

describe('DataInteractionComponent', () => {
  let component: DataInteractionComponent;
  let fixture: ComponentFixture<DataInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataInteractionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
