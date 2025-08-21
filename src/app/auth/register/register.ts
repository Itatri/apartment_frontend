import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.username, this.password).subscribe({
      next: (res) => {
        this.message = 'Registration successful!';
        // Redirect to login page or perform other actions after successful registration
      },
      error: (error) => {
        this.message = 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    });
  }

}
