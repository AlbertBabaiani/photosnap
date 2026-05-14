import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'header[app-navbar]',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((state) => !state);
  }
}
