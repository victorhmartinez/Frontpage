export class Personcontacts {
    contact_info_id:number;
    contact: string;
    item_category_id:number;
    persons_id:number;
<<<<<<< HEAD
    constructor(contact_infoid?:number,contact?: string, item_category_id?:number,person_id?:number){
=======
    contact: string;
    constructor(contact_infoid?:number,item_category_id?:number,person_id?:number,contact?: string){
>>>>>>> eb2589241ddb4f56f58d8bc9fe0627fbcc76fe84
        this.contact_info_id=contact_infoid,
        this.contact=contact,
        this.item_category_id=item_category_id,
<<<<<<< HEAD
        this.persons_id=person_id
        
=======
        this.persons_id=person_id,
        this.contact = contact
>>>>>>> eb2589241ddb4f56f58d8bc9fe0627fbcc76fe84
    }

}
