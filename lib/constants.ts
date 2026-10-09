// ============================================
// KENT PLUS — Constants
// ============================================

export const BRAND = {
  name: 'KENT PLUS',
  tagline: 'Pure Water. Reliable Delivery.',
  secondaryTagline: 'Fresh water delivered when you need it.',
  description: 'Kent Plus provides drinking-water cans to customers on a daily basis.',
  phone: '+91 98765 43210',
  email: 'info@kentplus.in',
  address: 'South Delhi, New Delhi, India',
};

export const COLORS = {
  primary: '#16B8E8',
  waterBlue: '#0B8FC4',
  navy: '#071923',
  lightBlue: '#EAF8FD',
  ice: '#F6FCFF',
  white: '#FFFFFF',
  border: '#D8EDF5',
  muted: '#64748B',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
};

export const AREAS = [
  'Saket', 'Malviya Nagar', 'Lajpat Nagar', 'Greater Kailash',
  'Vasant Kunj', 'Hauz Khas', 'South Extension', 'Chirag Delhi',
];

export const CAN_SIZES = ['20L', '10L', '5L'] as const;

export const EVENT_TYPES = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'religious', label: 'Religious Function' },
  { value: 'party', label: 'Party' },
  { value: 'other', label: 'Other' },
];

export const ISSUE_TYPES = [
  { value: 'missed-delivery', label: 'Missed Delivery' },
  { value: 'wrong-quantity', label: 'Wrong Quantity' },
  { value: 'payment-issue', label: 'Payment Issue' },
  { value: 'damaged-can', label: 'Damaged Can' },
  { value: 'supplier-issue', label: 'Supplier Issue' },
  { value: 'other', label: 'Other' },
];

export const DELIVERY_TIMES = [
  '6:00–8:00 AM',
  '8:00–10:00 AM',
  '10:00–12:00 PM',
  '12:00–2:00 PM',
  '2:00–4:00 PM',
  '4:00–6:00 PM',
];

export const DEMO_CREDENTIALS = {
  customer: { email: 'customer@kentplus.demo', password: 'demo123', name: 'Rahul Sharma' },
  supplier: { email: 'supplier@kentplus.demo', password: 'demo123', name: 'Imran Khan' },
  admin: { email: 'admin@kentplus.demo', password: 'demo123', name: 'Priya Patel' },
};

export const DEMO_OTP = '1234';

export const WATER_RATE = 50; // ₹50 per 20L can
