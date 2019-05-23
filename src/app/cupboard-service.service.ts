import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CupboardServiceService {

	private cupboards: any;
	private shelves: any;
	private sectors: any;
	private cupboardId: number;
	private shelfId: number;

  constructor(private http: HttpClient) { }

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

createCupboard(data: any) {
	this.http.post("/api/cupboards", data, {headers: new HttpHeaders({'Content-type': 'application/json'})
	})
      .subscribe(data =>{
        console.log(data)
      });
}

createShelf (cupboardId: number, formValue: any) {
    let post = {cupboardId: cupboardId, deviceId: formValue.deviceId ,title: formValue.title}
  	  this.http.post(`/api/cupboards/${cupboardId}/shelfs`, post, {headers: new HttpHeaders({'Content-type': 'application/json'})
    })
      .subscribe(data =>{
        console.log(data);
      });
}

createSector(shelfId: number, formValue: any) {
	let post = { shelfId: shelfId, readerId:formValue.readerId, title: formValue.title };
	this.http.post(`/api/cupboards/{cupboardId}/shelfs/{shelfId}/sectors`, post, {headers: new HttpHeaders({'Content-type': 'application/json'})
})
  .subscribe(data => {
  	console.log(data);
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

updateCupboard(id: number, data: any) {
    this.http.put(`api/cupboards/${id}`, data)
    .subscribe(data =>{
      console.log(data);
    })
  }

updateShelf(id: number, ShelfId: number, shelfData: any) {
	let request = { cupboardId: id, deviceId: shelfData.deviceId, title: shelfData.title };
	this.http.put(`/api/cupboards/{cupboardId}/shelfs/${ShelfId}`, request)
	.subscribe()
}

deleteCurrentCupboard(id: number) {
	this.http.delete(`/api/cupboards/${id}`).subscribe();
}

deleteCurrentShelf(id: number) {
	this.http.delete(`api/cupboards/{cupboardId}/shelfs/${id}`).subscribe();
}

deleteCurrentSector(id: number) {
	this.http.delete(`/api/cupboards/{cupboardId}/shelfs/{shelfId}/sectors/${id}`).subscribe();
}

}