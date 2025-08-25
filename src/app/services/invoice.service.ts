import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn : 'root'})

export class InvoiceService {
    private baseUrl = 'http://localhost:5000/api/invoices';

    constructor (private http: HttpClient) {}

    getInvoices(): Observable<any[]>{
      return this.http.get<any[]>(this.baseUrl);
    }

    getInvoice(id: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    createInvoice(data: any): Observable<any> {
      return this.http.post(this.baseUrl, data);
    }

    updateInvoice(id: string, data: any): Observable<any> {

      return this.http.put(`${this.baseUrl}/${id}`, data);
    }

    deleteInvoice(id:string) : Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }


}
