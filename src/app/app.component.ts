import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  sound: any;
  grSound: any;
  slSound: any;
  showSecret = false;
  loading = false;
  nameValue = '';
  newName = '';
  gryffindorList = [];
  slytherinList = [];
  facs = [
    {
    name: "Slytherin",
    logo: "../../assets/sl.png",
    students: []
  },
  {
    name: "Gryffindor",
    logo: "../../assets/gr.png",
    students: []
  }
]

  ngOnInit() {
    this.grSound = new Howl({
      src: ['../assets/gr.mp3'],
    });
    this.slSound = new Howl({
      src: ['../assets/sl.mp3'],
    });
    this.sound = new Howl({
      src: ['../assets/song.mp3'],
      autoplay: true,
      loop: true,
      volume: 0.1,
    });
  }

  stopMusic() {
    this.sound.stop();
  }

  playMusic() {
    this.sound.play();
  }

  onShowSecret() {
    this.showSecret = !this.showSecret;
  }
  sort(name) {
    if(this.hasName(this.gryffindorList, this.nameValue)) {
      this.grSound.play();
      this.pushStudent(this.facs[1], this.nameValue, 3000);
    } else if(this.hasName(this.slytherinList, this.nameValue)) {
      this.slSound.play();
      this.pushStudent(this.facs[0], this.nameValue, 5000);
    }
    
  }

  hasName(list, name) {
    return list.some(item => {
      return item.name.toLowerCase() === name.toLowerCase();
    })
  }

  pushStudent(fac, name, time) {
    if(this.hasName(fac.students, name)) {
      alert('Name exist')
      this.nameValue = '';
      return;
    }
    this.loading = true;
    setTimeout(() => {
      fac.students.push({ name: this.nameValue });
      this.nameValue = '';
      this.loading = false;
    }, time);
  }

  addToGryffindor() {
    this.gryffindorList.push({ name: this.newName });
    this.newName = '';
  }

  addToSlytherin() {
    this.slytherinList.push({ name: this.newName });
    this.newName = '';
  }
}
