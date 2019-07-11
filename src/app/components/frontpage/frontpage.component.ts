import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
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
    color: white;
  }
  `]
})
export class FrontpageComponent implements OnInit {
  listPersons: Person[] = [];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private router: Router ,
      private personService: PersonService,) { 
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = true;
    
  }

  ngOnInit() {
    this.updateListPersons();
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'sm' });
  
  }
<<<<<<< HEAD

  
=======
  updateListPersons() {
    this.personService.getPersons().subscribe(person => {
      this.listPersons = person;
    });
  }
>>>>>>> eb2589241ddb4f56f58d8bc9fe0627fbcc76fe84
  login(){
    this.router.navigate(['/auth/login']);    
  } 
}
