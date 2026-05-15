import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invite-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './invite-link.html',
  styleUrl: './invite-link.scss',
})
export class InviteLinkComponent {
  theme = input<'light' | 'dark'>('light');
  text = input<string>('GET AN INVITE');
  link = input<string>('');
}
