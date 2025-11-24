import { PERMISSIONS } from '../../auth/enums/permissions.enum';
import { NavMenuItem } from '@core/interfaces';

// THIS FILE CONTAINS THE NAVIGATION MENU ITEMS FOR THE SIDEBAR AND ALL OTHER NAVIGATION MENUS WHICH ARE USED IN THE APPLICATION AND ARE CONSTANT

/**
 * Navigation menu items for WEB Sidebar
 */
export const webSidebarMenuItems: NavMenuItem[] = [
  {
    href: '/dashboard',
    title: 'Dashboard',
    active: true,
    icon: 'home',
  },
  {
    href: '/events',
    title: 'Events',
    active: true,
    icon: 'event',
  },
  {
    href: '/aroom',
    title: '@Room',
    active: true,
    icon: 'person',
  },
  {
    href: '/wallet',
    title: 'My Wallet',
    active: true,
    icon: 'wallet',
  },
  {
    href: '/settings',
    title: 'Settings',
    active: true,
    icon: 'settings',
  },
];
