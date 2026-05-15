import { Component } from '@angular/core';
import { InviteLinkComponent } from '../invite-link/invite-link';

@Component({
  selector: 'app-beta-banner',
  standalone: true,
  imports: [InviteLinkComponent],
  templateUrl: './beta-banner.html',
  styleUrl: './beta-banner.scss',
})
export class BetaBannerComponent {}
