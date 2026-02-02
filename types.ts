import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceTier {
  name: string;
  description: string;
  price?: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
}

export interface CaseStudy {
  company: string;
  logo: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
}