import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TokenService } from '../services/token.service'
import { user } from '../models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class AppComponent implements OnInit {
  title = 'Client';
  searchForm;
  user: user;
  logout = false;
  login = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private tokenService: TokenService) {
    this.searchForm = formBuilder.group({
      'search': ['']
    });
  }

  ngOnInit() {
    this.updateLoginControls()();
    this.tokenService.subscribeForChanges(this.updateLoginControls());
  }

  updateLoginControls() {
    let that = this;
    return () => {
      setTimeout(() => {
        that.user = that.tokenService.getUserInfo();
        if (that.user) {
          //show userinfo
          that.logout = true;
          that.login = false;
        } else {
          that.login = true;
          that.logout = false;
        }
      }, 100);
    }
  }

  search() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchForm.value.search } })
  }

}
