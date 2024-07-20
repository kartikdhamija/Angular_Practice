import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  data=[
    { "title": "Introduction to Python Programming" },
    { "title": "Data Structures and Algorithms in Java" },
    { "title": "Machine Learning with TensorFlow" },
    { "title": "Web Development with Node.js and Express" },
    { "title": "Deep Learning for Computer Vision" },
    { "title": "Artificial Intelligence: A Modern Approach" },
    { "title": "Database Design and SQL Fundamentals" },
    { "title": "Cybersecurity Essentials" },
    { "title": "Blockchain Technology Explained" },
    { "title": "Introduction to Cloud Computing" },
    { "title": "Mobile App Development with React Native" },
    { "title": "UI/UX Design Principles" },
    { "title": "Ethical Hacking and Penetration Testing" },
    { "title": "Big Data Analytics and Hadoop" },
    { "title": "Software Engineering Best Practices" },
    { "title": "Network Security and Cryptography" },
    { "title": "Python for Data Science and Machine Learning" },
    { "title": "Game Development with Unity" },
    { "title": "Digital Marketing Strategies" },
    { "title": "IoT Fundamentals: Sensors and Actuators" },
    { "title": "IoT Fundamentals: Sensors and Actuators" },
    { "title": "IoT Fundamentals: Sensors and Actuators" }
]

  totalItems = 50;
  pageSize = 4;
  currentPage = 0;
  items:any;

  ngOnInit(){
    this.items = this.data.filter((element, index) => index < this.pageSize);
    console.log(this.items)
  }

  Pagechange(pageIndex:any){
    console.log(this.data);
     this.currentPage = pageIndex;
     this.items = this.getItems(this.currentPage,this.pageSize);
  }

  getItems(currentPage:any,pageSize:any){
    let startIndex = (currentPage-1)*pageSize;
    let endIndex = startIndex + pageSize;
    return this.data.slice(startIndex,endIndex);
  }
}
