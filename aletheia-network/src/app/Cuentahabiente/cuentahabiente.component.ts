import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CuentahabienteService } from './cuentahabiente.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-cuentahabiente',
  templateUrl: './cuentahabiente.component.html',
  styleUrls: ['./cuentahabiente.component.css'],
	providers: [CuentahabienteService]
})
export class CuentahabienteComponent implements OnInit {

	myForm: FormGroup;

	private AllParticipants;
	private participant;
	private currentId;
	private errorMessage;

	codigoBanorte = new FormControl("", Validators.required);
	nombre = new FormControl("", Validators.required);
	curp = new FormControl("", Validators.required);
	email = new FormControl("", Validators.required);
	domicilio = new FormControl("", Validators.required);
	fechaNacimiento = new FormControl("", Validators.required);
	telefono = new FormControl("", Validators.required);

  constructor(private servicecuentahabiente:CuentahabienteService, fb: FormBuilder) {
		this.myForm = fb.group({
			codigoBanorte:this.codigoBanorte,
			nombre:this.nombre,
			curp:this.curp,
			email:this.email,
			domicilio:this.domicilio,
			fechaNacimiento:this.fechaNacimiento,
			telefono:this.telefono
		});
	};

  ngOnInit() : void{
		this.loadAll();
  }

	loadAll(): Promise<any> {
		let tempList = [];
		return this.servicecuentahabiente.getAll()
		.toPromise()
		.then((result) => {
			this.errorMessage = null;
			result.forEach(asset => {
				tempList.push(asset);
			})
		})
	}

}
