import { Component } from '@angular/core';
import {SectionComponent} from '@components/hoc/section/section.component';

@Component({
  selector: 'app-dashboard',
  imports: [SectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
