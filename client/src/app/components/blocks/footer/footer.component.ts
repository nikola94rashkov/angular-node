import { Component } from '@angular/core';
import {ShellComponent} from '@components/common/shell/shell.component';

@Component({
  selector: 'app-footer',
  imports: [ShellComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
