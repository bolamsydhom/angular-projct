
import { Person } from './../_model/person';

export class PersonService {
  person: Person[] = [
    { id: 1, name: 'Hamada', imageUrl: './assets/user.jpg', jobDesc: 'Front-End Developer', jobTitle: 'Front-End Developer', country: 'Egypt', connections: 5 }
  ];

  getAll(){
    return this.person.slice();
  }

  getById(id: number) {
    return this.person.find(p => p.id === id);
  }

  update(oldPerson: Person, newPerson: Person){
    let index = this.person.findIndex(p => p === oldPerson);
    this.person[index] = newPerson;
  }


  delete(person: Person) {
    let index = this.person.findIndex(p => p === person);
    this.person.splice(index, 1);
  }
}
