import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { bloque } from '../org.aabo';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class bloqueService {

	
		private NAMESPACE: string = 'org.aabo.bloque';
	



    constructor(private dataService: DataService<bloque>) {
    };

    public getAll(): Observable<bloque[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<bloque> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<bloque> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<bloque> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<bloque> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
