import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nama: string = '';
  email: string = '';
  password: string = '';
  contact: string = '';
  passwordFieldType: string = 'password'; // Deklarasi properti passwordFieldType

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private navController: NavController
  ) { }

  async register() {
    if (!this.nama || !this.email || !this.password || !this.contact) {
      const alert = await this.alertController.create({
        header: 'Registrasi Gagal',
        message: 'Silakan masukkan semua data dengan benar.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const data = {
      name: this.nama,
      contact: this.contact,
      email: this.email,
      password: this.password
    };

    const url = `${environment.apiUrl}/register`;

    this.http.post(url, data).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Registrasi Berhasil',
          message: 'Registrasi berhasil. Silakan login untuk melanjutkan.',
          buttons: ['OK']
        });
        await alert.present();

        // Navigasi ke halaman login setelah registrasi berhasil
        this.navController.navigateRoot('/login');
      },
      async (error) => {
        let message = 'Terjadi kesalahan selama proses registrasi. Silakan coba lagi.';
        if (error.status === 400 && error.error) {
          message = error.error.message || message;
        }

        const alert = await this.alertController.create({
          header: 'Registrasi Gagal',
          message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  togglePasswordVisibility(passwordInput: any) {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    passwordInput.type = this.passwordFieldType;
  }
}
