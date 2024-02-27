import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-curr-week',
  standalone: true,
  imports: [],
  templateUrl: './curr-week.component.html',
  styleUrl: './curr-week.component.css',
})
export class CurrWeekComponent implements OnInit {
  http = inject(HttpClient);
  users: any = [];

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.http.get('https://black-light-assignment-nxto.vercel.app/cw').subscribe((users: any) => {
      
      
      this.users = users;
    });
  }
}
