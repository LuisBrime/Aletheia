import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { contratoService } from './contrato.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-contrato',
	templateUrl: './contrato.component.html',
	styleUrls: ['./contrato.component.css'],
  providers: [contratoService]
})
export class contratoComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          contratoKey = new FormControl("", Validators.required);
        
  
      
          chID = new FormControl("", Validators.required);
        
  
      
          endDate = new FormControl("", Validators.required);
        
  
      
          data = new FormControl("", Validators.required);
        
  
      
          autorizados = new FormControl("", Validators.required);
        
  
      
          bloques = new FormControl("", Validators.required);
        
  


  constructor(private servicecontrato:contratoService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          contratoKey:this.contratoKey,
        
    
        
          chID:this.chID,
        
    
        
          endDate:this.endDate,
        
    
        
          data:this.data,
        
    
        
          autorizados:this.autorizados,
        
    
        
          bloques:this.bloques
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicecontrato.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.aabo.contrato",
      
        
          "contratoKey":this.contratoKey.value,
        
      
        
          "chID":this.chID.value,
        
      
        
          "endDate":this.endDate.value,
        
      
        
          "data":this.data.value,
        
      
        
          "autorizados":this.autorizados.value,
        
      
        
          "bloques":this.bloques.value
        
      
    };

    this.myForm.setValue({
      
        
          "contratoKey":null,
        
      
        
          "chID":null,
        
      
        
          "endDate":null,
        
      
        
          "data":null,
        
      
        
          "autorizados":null,
        
      
        
          "bloques":null
        
      
    });

    return this.servicecontrato.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "contratoKey":null,
        
      
        
          "chID":null,
        
      
        
          "endDate":null,
        
      
        
          "data":null,
        
      
        
          "autorizados":null,
        
      
        
          "bloques":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.aabo.contrato",
      
        
          
        
    
        
          
            "chID":this.chID.value,
          
        
    
        
          
            "endDate":this.endDate.value,
          
        
    
        
          
            "data":this.data.value,
          
        
    
        
          
            "autorizados":this.autorizados.value,
          
        
    
        
          
            "bloques":this.bloques.value
          
        
    
    };

    return this.servicecontrato.updateAsset(form.get("contratoKey").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.servicecontrato.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.servicecontrato.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "contratoKey":null,
          
        
          
            "chID":null,
          
        
          
            "endDate":null,
          
        
          
            "data":null,
          
        
          
            "autorizados":null,
          
        
          
            "bloques":null 
          
        
      };



      
        if(result.contratoKey){
          
            formObject.contratoKey = result.contratoKey;
          
        }else{
          formObject.contratoKey = null;
        }
      
        if(result.chID){
          
            formObject.chID = result.chID;
          
        }else{
          formObject.chID = null;
        }
      
        if(result.endDate){
          
            formObject.endDate = result.endDate;
          
        }else{
          formObject.endDate = null;
        }
      
        if(result.data){
          
            formObject.data = result.data;
          
        }else{
          formObject.data = null;
        }
      
        if(result.autorizados){
          
            formObject.autorizados = result.autorizados;
          
        }else{
          formObject.autorizados = null;
        }
      
        if(result.bloques){
          
            formObject.bloques = result.bloques;
          
        }else{
          formObject.bloques = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "contratoKey":null,
        
      
        
          "chID":null,
        
      
        
          "endDate":null,
        
      
        
          "data":null,
        
      
        
          "autorizados":null,
        
      
        
          "bloques":null 
        
      
      });
  }

}
