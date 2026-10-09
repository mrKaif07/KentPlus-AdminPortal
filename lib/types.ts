// ============================================
// KENT PLUS — Shared Type Definitions
// ============================================

export type UserRole = 'customer' | 'supplier' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  avatar?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  area: string;
  areaId: string;
  landmark: string;
  dailyCans: number;
  canSize: '20L' | '10L' | '5L';
  paymentType: 'daily' | 'monthly';
  preferredTime: string;
  assignedSupplierId: string;
  assignedSupplierName: string;
  balance: number;
  totalDelivered: number;
  totalReturned: number;
  outstandingCans: number;
  status: 'active' | 'inactive' | 'paused' | 'pending';
  joinedDate: string;
  subscriptionStatus: 'active' | 'paused' | 'cancelled';
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  assignedAreas: string[];
  assignedAreaIds: string[];
  totalCustomers: number;
  todayDeliveries: number;
  completedToday: number;
  pendingToday: number;
  cashCollectedToday: number;
  pendingCollectionToday: number;
  status: 'active' | 'inactive';
  joinedDate: string;
  rating: number;
  totalDeliveries: number;
}

export interface Area {
  id: string;
  name: string;
  totalCustomers: number;
  dailyCans: number;
  monthlyRevenue: number;
  assignedSuppliers: string[];
  assignedSupplierNames: string[];
  outstandingPayments: number;
  status: 'active' | 'inactive';
}

export type DeliveryStatus = 'scheduled' | 'assigned' | 'out-for-delivery' | 'delivered' | 'failed' | 'cancelled';
export type PaymentStatus = 'paid' | 'pending' | 'partial';
export type PaymentMethod = 'cash' | 'upi' | 'online';

export interface Delivery {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerArea: string;
  areaId: string;
  supplierId: string;
  supplierName: string;
  date: string;
  time: string;
  scheduledTime: string;
  requiredQuantity: number;
  deliveredQuantity: number;
  canSize: '20L' | '10L' | '5L';
  rate: number;
  amount: number;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod | null;
  deliveryStatus: DeliveryStatus;
  confirmationMethod: 'customer-otp' | 'supplier-confirm' | null;
  confirmedAt: string | null;
  failureReason: string | null;
  failureNote: string | null;
  createdAt: string;
}

export interface Payment {
  id: string;
  customerId: string;
  customerName: string;
  invoiceId: string | null;
  deliveryId: string | null;
  amount: number;
  method: PaymentMethod;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  reference: string | null;
  collectedBy: string | null;
}

export interface Invoice {
  id: string;
  customerId: string;
  customerName: string;
  customerAddress: string;
  customerArea: string;
  month: string;
  year: number;
  totalDeliveries: number;
  totalCans: number;
  totalAmount: number;
  paidAmount: number;
  outstandingAmount: number;
  status: 'paid' | 'partial' | 'unpaid' | 'overdue';
  generatedDate: string;
  dueDate: string;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  date: string;
  quantity: number;
  rate: number;
  amount: number;
  paymentStatus: PaymentStatus;
}

export type EventType = 'wedding' | 'birthday' | 'corporate' | 'religious' | 'party' | 'other';
export type BookingStatus = 'new' | 'under-review' | 'quote-sent' | 'confirmed' | 'assigned' | 'completed' | 'cancelled';

export interface EventBooking {
  id: string;
  customerId: string | null;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  eventType: EventType;
  eventDate: string;
  eventTime: string;
  expectedGuests: number;
  venueName: string;
  venueAddress: string;
  venueArea: string;
  venueAreaId: string;
  venueLandmark: string;
  estimatedCans: number;
  canSize: '20L' | '10L' | '5L';
  deliveryRequirement: string;
  additionalNotes: string;
  status: BookingStatus;
  assignedSupplierId: string | null;
  assignedSupplierName: string | null;
  quoteAmount: number | null;
  quoteDetails: QuoteDetails | null;
  createdAt: string;
}

export interface QuoteDetails {
  quantity: number;
  rate: number;
  deliveryFee: number;
  discount: number;
  totalAmount: number;
}

export type IssueType = 'missed-delivery' | 'wrong-quantity' | 'payment-issue' | 'damaged-can' | 'supplier-issue' | 'other';
export type IssueStatus = 'open' | 'investigating' | 'resolved' | 'rejected';

export interface Issue {
  id: string;
  customerId: string;
  customerName: string;
  deliveryId: string | null;
  issueType: IssueType;
  description: string;
  status: IssueStatus;
  createdAt: string;
  resolvedAt: string | null;
  resolution: string | null;
}

export type NotificationType = 'booking' | 'delivery' | 'payment' | 'overdue' | 'failed' | 'issue' | 'system';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  targetRole: UserRole | 'all';
  actionUrl: string | null;
}

export interface WaterProduct {
  id: string;
  name: string;
  size: '20L' | '10L' | '5L';
  rate: number;
  description: string;
}

export interface Subscription {
  id: string;
  customerId: string;
  dailyQuantity: number;
  canSize: '20L' | '10L' | '5L';
  paymentType: 'daily' | 'monthly';
  preferredTime: string;
  assignedSupplierId: string;
  assignedSupplierName: string;
  status: 'active' | 'paused' | 'cancelled';
  startDate: string;
  pausedAt: string | null;
}

export interface InventoryItem {
  id: string;
  total: number;
  available: number;
  withSuppliers: number;
  withCustomers: number;
  returned: number;
  damaged: number;
}

export interface DashboardStats {
  totalCustomers: number;
  activeCustomers: number;
  todayDeliveries: number;
  todayCans: number;
  todayRevenue: number;
  pendingPayments: number;
  eventBookings: number;
  activeSuppliers: number;
}
