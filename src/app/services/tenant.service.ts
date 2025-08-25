import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TenantService {
  private apiUrl = 'http://localhost:5000/api/tenants';

  constructor(private http: HttpClient) {}

  getTenants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTenant(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addTenant(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  updateTenant(id: string, formData: FormData): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }

  deleteTenant(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
