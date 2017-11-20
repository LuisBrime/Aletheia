import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { contrato } from '../org.aabo';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class contratoService {

	
		private NAMESPACE: string = 'org.aabo.contrato';
	



    constructor(private dataService: DataService<contrato>) {
    };

    public getAll(): Observable<contrato[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<contrato> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<contrato> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<contrato> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<contrato> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
