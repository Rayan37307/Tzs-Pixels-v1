
// Added import to fix "Cannot find namespace 'React'" errors
import React from 'react';

export interface ServiceCardProps {
  title: string;
  problem: string;
  solution: string;
  result: string;
  icon: React.ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
}

export interface UseCaseProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}