import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { DataService } from '../data.service';
import { CuentahabienteComponent } from './cuentahabiente.component';
import { CuentahabienteService } from './cuentahabiente.service';

describe('CuentahabienteComponent', () => {
  let component: CuentahabienteComponent;
  let fixture: ComponentFixture<CuentahabienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentahabienteComponent ],
			imports: [
				BrowserModule,
				FormsModule,
				ReactiveFormsModule,
				HttpModule
			],
			providers: [CuentahabienteService, DataService, Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentahabienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
