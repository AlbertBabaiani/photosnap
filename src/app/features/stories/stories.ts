import { Component, signal } from '@angular/core';
import { Story } from '../../shared/models/story.model';
import { StoryCardComponent } from '../../shared/ui/story-card/story-card';

@Component({
  selector: 'app-stories',
  imports: [StoryCardComponent],
  templateUrl: './stories.html',
  styleUrl: './stories.scss',
})
export class Stories {
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
    {
      desktopImg: 'assets/images/stories/desktop/world-tour.jpg',
      mobileImg: 'assets/images/stories/mobile/world-tour.jpg',
      title: 'World Tour 2019',
      author: 'Timothy Wagner',
    },
    {
      desktopImg: 'assets/images/stories/desktop/unforeseen-corners.jpg',
      mobileImg: 'assets/images/stories/mobile/unforeseen-corners.jpg',
      title: 'Unforeseen Corners',
      author: 'William Malcolm',
    },
    {
      desktopImg: 'assets/images/stories/desktop/king-on-africa.jpg',
      mobileImg: 'assets/images/stories/mobile/king-on-africa.jpg',
      title: 'King on Africa: Part II',
      author: 'Tim Hillenburg',
    },
    {
      desktopImg: 'assets/images/stories/desktop/trip-to-nowhere.jpg',
      mobileImg: 'assets/images/stories/mobile/trip-to-nowhere.jpg',
      title: 'The Trip to Nowhere',
      author: 'Felicia Rourke',
    },
    {
      desktopImg: 'assets/images/stories/desktop/rage-of-the-sea.jpg',
      mobileImg: 'assets/images/stories/mobile/rage-of-the-sea.jpg',
      title: 'Rage of The Sea',
      author: 'Mohammed Abdul',
    },
    {
      desktopImg: 'assets/images/stories/desktop/running-free.jpg',
      mobileImg: 'assets/images/stories/mobile/running-free.jpg',
      title: 'Running Free',
      author: 'Michelle',
    },
    {
      desktopImg: 'assets/images/stories/desktop/behind-the-waves.jpg',
      mobileImg: 'assets/images/stories/mobile/behind-the-waves.jpg',
      title: 'Behind the Waves',
      author: 'Lamarr Wilson',
    },
    {
      desktopImg: 'assets/images/stories/desktop/calm-waters.jpg',
      mobileImg: 'assets/images/stories/mobile/calm-waters.jpg',
      title: 'Calm Waters',
      author: 'Samantha Brooke',
    },
    {
      desktopImg: 'assets/images/stories/desktop/milky-way.jpg',
      mobileImg: 'assets/images/stories/mobile/milky-way.jpg',
      title: 'The Milky Way',
      author: 'Benjamin Cruz',
    },
    {
      desktopImg: 'assets/images/stories/desktop/dark-forest.jpg',
      mobileImg: 'assets/images/stories/mobile/dark-forest.jpg',
      title: 'Night at The Dark Forest',
      author: 'Mohammed Abdul',
    },
    {
      desktopImg: 'assets/images/stories/desktop/somwarpet.jpg',
      mobileImg: 'assets/images/stories/mobile/somwarpet.jpg',
      title: "Somwarpet's Beauty",
      author: 'Michelle',
    },
    {
      desktopImg: 'assets/images/stories/desktop/land-of-dreams.jpg',
      mobileImg: 'assets/images/stories/mobile/land-of-dreams.jpg',
      title: 'Land of Dreams',
      author: 'William Malcolm',
    },
    {
      desktopImg: 'assets/images/stories/desktop/moon-of-appalacia.jpg',
      mobileImg: 'assets/images/stories/mobile/moon-of-appalacia.jpg',
      title: 'Moon of Appalacia',
      author: 'Felicia Rourke',
    },
  ]);
}
