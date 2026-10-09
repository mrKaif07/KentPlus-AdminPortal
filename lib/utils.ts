// ============================================
// KENT PLUS — Utility Functions
// ============================================

import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function formatTime(timeStr: string): string {
  return timeStr;
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

export function generateId(prefix: string): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${num}`;
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    // Delivery
    'scheduled': 'bg-blue-50 text-blue-700 border-blue-200',
    'assigned': 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'out-for-delivery': 'bg-amber-50 text-amber-700 border-amber-200',
    'delivered': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'failed': 'bg-red-50 text-red-700 border-red-200',
    'cancelled': 'bg-gray-50 text-gray-700 border-gray-200',
    // Payment
    'paid': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'pending': 'bg-amber-50 text-amber-700 border-amber-200',
    'partial': 'bg-orange-50 text-orange-700 border-orange-200',
    'completed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    // Customer
    'active': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'inactive': 'bg-gray-50 text-gray-700 border-gray-200',
    'paused': 'bg-amber-50 text-amber-700 border-amber-200',
    // Booking
    'new': 'bg-blue-50 text-blue-700 border-blue-200',
    'under-review': 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'quote-sent': 'bg-purple-50 text-purple-700 border-purple-200',
    'confirmed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    // Issue
    'open': 'bg-red-50 text-red-700 border-red-200',
    'investigating': 'bg-amber-50 text-amber-700 border-amber-200',
    'resolved': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'rejected': 'bg-gray-50 text-gray-700 border-gray-200',
    // Invoice
    'unpaid': 'bg-red-50 text-red-700 border-red-200',
    'overdue': 'bg-red-50 text-red-700 border-red-200',
  };
  return colors[status] || 'bg-gray-50 text-gray-700 border-gray-200';
}

export function getStatusLabel(status: string): string {
  return status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function getDaysInMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatDate(dateStr);
}
