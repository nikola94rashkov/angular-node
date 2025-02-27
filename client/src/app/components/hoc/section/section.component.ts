import { Component, Input } from '@angular/core';
import { ShellComponent } from '@components/hoc/shell/shell.component';

@Component({
  selector: 'app-section',
  imports: [ShellComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {
  @Input() title: string | undefined;
}
