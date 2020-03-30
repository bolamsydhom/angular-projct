import { Person } from './../_model/person';

// id?: number;
//   name?: string;
//   imageUrl?: string;
//   jobDesc?: string;
//   jobTitle?: string;
//   country?: string;
//   connections?: number;

export class PersonService {
  person: Person[] = [
    {
      id: 1,
      name: 'Youstina Lamie',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'Information Technology Institude (ITI)',
      jobTitle: 'Trainee',
      country: 'Egypt',
      connections: 311,
      about: 'trainee at web & ui track at ITI'
    },{
      id: 2,
      name: 'Youstina Nader',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'Information Technology Institude (ITI)',
      jobTitle: 'Trainee',
      country: 'Egypt',
      connections: 311,
      about: 'trainee at web & ui track at ITI'
    },{
      id: 3,
      name: 'Bola Sydhom',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'Information Technology Institute (ITI)',
      jobTitle: 'Web & UI Trainee',
      country: 'Egypt',
      connections: 500,
      about: 'Graduated in July 2016 from the faculty of computers and informatics, holding a Bachelor degree in computers and informatics, Computer Science department accumulated degree: Very Good. interested in Graphic Designing, ...More'
    },{
      id: 4,
      name: 'Sharl Hanna',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'Information Technology Institute (ITI)',
      jobTitle: 'Training Management',
      country: 'Egypt',
      connections: 500,
      about: 'Experienced Soft Skills Training Technical Manager with a demonstrated history of working in the professional training and coaching field. Skilled in assessing training needs, scheduling and designing training programs, developing training material, delivering and evaluating training programs'
    },{
      id: 5,
      name: 'Ahmed Adel Domairy',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'Information Technology Institute (ITI)',
      jobTitle: 'CTO',
      country: 'Egypt',
      connections: 500,
      about: 'Ten years of working experience in the field of training including training management, coaching, preparing materials, conducting courses providing highly skilled caliber to the IT market along with an accumulative experience in system'
    },{
      id: 6,
      name: 'HR Business Partner',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'Vodafone',
      jobTitle: 'HR Business Partner',
      country: 'Egypt',
      connections: 500,
      about:'Responsible for 4 departments: HR, Finance, External Affairs & Strategy' 
    },{
      id: 7,
      name: 'Islam Farahat',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'AL SHEHRY construction EST.',
      jobTitle: 'CEO, founder',
      country: 'Egypt',
      connections: 500,
      about:'work on your dream until it comes real' 
    },{
      id: 8,
      name: 'Waled Mostafa',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'e-JAWDAH',
      jobTitle: 'Software Quality Control Engineer ',
      country: 'Egypt',
      connections: 500,
      about:'I am a computer science graduate, who has a bachelor degree from El-Shorouk academy. I started a career in software testing to acquire experience, knowledge and skills. ' 
    },{
      id: 9,
      name: 'Tasneem Magdy',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'Egyptian Canadian Company food',
      jobTitle: 'Hr specialist',
      country: 'Egypt',
      connections: 500,
      about:'work on your dream until it comes real' 
    },{
      id: 10,
      name: 'Omnia Khater',
      imageUrl: '../../../assets/images/personal.jpg',
      imgCoverUrl:'../../assets/images/cover.PNG',
      jobDesc: 'AKL Auto Feeding Industries',
      jobTitle: 'HR Specialist',
      country: 'Egypt',
      connections: 500,
      about:'HR Specialist dedicated in Training and Development section highly skilled in effective communication, critical thinking and decision making. Passionate about learning new skills, working in a team' 
    }

  ];

  getAll() {
    return this.person.slice();
  }

  getById(id: number) {
    return this.person.find(p => p.id === id);
  }

  add(person: Person) {
    const p: Person = person;
    this.person.push(p);
  }

  update(oldPerson: Person, newPerson: Person) {
    let index = this.person.findIndex(p => p === oldPerson);
    this.person[index] = newPerson;
  }

  delete(person: Person) {
    let index = this.person.findIndex(p => p === person);
    this.person.splice(index, 1);
  }
}
