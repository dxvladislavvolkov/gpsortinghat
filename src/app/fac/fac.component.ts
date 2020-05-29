import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-fac',
  templateUrl: './fac.component.html',
  styleUrls: ['./fac.component.css']
})
export class FacComponent implements OnInit {
  @Input() logo: string;
  @Input() facName: string;
  @Input() students: Student[];

  constructor() { }

  ngOnInit(): void {
  }

}
