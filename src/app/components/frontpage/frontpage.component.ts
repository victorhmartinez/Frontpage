import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { AuthService } from '../../services/auth.service';
import { Person } from 'src/app/models/person';
@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
  providers: [NgbModalConfig, NgbModal],
  
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: green;
  }
  `]
})
export class FrontpageComponent implements OnInit {
  listPersons: Person[] = [];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private router: Router ,
    private authService: AuthService,  private personService: PersonService,) { 
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = true;
    

    
  }

  ngOnInit() {
    this.updateListPersons();
  }

  onLogin(form): void {
    console.log('login', form.value);
    
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/administracion');
    }); 
    this.modalService.dismissAll();
  }


  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'sm' });
  
  }
  updateListPersons() {
    this.personService.getPersons().subscribe(person => {
      this.listPersons = person;
    });
  }
  login(){
    this.router.navigate(['/auth/login']);    
  } 
}
