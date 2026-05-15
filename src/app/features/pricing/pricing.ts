import { Component, signal } from '@angular/core';
import { BetaBannerComponent } from '../../shared/ui/beta-banner/beta-banner';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
}

export interface FeatureComparison {
  name: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [BetaBannerComponent],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
  billingCycle = signal<'monthly' | 'yearly'>('monthly');

  tiers = signal<PricingTier[]>([
    {
      id: 'basic',
      name: 'Basic',
      description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
      monthlyPrice: 19.00,
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'More advanced features available. Recommended for photography veterans and professionals.',
      monthlyPrice: 39.00,
    },
    {
      id: 'business',
      name: 'Business',
      description: 'Additional features available such as more detailed metrics. Recommended for business owners.',
      monthlyPrice: 99.00,
    },
  ]);

  features = signal<FeatureComparison[]>([
    { name: 'UNLIMITED STORY POSTING', basic: true, pro: true, business: true },
    { name: 'UNLIMITED PHOTO UPLOAD', basic: true, pro: true, business: true },
    { name: 'EMBEDDING CUSTOM CONTENT', basic: false, pro: true, business: true },
    { name: 'CUSTOMIZE METADATA', basic: false, pro: true, business: true },
    { name: 'ADVANCED METRICS', basic: false, pro: false, business: true },
    { name: 'PHOTO DOWNLOADS', basic: false, pro: false, business: true },
    { name: 'SEARCH ENGINE INDEXING', basic: false, pro: false, business: true },
    { name: 'CUSTOM ANALYTICS', basic: false, pro: false, business: true },
  ]);

  toggleBillingCycle() {
    this.billingCycle.update((c) => (c === 'monthly' ? 'yearly' : 'monthly'));
  }
}
