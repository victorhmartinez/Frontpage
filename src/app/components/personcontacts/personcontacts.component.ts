import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ItemCategory } from 'src/app/models/itemCategory';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { PersoncontactsService } from 'src/app/services/personcontacts.service';
import { PersonService } from 'src/app/services/person.service';
import { ItemCategoryService } from 'src/app/services/itemCategory.service';
import { Personcontacts } from 'src/app/models/personcontacts';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { UnirversityCareerService } from 'src/app/services/unirversity-career.service';

@Component({
  selector: 'app-personcontacts',
  templateUrl: './personcontacts.component.html',
  styleUrls: ['./personcontacts.component.css']
})
export class PersoncontactsComponent implements OnInit {
  listPersons: Person[] = [];
  listTypeContact: ItemCategory[] = [];
  listPersonsContact: Personcontacts [] = [];
  personsContactform: FormGroup;
  data:MatTableDataSource<any>;
  constructor(
    private personsContactService: PersoncontactsService ,
    private personService: PersonService,
    private universityCareerService: UnirversityCareerService,
  ) { 
    this.personsContactform = this.createFormGroup();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator; 
   //Persons and Categories
   updateListPersons() {
    this.personService.getPersons().subscribe(person => {
      this.listPersons = person;
    });
  }
  updateListTypeContact() {
    this.universityCareerService.getTypeContact().subscribe(itemCategories => {
      this.listTypeContact = itemCategories;
    });
  }
  //all person,itemcategories,contacts
  updateListPersonsContact() {
    this.personsContactService.getPersonsContact().subscribe(personsContact => {
      this.listPersonsContact = personsContact
      this.data= new MatTableDataSource<Personcontacts>(this.listPersonsContact);
      this.data.paginator=this.paginator;
    },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }
  //Filter the table
  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
  }
  //Delete
  deletePersonsContact(id: number) {
    this.personsContactService.deletePersonsContact(id).subscribe(persons => {
      this.updateListPersonsContact();
    },
      error => {
        alert(JSON.stringify(error));
      })
  }
  //Update
  updatePersonsContact(id: number) {
    alert(JSON.stringify(this.personsContactform.valueChanges));
  }
  ngOnInit() {
    this.updateListPersons();
    this.updateListTypeContact();
    this.updateListPersonsContact();
  }
  //columns table
  displayedColumns: string[] = ['contact','person', 'itemCategory', 'delete', 'update'];
//FormGroup
  createFormGroup() {
    return new FormGroup({

      contact_info_id: new FormControl(),
      contact:new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      persons_id: new FormControl('', [
        Validators.required,
      ]),
      item_category_id: new FormControl('', [
        Validators.required,
      ]),
      
    });
  }
   //Load data in form
   loadData(personsContactEdit: Personcontacts) {
    this.personsContactform.setValue({
      contact_info_id: personsContactEdit.contact_info_id,
      contact:personsContactEdit.contact,
      persons_id : personsContactEdit.persons_id,
      item_category_id: personsContactEdit.item_category_id,
      
    })
  }
    //submit form
    submitForm() {
      if (this.personsContactform.value.contact_info_id == null) {
        if (this.personsContactform.valid) {
          this.personsContactService.createpersonsContact(this.personsContactform.value).subscribe(personContact => {
            this.updateListPersonsContact();
          }, error => {
            alert(JSON.stringify(error));
          })
          this.resetForm();
        }
      }
      else {
        if (this.personsContactform.valid) {
          this.personsContactService.updatePersonsContact(this.personsContactform.value).subscribe(personContact => {
            this.updateListPersonsContact();
          })
          this.resetForm();
        }
      }
    }
    //reset form
  resetForm() {
    let control: AbstractControl = null;
    this.personsContactform.reset({ active: false });
    this.personsContactform.markAsUntouched();
    Object.keys(this.personsContactform.controls).forEach((nameControl) => {control = this.personsContactform.controls[nameControl];
      control.setErrors(null);
    });
  }
}


