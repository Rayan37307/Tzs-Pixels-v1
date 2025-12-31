
import React from 'react';
import { 
  Zap, 
  Bot, 
  Globe, 
  BarChart3, 
  Clock, 
  Smartphone, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck
} from 'lucide-react';

export const COLORS = {
  primary: '#3b82f6',
  secondary: '#8b5cf6',
  background: '#0a0a0a',
  surface: '#171717',
};

export const SERVICES = [
  {
    title: 'Conversion Hubs',
    problem: 'You have a website, but it’s just a digital brochure that doesn’t sell.',
    solution: 'We build high-speed systems engineered to turn strangers into customers.',
    result: 'A digital storefront that actually pays for itself through leads.',
    icon: <Globe className="w-8 h-8 text-blue-500" />
  },
  {
    title: '24/7 AI Closers',
    problem: 'Leads are messaging you at 2 AM, and you’re losing them to the competition.',
    solution: 'AI agents that respond instantly on WhatsApp, IG, and Web to book appointments.',
    result: 'Wake up to a calendar full of pre-qualified bookings.',
    icon: <Bot className="w-8 h-8 text-purple-500" />
  },
  {
    title: 'The Invisible Workforce',
    problem: 'You’re spending 15+ hours a week on invoices, follow-ups, and data entry.',
    solution: 'Custom automations that connect your entire business behind the scenes.',
    result: 'Buy back your time and eliminate human error from your operations.',
    icon: <Zap className="w-8 h-8 text-yellow-500" />
  },
  {
    title: 'Central Command',
    problem: 'You don’t know your numbers because your data is scattered across 5 apps.',
    solution: 'One custom dashboard to track every lead, sale, and automation in real-time.',
    result: 'Total clarity. You finally know exactly what’s working and what isn’t.',
    icon: <BarChart3 className="w-8 h-8 text-green-500" />
  }
];

export const STEPS = [
  {
    number: '01',
    title: 'The Efficiency Audit',
    description: 'We map your current manual bottlenecks and identify exactly where you are losing revenue.'
  },
  {
    number: '02',
    title: 'System Architecture',
    description: 'Our engineers build your conversion hub and custom AI workflows to handle your repetitive tasks.'
  },
  {
    number: '03',
    title: 'The "Go-Live" Sync',
    description: 'We integrate your new system with your existing tools, ensuring a seamless handover to the robots.'
  },
  {
    number: '04',
    title: 'Optimization & Scale',
    description: 'We don’t just launch and leave. We monitor, tweak, and optimize your systems for maximum ROI.'
  }
];

export const USE_CASES = [
  {
    title: 'Never Miss a Lead',
    description: 'Instant AI replies on WhatsApp & Instagram that turn inquiries into clients while you sleep.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: 'Hands-Free Booking',
    description: 'Client wants a slot? The system checks your calendar and takes the deposit automatically.',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: 'Auto-Nurture Pipeline',
    description: 'Automated follow-ups that keep your brand top-of-mind until the lead is ready to buy.',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: 'Unified Sales Hub',
    description: 'Every message from every platform synced into one dashboard for your team to manage.',
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Engineered, Not "No-Code"',
    description: 'We build custom, scalable code that your business can actually grow on.',
    icon: <Cpu className="w-10 h-10 text-blue-500" />
  },
  {
    title: 'Speed to Market',
    description: 'We ship production-ready systems in weeks, getting you to ROI faster.',
    icon: <Clock className="w-10 h-10 text-purple-500" />
  },
  {
    title: 'Partners, Not Vendors',
    description: 'We act as your fractional CTO, managing the tech so you can manage the growth.',
    icon: <Layers className="w-10 h-10 text-pink-500" />
  }
];

export const PRICING_PLANS = [
  {
    name: 'Launch',
    price: '$1,499',
    description: 'Essential systems for local businesses ready to automate their first leads.',
    features: [
      'High-Conversion Landing Page',
      'Basic AI Lead Capture (Web)',
      'WhatsApp Integration',
      'Automated Lead Notifications',
      '30-Day Launch Support'
    ]
  },
  {
    name: 'Growth',
    price: '$3,499',
    description: 'Complete automation suite for businesses scaling their operations.',
    features: [
      'Full Multi-Page Conversion Hub',
      '24/7 AI Booking Agent (IG/WA)',
      'CRM & Email Auto-Nurture',
      'Inventory/Service Automations',
      'Ongoing System Optimization',
      'Priority Tech Support'
    ],
    recommended: true
  },
  {
    name: 'Dominance',
    price: 'Custom',
    description: 'Full-scale custom systems for high-volume, multi-location businesses.',
    features: [
      'Custom SaaS Dashboard',
      'Multi-Platform Bot Ecosystem',
      'Advanced API Sync (Custom n8n)',
      'Dedicated Fractional CTO',
      'Monthly Strategy & Scale Calls',
      '24/7 Uptime Monitoring'
    ]
  }
];
