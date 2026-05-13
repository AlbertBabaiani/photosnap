import { Component, signal } from '@angular/core';
import { Story } from '../../shared/models/story.model';
import { Feature } from '../../shared/models/feature.model';
import { StoryCardComponent } from '../../shared/ui/story-card/story-card';
import { FeatureCardComponent } from '../../shared/ui/feature-card/feature-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StoryCardComponent, FeatureCardComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  stories = signal<Story[]>([
    {
      desktopImg: 'images/stories/desktop/mountains.jpg',
      mobileImg: 'images/stories/mobile/mountains.jpg',
      title: 'The Mountains',
      author: 'John Appleseed',
    },
    {
      desktopImg: 'images/stories/desktop/cityscapes.jpg',
      mobileImg: 'images/stories/mobile/cityscapes.jpg',
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
    },
    {
      desktopImg: 'images/stories/desktop/18-days-voyage.jpg',
      mobileImg: 'images/stories/mobile/18-days-voyage.jpg',
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
    },
    {
      desktopImg: 'images/stories/desktop/architecturals.jpg',
      mobileImg: 'images/stories/mobile/architecturals.jpg',
      title: 'Architecturals',
      author: 'Samantha Brooke',
    },
  ]);

  features = signal<Feature[]>([
    {
      icon: 'images/features/desktop/responsive.svg',
      title: '100% Responsive',
      description:
        "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      icon: 'images/features/desktop/no-limit.svg',
      title: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      icon: 'images/features/desktop/embed.svg',
      title: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    },
  ]);
}
