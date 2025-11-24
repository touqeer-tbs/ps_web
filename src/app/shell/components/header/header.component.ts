import { Component, EventEmitter, Output } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  menuHidden = true;
  searchText: string = '';

  @Output() search = new EventEmitter<string>();
  @Output() toggleSidebar = new EventEmitter<void>();

  onSearchChange() {
    this.search.emit(this.searchText);
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
