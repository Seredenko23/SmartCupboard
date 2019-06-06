import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CupboardServiceService {

	private cupboards: any;
	private shelves: any;
	private sectors: any;
	private cupboardId: number;
	private shelfId: number;
	private sectorId: number;
	private itemId: number;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

setCupboardId(val: number) {
	this.cupboardId = val;
}

getCupboardId() {
	return this.cupboardId;
}

setShelfId(val: number) {
	this.shelfId = val;
}

getShelfId() {
	return this.shelfId;
}

setSectorId(val: number) {
	this.sectorId = val;
}

getSectorId() {
	return this.sectorId;
}

setItemId(val: number) {
	this.itemId = val;
}

getItemId() {
	return this.itemId;
}

createCupboard(data: any) {
	this.http.post("/api/cupboards", data, {headers: new HttpHeaders({'Content-type': 'application/json'})
	})
    .subscribe(data =>{
   		this.toastr.success("Cupboard created successfully", "Success!");
    },
	error =>{
      this.toastr.error("There are some problems", "Oops!");
    });
}

createShelf (cupboardId: number, formValue: any) {
    let post = {cupboardId: cupboardId, deviceId: formValue.deviceId ,title: formValue.title}
  	  this.http.post(`/api/cupboards/${cupboardId}/shelfs`, post, {headers: new HttpHeaders({'Content-type': 'application/json'})
    })
    .subscribe(data =>{
   		this.toastr.success("Shelf created successfully", "Success!");
    },
	error =>{
      this.toastr.error("There are some problems", "Oops!");
    });
}

createSector(shelfId: number, formValue: any) {
	let post = { shelfId: shelfId, readerId:formValue.readerId, title: formValue.title };
	this.http.post(`/api/cupboards/{cupboardId}/shelfs/{shelfId}/sectors`, post, {headers: new HttpHeaders({'Content-type': 'application/json'})
	})
  	.subscribe(data =>{
   		this.toastr.success("Sector created successfully", "Success!");
    },
	error =>{
      this.toastr.error("There are some problems", "Oops!");
    });
}

getCupboards(): Observable<any> {
	return this.http.get('/api/cupboards');
}

getShelves(cupboardId: number): Observable<any> {
	return this.http.get(`/api/cupboards/${cupboardId}`);
}

getSectors(shelfId: number): Observable<any> {
    return this.http.get(`/api/cupboards/{cupboardId}/shelfs/${shelfId}`);
}

getDevices() {
	return this.http.get(`/api/devices`);
}

getItems(shelfId: number) {
	return this.http.get(`/api/shelfs/${shelfId}/items`);
}

getReaders() {
	return this.http.get(`/api/readers`);
}

updateCupboard(id: number, data: any) {
    this.http.put(`api/cupboards/${id}`, data)
    .subscribe(data =>{
      this.toastr.success("Your data updated properly", "Success!");
    },
	error =>{
      this.toastr.error("There are some problems", "Oops!");
    });
  }

updateShelf(id: number, ShelfId: number, shelfData: any) {
	let request = { cupboardId: id, deviceId: shelfData.deviceId, title: shelfData.title };
	this.http.put(`/api/cupboards/{cupboardId}/shelfs/${ShelfId}`, request)
	.subscribe(data => {
		this.toastr.success("Your data updated properly", "Success!");
	},
	error =>{
      this.toastr.error("There are some problems", "Oops!");
    });
}

updateSector(id: number, sectorId: number, sectorData: any) {
	let request = { shelfId: id, readerId: sectorData.readerId, title: sectorData.title};
	this.http.put(`/api/cupboards/{cupboardId}/shelfs/{ShelfId/sectors/${sectorId}`, request)
	.subscribe(data => {
		this.toastr.success("Your data updated properly", "Success!");
	},
	error =>{
      this.toastr.error("There are some problems", "Oops!");
    });
}

updateItemTitle(title: any, itemId: number) {
	this.http.put(`/api/items/${itemId}`, title, {headers: new HttpHeaders({'Content-type': 'application/json'})
	}).subscribe(data => {
		this.toastr.success("Title updated!", "Success!")
	},
	error => {
		this.toastr.error("Can`t update title","Oops!")
	})
}

deleteCurrentCupboard(id: number) {
	this.http.delete(`/api/cupboards/${id}`)
	.subscribe(data => {
		this.toastr.success("Cupboard deleted correctly", "Success");
	});
}

deleteCurrentShelf(id: number) {
	this.http.delete(`api/cupboards/{cupboardId}/shelfs/${id}`)
	.subscribe(data => {
		this.toastr.success("Shelf deleted correctly", "Success");
	});
}

deleteCurrentSector(id: number) {
	this.http.delete(`/api/cupboards/{cupboardId}/shelfs/{shelfId}/sectors/${id}`)
	.subscribe(data => {
		this.toastr.success("Sector deleted correctly", "Success");
	});
}

}