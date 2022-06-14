import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {TokenStorageService} from "./service/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isLoggedIn = false
  username: string = ''

  constructor(private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken()
    if (this.isLoggedIn) {
      this.router.navigate(['/home']).then()
    } else {
      this.router.navigate(['/login']).then()
    }

  }
}

