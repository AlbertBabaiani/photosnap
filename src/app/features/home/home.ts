import { Component, signal, inject } from '@angular/core';
import { Story } from '../../shared/models/story.model';
import { Feature } from '../../shared/models/feature.model';
import { StoryCardComponent } from '../../shared/ui/story-card/story-card';
import { FeatureCardComponent } from '../../shared/ui/feature-card/feature-card';
import { RouterLink } from '@angular/router';
import { CloudinaryService } from '../../shared/data-access/cloudinary.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StoryCardComponent, FeatureCardComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private cloudinaryService = inject(CloudinaryService);

  heroImages = {
    desktop: this.cloudinaryService.getImage('photosnap/home/desktop/create-and-share').toURL(),
    tablet: this.cloudinaryService.getImage('photosnap/home/tablet/create-and-share').toURL(),
    mobile: this.cloudinaryService.getImage('photosnap/home/mobile/create-and-share').toURL(),
  };
  stories = signal<Story[]>([
    {
      desktopImg: 'assets/images/stories/desktop/mountains.jpg',
      mobileImg: 'assets/images/stories/mobile/mountains.jpg',
      title: 'The Mountains',
      author: 'John Appleseed',
    },
    {
      desktopImg: 'assets/images/stories/desktop/cityscapes.jpg',
      mobileImg: 'assets/images/stories/mobile/cityscapes.jpg',
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
    },
    {
      desktopImg: 'assets/images/stories/desktop/18-days-voyage.jpg',
      mobileImg: 'assets/images/stories/mobile/18-days-voyage.jpg',
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
    },
    {
      desktopImg: 'assets/images/stories/desktop/architecturals.jpg',
      mobileImg: 'assets/images/stories/mobile/architecturals.jpg',
      title: 'Architecturals',
      author: 'Samantha Brooke',
    },
  ]);

  features = signal<Feature[]>([
    {
      icon: 'assets/images/features/desktop/responsive.svg',
      title: '100% Responsive',
      description:
        "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      icon: 'assets/images/features/desktop/no-limit.svg',
      title: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      icon: 'assets/images/features/desktop/embed.svg',
      title: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    },
  ]);
}
