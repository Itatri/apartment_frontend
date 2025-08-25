import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceService } from '../../services/invoice.service';



@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-list.html',
  styleUrl: './invoice-list.css'
})
export class InvoiceList implements OnInit {
  invoices : any[] = [];

  constructor( private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.loadInvoices();
  }

  loadInvoices() {
    this.invoiceService.getInvoices().subscribe( data => {
      this.invoices = data;
    })
  }

  deleteInvoice(id: string){
    this.invoiceService.deleteInvoice(id).subscribe(() => this.loadInvoices);
  }
}
