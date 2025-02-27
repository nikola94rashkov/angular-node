import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/blocks/footer/footer.component';
import { HeaderComponent } from '@components/blocks/header/header.component';
import { ShellComponent } from '@components/hoc/shell/shell.component';
import { LocalService } from '@services/local/local.service';
import { UserStateService } from '@services/user-state/user-state-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'client';

  constructor(
    private localService: LocalService,
    private userStateService: UserStateService,
  ) {}

  ngOnInit() {
    console.log('Initializing AppComponent');
    const user = this.localService.getData('user');

    if (user && !this.userStateService.getCurrentUser()) {
      this.userStateService.setUserState(JSON.parse(user));
    }
  }

  ngOnDestroy() {
    console.log('Destroy');
    this.userStateService.setUserState(null);
  }
}
