import { Component , OnInit} from '@angular/core';
import { TenantService } from '../../services/tenant.service';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tenant',
  imports: [
    NgForOf, 
    NgIf,
    FormsModule
  ],
  templateUrl: './tenant.html',
  styleUrl: './tenant.css'
})
export class Tenant implements OnInit {
  tenants: any[] = [];
  tenantForm: any = {name: '', email: '', phone: '', roomId: ''};
  selectedFile: File | null = null;

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.loadTenants();
  }

  loadTenants() {
    this.tenantService.getAll().subscribe(data => this.tenants = data);
  }

  onFileChange(event: any){
    this.selectedFile = event.target.files[0];
  }

  saveTenant() {
    const formData = new FormData();
    formData.append('name', this.tenantForm.name);
    formData.append('email', this.tenantForm.email);
    formData.append('phone', this.tenantForm.phone);

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.tenantService.create(formData).subscribe(() => {
      this.loadTenants();
      this.tenantForm = {name: '', email: '', phone: '', roomId: ''};
      this.selectedFile = null;
    });
  }

  deleteTenant(id: string) {
    this.tenantService.delete(id).subscribe(() => {
      this.loadTenants();
    });
  }

}
