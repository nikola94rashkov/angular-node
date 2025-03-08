import { Component, Input } from '@angular/core';
import { Optional } from '@models/utils.model';

@Component({
  selector: 'app-section',
  standalone: false,
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input() title: Optional<string>;
  @Input() className = '';
}
