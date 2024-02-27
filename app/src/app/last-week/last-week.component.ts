 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
 
@Component({
  selector: 'app-last-week',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './last-week.component.html',
  styleUrl: './last-week.component.css',
})
export class LastWeekComponent implements OnInit {
  http = inject(HttpClient);
  country : string = '';
  users: any = [];

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    if(this.country!=''){
      let x = document.getElementById('container');
      if (x) {
          x.style.visibility = 'visible';
      } 
      
      
      this.http.get(`https://black-light-assignment-nxto.vercel.app/lw/${this.country}`).subscribe((users: any) => {
      this.users = users;
       
    })
    }else{
      

      var x = document.getElementById("snackbar");

      
      if(x!=null){
       x.className = "show";
       setTimeout(function(){ if(x!=null)x.className = x.className.replace("show", ""); }, 3000);
      }
    }
    
    
  }
}
