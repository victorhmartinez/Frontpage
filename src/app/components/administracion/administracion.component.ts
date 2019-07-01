import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /*onLogout(): void {
    this.authService.logoutUser();
    location.reload();
  }
*/

}
