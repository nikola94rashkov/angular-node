import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionComponent } from '@components/hoc/section/section.component';
import { ShellComponent } from '@components/hoc/shell/shell.component';

@NgModule({
  declarations: [ShellComponent, SectionComponent],
  imports: [CommonModule],
  exports: [ShellComponent, SectionComponent],
})
export class HocModule {}
