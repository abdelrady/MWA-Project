import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  searchForm;

  constructor(private formBuilder: FormBuilder, private usersService : UsersService){
    this.searchForm = formBuilder.group({
      'search': ['']
    });
    
  }

  search(){
    
  }
}
