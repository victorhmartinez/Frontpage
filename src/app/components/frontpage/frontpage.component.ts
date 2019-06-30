import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

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

  constructor(config: NgbModalConfig, private modalService: NgbModal, private router: Router) { 
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = true;
  }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'sm' });
  
  }
  login(){
    this.router.navigate(['/auth/login']);    
  } 
}
