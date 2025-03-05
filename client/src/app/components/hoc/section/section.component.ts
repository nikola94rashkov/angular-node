import { Component, Input } from '@angular/core';
import { ShellComponent } from '@components/hoc/shell/shell.component';
import { Optional } from '@models/Util.model';

@Component({
  selector: 'app-section',
  imports: [ShellComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input() title: Optional<string>;
}
