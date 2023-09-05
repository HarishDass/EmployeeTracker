import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicess/data.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.css'],
})
export class InactiveComponent implements OnInit {
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getData();
  }
}
