import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { bloqueService } from './bloque.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-bloque',
	templateUrl: './bloque.component.html',
	styleUrls: ['./bloque.component.css'],
  providers: [bloqueService]
})
export class bloqueComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          bloqueKey = new FormControl("", Validators.required);
        
  
      
          nombre = new FormControl("", Validators.required);
        
  
      
          chID = new FormControl("", Validators.required);
        
  
      
          cID = new FormControl("", Validators.required);
        
  
      
          visibleCh = new FormControl("", Validators.required);
        
  
      
          editableCh = new FormControl("", Validators.required);
        
  
      
          info = new FormControl("", Validators.required);
        
  


  constructor(private servicebloque:bloqueService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          bloqueKey:this.bloqueKey,
        
    
        
          nombre:this.nombre,
        
    
        
          chID:this.chID,
        
    
        
          cID:this.cID,
        
    
        
          visibleCh:this.visibleCh,
        
    
        
          editableCh:this.editableCh,
        
    
        
          info:this.info
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.servicebloque.getAll()
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
      $class: "org.aabo.bloque",
      
        
          "bloqueKey":this.bloqueKey.value,
        
      
        
          "nombre":this.nombre.value,
        
      
        
          "chID":this.chID.value,
        
      
        
          "cID":this.cID.value,
        
      
        
          "visibleCh":this.visibleCh.value,
        
      
        
          "editableCh":this.editableCh.value,
        
      
        
          "info":this.info.value
        
      
    };

    this.myForm.setValue({
      
        
          "bloqueKey":null,
        
      
        
          "nombre":null,
        
      
        
          "chID":null,
        
      
        
          "cID":null,
        
      
        
          "visibleCh":null,
        
      
        
          "editableCh":null,
        
      
        
          "info":null
        
      
    });

    return this.servicebloque.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "bloqueKey":null,
        
      
        
          "nombre":null,
        
      
        
          "chID":null,
        
      
        
          "cID":null,
        
      
        
          "visibleCh":null,
        
      
        
          "editableCh":null,
        
      
        
          "info":null 
        
      
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
      $class: "org.aabo.bloque",
      
        
          
        
    
        
          
            "nombre":this.nombre.value,
          
        
    
        
          
            "chID":this.chID.value,
          
        
    
        
          
            "cID":this.cID.value,
          
        
    
        
          
            "visibleCh":this.visibleCh.value,
          
        
    
        
          
            "editableCh":this.editableCh.value,
          
        
    
        
          
            "info":this.info.value
          
        
    
    };

    return this.servicebloque.updateAsset(form.get("bloqueKey").value,this.asset)
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

    return this.servicebloque.deleteAsset(this.currentId)
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

    return this.servicebloque.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "bloqueKey":null,
          
        
          
            "nombre":null,
          
        
          
            "chID":null,
          
        
          
            "cID":null,
          
        
          
            "visibleCh":null,
          
        
          
            "editableCh":null,
          
        
          
            "info":null 
          
        
      };



      
        if(result.bloqueKey){
          
            formObject.bloqueKey = result.bloqueKey;
          
        }else{
          formObject.bloqueKey = null;
        }
      
        if(result.nombre){
          
            formObject.nombre = result.nombre;
          
        }else{
          formObject.nombre = null;
        }
      
        if(result.chID){
          
            formObject.chID = result.chID;
          
        }else{
          formObject.chID = null;
        }
      
        if(result.cID){
          
            formObject.cID = result.cID;
          
        }else{
          formObject.cID = null;
        }
      
        if(result.visibleCh){
          
            formObject.visibleCh = result.visibleCh;
          
        }else{
          formObject.visibleCh = null;
        }
      
        if(result.editableCh){
          
            formObject.editableCh = result.editableCh;
          
        }else{
          formObject.editableCh = null;
        }
      
        if(result.info){
          
            formObject.info = result.info;
          
        }else{
          formObject.info = null;
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
      
        
          "bloqueKey":null,
        
      
        
          "nombre":null,
        
      
        
          "chID":null,
        
      
        
          "cID":null,
        
      
        
          "visibleCh":null,
        
      
        
          "editableCh":null,
        
      
        
          "info":null 
        
      
      });
  }

}
