import { Component, input } from '@angular/core';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-story-card',

  imports: [],
  templateUrl: './story-card.html',
  styleUrl: './story-card.scss',
})
export class StoryCardComponent {
  story = input.required<Story>();
}
