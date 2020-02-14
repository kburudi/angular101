import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerArrayComponent } from './server-array.component';

describe('ServerArrayComponent', () => {
  let component: ServerArrayComponent;
  let fixture: ComponentFixture<ServerArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
