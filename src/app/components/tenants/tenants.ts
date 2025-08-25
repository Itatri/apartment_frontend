import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../services/tenant.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Changed from BrowserModule
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tenants',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule, 
  ],
  templateUrl: './tenants.html',
  styleUrl: './tenants.css'
})
export class Tenants implements OnInit{

  tenants: any[] = [];
  selectedFile: File | null = null;
  tenantForm: any = { name: '', gender: 'Male', phone: '', idCard: '', address: '', roomId: '' };

  constructor(private tenantService: TenantService) {}

  ngOnInit(): void {
    this.loadTenants();
  }

  loadTenants() {
    this.tenantService.getTenants().subscribe(data => {
      this.tenants = data;
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  addTenant() {
    const formData = new FormData();
    Object.keys(this.tenantForm).forEach(key => formData.append(key, this.tenantForm[key]));
    if (this.selectedFile) formData.append('avatar', this.selectedFile);

    this.tenantService.addTenant(formData).subscribe(() => this.loadTenants());
  }

  deleteTenant(id: string) {
    this.tenantService.deleteTenant(id).subscribe(() => this.loadTenants());
  }
}
