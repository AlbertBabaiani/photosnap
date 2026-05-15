import { Component, signal } from '@angular/core';
import { BetaBannerComponent } from '../../shared/ui/beta-banner/beta-banner';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
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

  toggleBillingCycle() {
    this.billingCycle.update((c) => (c === 'monthly' ? 'yearly' : 'monthly'));
  }
}
