import { Component, input } from '@angular/core';
import { Feature } from '../../models/feature.model';

@Component({
  selector: 'app-feature-card',
  imports: [],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.scss',
})
export class FeatureCardComponent {
  feature = input.required<Feature>();
}
