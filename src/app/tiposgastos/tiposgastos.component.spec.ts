/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TiposgastosComponent } from './tiposgastos.component';

describe('TiposgastosComponent', () => {
  let component: TiposgastosComponent;
  let fixture: ComponentFixture<TiposgastosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposgastosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposgastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
