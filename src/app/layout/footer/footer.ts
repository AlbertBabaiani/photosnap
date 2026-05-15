import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InviteLinkComponent } from '../../shared/ui/invite-link/invite-link';

@Component({
  selector: 'footer[app-footer]',
  standalone: true,
  imports: [RouterLink, InviteLinkComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
}
