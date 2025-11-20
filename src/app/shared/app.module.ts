import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, BrowserAnimationsModule, SidebarModule, ButtonModule],
  exports: [SidebarComponent],
})
export class ShellModule {}
