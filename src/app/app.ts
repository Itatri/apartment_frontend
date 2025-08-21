import { Component, signal,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  message = signal('Loading...');

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getHello().subscribe(res => {
      this.message = res.message;
    });
  }

  } 
