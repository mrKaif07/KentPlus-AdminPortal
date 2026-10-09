// ============================================
// KENT PLUS — Mock Data Store
// ============================================
import type {
  Customer, Supplier, Area, Delivery, Payment, Invoice,
  EventBooking, Issue, Notification, WaterProduct, Subscription,
  InvoiceItem
} from './types';

// ── Areas ──
export const mockAreas: Area[] = [
  { id: 'area-1', name: 'Saket', totalCustomers: 82, dailyCans: 246, monthlyRevenue: 369000, assignedSuppliers: ['sup-1'], assignedSupplierNames: ['Imran Khan'], outstandingPayments: 24600, status: 'active' },
  { id: 'area-2', name: 'Malviya Nagar', totalCustomers: 76, dailyCans: 218, monthlyRevenue: 327000, assignedSuppliers: ['sup-2'], assignedSupplierNames: ['Arjun Yadav'], outstandingPayments: 18400, status: 'active' },
  { id: 'area-3', name: 'Lajpat Nagar', totalCustomers: 68, dailyCans: 192, monthlyRevenue: 288000, assignedSuppliers: ['sup-3'], assignedSupplierNames: ['Mohammad Ali'], outstandingPayments: 15200, status: 'active' },
  { id: 'area-4', name: 'Greater Kailash', totalCustomers: 72, dailyCans: 228, monthlyRevenue: 342000, assignedSuppliers: ['sup-4'], assignedSupplierNames: ['Suresh Kumar'], outstandingPayments: 21600, status: 'active' },
  { id: 'area-5', name: 'Vasant Kunj', totalCustomers: 64, dailyCans: 178, monthlyRevenue: 267000, assignedSuppliers: ['sup-5'], assignedSupplierNames: ['Ravi Tiwari'], outstandingPayments: 12800, status: 'active' },
  { id: 'area-6', name: 'Hauz Khas', totalCustomers: 58, dailyCans: 164, monthlyRevenue: 246000, assignedSuppliers: ['sup-6'], assignedSupplierNames: ['Deepak Sharma'], outstandingPayments: 9800, status: 'active' },
  { id: 'area-7', name: 'South Extension', totalCustomers: 62, dailyCans: 186, monthlyRevenue: 279000, assignedSuppliers: ['sup-7'], assignedSupplierNames: ['Anil Verma'], outstandingPayments: 16400, status: 'active' },
  { id: 'area-8', name: 'Chirag Delhi', totalCustomers: 60, dailyCans: 172, monthlyRevenue: 258000, assignedSuppliers: ['sup-8'], assignedSupplierNames: ['Farhan Ahmed'], outstandingPayments: 11200, status: 'active' },
];

// ── Suppliers ──
export const mockSuppliers: Supplier[] = [
  { id: 'sup-1', name: 'Imran Khan', email: 'imran@kentplus.in', phone: '+91 98111 22001', address: 'Saket, New Delhi', assignedAreas: ['Saket'], assignedAreaIds: ['area-1'], totalCustomers: 82, todayDeliveries: 12, completedToday: 8, pendingToday: 4, cashCollectedToday: 1200, pendingCollectionToday: 300, status: 'active', joinedDate: '2024-03-15', rating: 4.8, totalDeliveries: 2840 },
  { id: 'sup-2', name: 'Arjun Yadav', email: 'arjun@kentplus.in', phone: '+91 98111 22002', address: 'Malviya Nagar, New Delhi', assignedAreas: ['Malviya Nagar'], assignedAreaIds: ['area-2'], totalCustomers: 76, todayDeliveries: 10, completedToday: 7, pendingToday: 3, cashCollectedToday: 950, pendingCollectionToday: 200, status: 'active', joinedDate: '2024-04-20', rating: 4.6, totalDeliveries: 2420 },
  { id: 'sup-3', name: 'Mohammad Ali', email: 'ali@kentplus.in', phone: '+91 98111 22003', address: 'Lajpat Nagar, New Delhi', assignedAreas: ['Lajpat Nagar'], assignedAreaIds: ['area-3'], totalCustomers: 68, todayDeliveries: 9, completedToday: 6, pendingToday: 3, cashCollectedToday: 800, pendingCollectionToday: 250, status: 'active', joinedDate: '2024-05-10', rating: 4.7, totalDeliveries: 2100 },
  { id: 'sup-4', name: 'Suresh Kumar', email: 'suresh@kentplus.in', phone: '+91 98111 22004', address: 'Greater Kailash, New Delhi', assignedAreas: ['Greater Kailash'], assignedAreaIds: ['area-4'], totalCustomers: 72, todayDeliveries: 11, completedToday: 9, pendingToday: 2, cashCollectedToday: 1100, pendingCollectionToday: 150, status: 'active', joinedDate: '2024-03-01', rating: 4.9, totalDeliveries: 3100 },
  { id: 'sup-5', name: 'Ravi Tiwari', email: 'ravi@kentplus.in', phone: '+91 98111 22005', address: 'Vasant Kunj, New Delhi', assignedAreas: ['Vasant Kunj'], assignedAreaIds: ['area-5'], totalCustomers: 64, todayDeliveries: 8, completedToday: 5, pendingToday: 3, cashCollectedToday: 700, pendingCollectionToday: 300, status: 'active', joinedDate: '2024-06-15', rating: 4.5, totalDeliveries: 1800 },
  { id: 'sup-6', name: 'Deepak Sharma', email: 'deepak@kentplus.in', phone: '+91 98111 22006', address: 'Hauz Khas, New Delhi', assignedAreas: ['Hauz Khas'], assignedAreaIds: ['area-6'], totalCustomers: 58, todayDeliveries: 8, completedToday: 6, pendingToday: 2, cashCollectedToday: 850, pendingCollectionToday: 100, status: 'active', joinedDate: '2024-07-01', rating: 4.4, totalDeliveries: 1560 },
  { id: 'sup-7', name: 'Anil Verma', email: 'anil@kentplus.in', phone: '+91 98111 22007', address: 'South Extension, New Delhi', assignedAreas: ['South Extension'], assignedAreaIds: ['area-7'], totalCustomers: 62, todayDeliveries: 9, completedToday: 7, pendingToday: 2, cashCollectedToday: 1000, pendingCollectionToday: 200, status: 'active', joinedDate: '2024-04-10', rating: 4.7, totalDeliveries: 2300 },
  { id: 'sup-8', name: 'Farhan Ahmed', email: 'farhan@kentplus.in', phone: '+91 98111 22008', address: 'Chirag Delhi, New Delhi', assignedAreas: ['Chirag Delhi'], assignedAreaIds: ['area-8'], totalCustomers: 60, todayDeliveries: 7, completedToday: 5, pendingToday: 2, cashCollectedToday: 650, pendingCollectionToday: 200, status: 'active', joinedDate: '2024-08-01', rating: 4.3, totalDeliveries: 1200 },
];

// ── Customers (30) ──
export const mockCustomers: Customer[] = [
  { id: 'cust-1', name: 'Rahul Sharma', email: 'rahul.sharma@email.com', phone: '+91 98765 43001', address: '12, Block A, Saket', area: 'Saket', areaId: 'area-1', landmark: 'Near PVR Cinema', dailyCans: 4, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-1', assignedSupplierName: 'Imran Khan', balance: 800, totalDelivered: 50, totalReturned: 48, outstandingCans: 2, status: 'active', joinedDate: '2024-06-01', subscriptionStatus: 'active' },
  { id: 'cust-2', name: 'Priya Gupta', email: 'priya.gupta@email.com', phone: '+91 98765 43002', address: '45, Sector 3, Malviya Nagar', area: 'Malviya Nagar', areaId: 'area-2', landmark: 'Near Metro Station', dailyCans: 2, canSize: '20L', paymentType: 'daily', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-2', assignedSupplierName: 'Arjun Yadav', balance: 0, totalDelivered: 30, totalReturned: 30, outstandingCans: 0, status: 'active', joinedDate: '2024-07-15', subscriptionStatus: 'active' },
  { id: 'cust-3', name: 'Amit Verma', email: 'amit.verma@email.com', phone: '+91 98765 43003', address: '78, Main Road, Lajpat Nagar', area: 'Lajpat Nagar', areaId: 'area-3', landmark: 'Near Central Market', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-3', assignedSupplierName: 'Mohammad Ali', balance: 1500, totalDelivered: 45, totalReturned: 43, outstandingCans: 2, status: 'active', joinedDate: '2024-05-20', subscriptionStatus: 'active' },
  { id: 'cust-4', name: 'Sunita Devi', email: 'sunita.devi@email.com', phone: '+91 98765 43004', address: '23, GK-1 Market', area: 'Greater Kailash', areaId: 'area-4', landmark: 'Near M Block Market', dailyCans: 6, canSize: '20L', paymentType: 'monthly', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-4', assignedSupplierName: 'Suresh Kumar', balance: 2400, totalDelivered: 80, totalReturned: 76, outstandingCans: 4, status: 'active', joinedDate: '2024-04-10', subscriptionStatus: 'active' },
  { id: 'cust-5', name: 'Vikram Singh', email: 'vikram.singh@email.com', phone: '+91 98765 43005', address: '56, Pocket B, Vasant Kunj', area: 'Vasant Kunj', areaId: 'area-5', landmark: 'Near DPS School', dailyCans: 2, canSize: '20L', paymentType: 'daily', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-5', assignedSupplierName: 'Ravi Tiwari', balance: 100, totalDelivered: 25, totalReturned: 25, outstandingCans: 0, status: 'active', joinedDate: '2024-08-01', subscriptionStatus: 'active' },
  { id: 'cust-6', name: 'Neha Kapoor', email: 'neha.kapoor@email.com', phone: '+91 98765 43006', address: '89, Lane 4, Hauz Khas', area: 'Hauz Khas', areaId: 'area-6', landmark: 'Near Deer Park', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-6', assignedSupplierName: 'Deepak Sharma', balance: 600, totalDelivered: 40, totalReturned: 39, outstandingCans: 1, status: 'active', joinedDate: '2024-06-15', subscriptionStatus: 'active' },
  { id: 'cust-7', name: 'Rajesh Malhotra', email: 'rajesh.malhotra@email.com', phone: '+91 98765 43007', address: '34, Ring Road, South Extension', area: 'South Extension', areaId: 'area-7', landmark: 'Near South Ex Mall', dailyCans: 5, canSize: '20L', paymentType: 'monthly', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-7', assignedSupplierName: 'Anil Verma', balance: 1000, totalDelivered: 60, totalReturned: 57, outstandingCans: 3, status: 'active', joinedDate: '2024-05-01', subscriptionStatus: 'active' },
  { id: 'cust-8', name: 'Meera Joshi', email: 'meera.joshi@email.com', phone: '+91 98765 43008', address: '67, Block C, Chirag Delhi', area: 'Chirag Delhi', areaId: 'area-8', landmark: 'Near Chirag Delhi Metro', dailyCans: 2, canSize: '20L', paymentType: 'daily', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-8', assignedSupplierName: 'Farhan Ahmed', balance: 0, totalDelivered: 20, totalReturned: 20, outstandingCans: 0, status: 'active', joinedDate: '2024-09-01', subscriptionStatus: 'active' },
  { id: 'cust-9', name: 'Anand Prakash', email: 'anand.prakash@email.com', phone: '+91 98765 43009', address: '15, Saket District Centre', area: 'Saket', areaId: 'area-1', landmark: 'Near Select City Walk', dailyCans: 8, canSize: '20L', paymentType: 'monthly', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-1', assignedSupplierName: 'Imran Khan', balance: 3200, totalDelivered: 100, totalReturned: 95, outstandingCans: 5, status: 'active', joinedDate: '2024-03-10', subscriptionStatus: 'active' },
  { id: 'cust-10', name: 'Kavita Reddy', email: 'kavita.reddy@email.com', phone: '+91 98765 43010', address: '42, Panchsheel Park', area: 'Malviya Nagar', areaId: 'area-2', landmark: 'Near IIT Delhi', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-2', assignedSupplierName: 'Arjun Yadav', balance: 450, totalDelivered: 35, totalReturned: 34, outstandingCans: 1, status: 'active', joinedDate: '2024-07-01', subscriptionStatus: 'active' },
  { id: 'cust-11', name: 'Rohit Agarwal', email: 'rohit.agarwal@email.com', phone: '+91 98765 43011', address: '28, Defence Colony, Lajpat Nagar', area: 'Lajpat Nagar', areaId: 'area-3', landmark: 'Near Defence Colony Market', dailyCans: 4, canSize: '20L', paymentType: 'daily', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-3', assignedSupplierName: 'Mohammad Ali', balance: 200, totalDelivered: 55, totalReturned: 53, outstandingCans: 2, status: 'active', joinedDate: '2024-06-20', subscriptionStatus: 'active' },
  { id: 'cust-12', name: 'Deepa Nair', email: 'deepa.nair@email.com', phone: '+91 98765 43012', address: '91, GK-2, Greater Kailash', area: 'Greater Kailash', areaId: 'area-4', landmark: 'Near Savitri Cinema', dailyCans: 2, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-4', assignedSupplierName: 'Suresh Kumar', balance: 400, totalDelivered: 28, totalReturned: 28, outstandingCans: 0, status: 'active', joinedDate: '2024-08-15', subscriptionStatus: 'active' },
  { id: 'cust-13', name: 'Sanjay Mishra', email: 'sanjay.mishra@email.com', phone: '+91 98765 43013', address: '55, Pocket D, Vasant Kunj', area: 'Vasant Kunj', areaId: 'area-5', landmark: 'Near Vasant Valley School', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-5', assignedSupplierName: 'Ravi Tiwari', balance: 750, totalDelivered: 38, totalReturned: 36, outstandingCans: 2, status: 'active', joinedDate: '2024-05-15', subscriptionStatus: 'active' },
  { id: 'cust-14', name: 'Ritu Bhasin', email: 'ritu.bhasin@email.com', phone: '+91 98765 43014', address: '33, Green Park Extension', area: 'Hauz Khas', areaId: 'area-6', landmark: 'Near Green Park Metro', dailyCans: 4, canSize: '20L', paymentType: 'daily', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-6', assignedSupplierName: 'Deepak Sharma', balance: 0, totalDelivered: 42, totalReturned: 41, outstandingCans: 1, status: 'active', joinedDate: '2024-07-20', subscriptionStatus: 'active' },
  { id: 'cust-15', name: 'Manish Saxena', email: 'manish.saxena@email.com', phone: '+91 98765 43015', address: '72, Kotla Mubarakpur', area: 'South Extension', areaId: 'area-7', landmark: 'Near Jangpura Metro', dailyCans: 2, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-7', assignedSupplierName: 'Anil Verma', balance: 300, totalDelivered: 22, totalReturned: 22, outstandingCans: 0, status: 'active', joinedDate: '2024-09-10', subscriptionStatus: 'active' },
  { id: 'cust-16', name: 'Pooja Chauhan', email: 'pooja.chauhan@email.com', phone: '+91 98765 43016', address: '48, Panchsheel Enclave', area: 'Chirag Delhi', areaId: 'area-8', landmark: 'Near Nehru Place', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-8', assignedSupplierName: 'Farhan Ahmed', balance: 900, totalDelivered: 36, totalReturned: 34, outstandingCans: 2, status: 'active', joinedDate: '2024-06-05', subscriptionStatus: 'active' },
  { id: 'cust-17', name: 'Arun Khanna', email: 'arun.khanna@email.com', phone: '+91 98765 43017', address: '19, Press Enclave, Saket', area: 'Saket', areaId: 'area-1', landmark: 'Near Saket Metro', dailyCans: 5, canSize: '20L', paymentType: 'monthly', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-1', assignedSupplierName: 'Imran Khan', balance: 1250, totalDelivered: 65, totalReturned: 62, outstandingCans: 3, status: 'active', joinedDate: '2024-04-25', subscriptionStatus: 'active' },
  { id: 'cust-18', name: 'Geeta Rao', email: 'geeta.rao@email.com', phone: '+91 98765 43018', address: '61, Sarvapriya Vihar', area: 'Malviya Nagar', areaId: 'area-2', landmark: 'Near Aurobindo Market', dailyCans: 2, canSize: '20L', paymentType: 'daily', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-2', assignedSupplierName: 'Arjun Yadav', balance: 0, totalDelivered: 18, totalReturned: 18, outstandingCans: 0, status: 'active', joinedDate: '2024-09-15', subscriptionStatus: 'active' },
  { id: 'cust-19', name: 'Vivek Tandon', email: 'vivek.tandon@email.com', phone: '+91 98765 43019', address: '85, Jangpura Extension', area: 'Lajpat Nagar', areaId: 'area-3', landmark: 'Near Lajpat Nagar Central Market', dailyCans: 6, canSize: '20L', paymentType: 'monthly', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-3', assignedSupplierName: 'Mohammad Ali', balance: 1800, totalDelivered: 72, totalReturned: 68, outstandingCans: 4, status: 'active', joinedDate: '2024-03-20', subscriptionStatus: 'active' },
  { id: 'cust-20', name: 'Nisha Pandey', email: 'nisha.pandey@email.com', phone: '+91 98765 43020', address: '37, CR Park', area: 'Greater Kailash', areaId: 'area-4', landmark: 'Near CR Park Market', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-4', assignedSupplierName: 'Suresh Kumar', balance: 600, totalDelivered: 33, totalReturned: 32, outstandingCans: 1, status: 'active', joinedDate: '2024-07-05', subscriptionStatus: 'active' },
  { id: 'cust-21', name: 'Karan Mehta', email: 'karan.mehta@email.com', phone: '+91 98765 43021', address: '14, Munirka', area: 'Vasant Kunj', areaId: 'area-5', landmark: 'Near JNU Campus', dailyCans: 4, canSize: '20L', paymentType: 'daily', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-5', assignedSupplierName: 'Ravi Tiwari', balance: 200, totalDelivered: 48, totalReturned: 46, outstandingCans: 2, status: 'active', joinedDate: '2024-05-10', subscriptionStatus: 'active' },
  { id: 'cust-22', name: 'Anjali Bhatt', email: 'anjali.bhatt@email.com', phone: '+91 98765 43022', address: '52, SDA Market, Hauz Khas', area: 'Hauz Khas', areaId: 'area-6', landmark: 'Near SDA Complex', dailyCans: 2, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-6', assignedSupplierName: 'Deepak Sharma', balance: 200, totalDelivered: 24, totalReturned: 24, outstandingCans: 0, status: 'active', joinedDate: '2024-08-20', subscriptionStatus: 'active' },
  { id: 'cust-23', name: 'Sunil Tiwari', email: 'sunil.tiwari@email.com', phone: '+91 98765 43023', address: '70, Masjid Moth', area: 'South Extension', areaId: 'area-7', landmark: 'Near South Ex Part 2', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-7', assignedSupplierName: 'Anil Verma', balance: 450, totalDelivered: 32, totalReturned: 31, outstandingCans: 1, status: 'active', joinedDate: '2024-06-25', subscriptionStatus: 'active' },
  { id: 'cust-24', name: 'Rekha Iyer', email: 'rekha.iyer@email.com', phone: '+91 98765 43024', address: '26, Lado Sarai', area: 'Chirag Delhi', areaId: 'area-8', landmark: 'Near Lado Sarai Village', dailyCans: 2, canSize: '20L', paymentType: 'daily', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-8', assignedSupplierName: 'Farhan Ahmed', balance: 0, totalDelivered: 16, totalReturned: 16, outstandingCans: 0, status: 'active', joinedDate: '2024-09-20', subscriptionStatus: 'active' },
  { id: 'cust-25', name: 'Mohan Lal', email: 'mohan.lal@email.com', phone: '+91 98765 43025', address: '93, Saket Residency', area: 'Saket', areaId: 'area-1', landmark: 'Near Saket Court', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-1', assignedSupplierName: 'Imran Khan', balance: 450, totalDelivered: 38, totalReturned: 37, outstandingCans: 1, status: 'active', joinedDate: '2024-07-10', subscriptionStatus: 'active' },
  { id: 'cust-26', name: 'Divya Sharma', email: 'divya.sharma@email.com', phone: '+91 98765 43026', address: '41, Adchini Complex', area: 'Malviya Nagar', areaId: 'area-2', landmark: 'Near IIT Gate', dailyCans: 4, canSize: '20L', paymentType: 'monthly', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-2', assignedSupplierName: 'Arjun Yadav', balance: 1600, totalDelivered: 52, totalReturned: 49, outstandingCans: 3, status: 'active', joinedDate: '2024-04-15', subscriptionStatus: 'active' },
  { id: 'cust-27', name: 'Pankaj Dubey', email: 'pankaj.dubey@email.com', phone: '+91 98765 43027', address: '18, Andrews Ganj', area: 'South Extension', areaId: 'area-7', landmark: 'Near Andrews Ganj Market', dailyCans: 5, canSize: '20L', paymentType: 'monthly', preferredTime: '6:00–8:00 AM', assignedSupplierId: 'sup-7', assignedSupplierName: 'Anil Verma', balance: 2500, totalDelivered: 68, totalReturned: 64, outstandingCans: 4, status: 'active', joinedDate: '2024-03-05', subscriptionStatus: 'active' },
  { id: 'cust-28', name: 'Shruti Menon', email: 'shruti.menon@email.com', phone: '+91 98765 43028', address: '74, Kalu Sarai', area: 'Hauz Khas', areaId: 'area-6', landmark: 'Near JNU New Campus', dailyCans: 2, canSize: '20L', paymentType: 'daily', preferredTime: '10:00–12:00 PM', assignedSupplierId: 'sup-6', assignedSupplierName: 'Deepak Sharma', balance: 0, totalDelivered: 14, totalReturned: 14, outstandingCans: 0, status: 'active', joinedDate: '2024-09-25', subscriptionStatus: 'active' },
  { id: 'cust-29', name: 'Tarun Jain', email: 'tarun.jain@email.com', phone: '+91 98765 43029', address: '59, East of Kailash', area: 'Greater Kailash', areaId: 'area-4', landmark: 'Near Nehru Place', dailyCans: 4, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-4', assignedSupplierName: 'Suresh Kumar', balance: 800, totalDelivered: 44, totalReturned: 42, outstandingCans: 2, status: 'active', joinedDate: '2024-06-10', subscriptionStatus: 'active' },
  { id: 'cust-30', name: 'Lakshmi Narayan', email: 'lakshmi.narayan@email.com', phone: '+91 98765 43030', address: '82, Chirag Enclave', area: 'Chirag Delhi', areaId: 'area-8', landmark: 'Near Chirag Enclave Market', dailyCans: 3, canSize: '20L', paymentType: 'monthly', preferredTime: '8:00–10:00 AM', assignedSupplierId: 'sup-8', assignedSupplierName: 'Farhan Ahmed', balance: 450, totalDelivered: 30, totalReturned: 29, outstandingCans: 1, status: 'active', joinedDate: '2024-07-25', subscriptionStatus: 'active' },
];

// ── Generate Deliveries (100+) ──
function generateDeliveries(): Delivery[] {
  const deliveries: Delivery[] = [];
  const statuses: Delivery['deliveryStatus'][] = ['delivered', 'delivered', 'delivered', 'delivered', 'delivered', 'scheduled', 'assigned', 'out-for-delivery', 'failed'];
  const today = new Date('2026-10-07');
  let id = 1;

  for (const customer of mockCustomers.slice(0, 20)) {
    const supplier = mockSuppliers.find(s => s.id === customer.assignedSupplierId)!;
    for (let d = 0; d < 6; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - d);
      const dateStr = date.toISOString().split('T')[0];
      const status = d === 0 ? (id % 3 === 0 ? 'scheduled' : id % 5 === 0 ? 'out-for-delivery' : 'delivered') : statuses[Math.min(d, statuses.length - 1)];
      const isDelivered = status === 'delivered';
      const isFailed = status === 'failed';
      const amount = customer.dailyCans * 50;

      deliveries.push({
        id: `DEL-${String(id).padStart(4, '0')}`,
        customerId: customer.id,
        customerName: customer.name,
        customerPhone: customer.phone,
        customerAddress: customer.address,
        customerArea: customer.area,
        areaId: customer.areaId,
        supplierId: supplier.id,
        supplierName: supplier.name,
        date: dateStr,
        time: isDelivered ? `${7 + (id % 4)}:${id % 2 === 0 ? '00' : '30'} AM` : '',
        scheduledTime: customer.preferredTime,
        requiredQuantity: customer.dailyCans,
        deliveredQuantity: isDelivered ? customer.dailyCans : 0,
        canSize: customer.canSize,
        rate: 50,
        amount: isDelivered ? amount : 0,
        paymentStatus: isDelivered ? (customer.paymentType === 'daily' ? 'paid' : (id % 3 === 0 ? 'pending' : 'paid')) : 'pending',
        paymentMethod: isDelivered && (customer.paymentType === 'daily' || id % 3 !== 0) ? (id % 2 === 0 ? 'cash' : 'upi') : null,
        deliveryStatus: status,
        confirmationMethod: isDelivered ? 'customer-otp' : null,
        confirmedAt: isDelivered ? dateStr + 'T' + `${8 + (id % 3)}:${15 + (id % 45)}:00` : null,
        failureReason: isFailed ? 'Customer unavailable' : null,
        failureNote: isFailed ? 'Customer requested delivery tomorrow.' : null,
        createdAt: dateStr + 'T06:00:00',
      });
      id++;
    }
  }
  return deliveries;
}

// ── Generate Payments (50+) ──
function generatePayments(): Payment[] {
  const payments: Payment[] = [];
  let id = 1;
  const today = new Date('2026-10-07');

  for (const customer of mockCustomers.slice(0, 25)) {
    for (let d = 0; d < 2; d++) {
      const date = new Date(today);
      date.setDate(date.getDate() - d * 3 - (id % 5));
      payments.push({
        id: `PAY-${String(id).padStart(4, '0')}`,
        customerId: customer.id,
        customerName: customer.name,
        invoiceId: customer.paymentType === 'monthly' ? `INV-${String(id).padStart(4, '0')}` : null,
        deliveryId: customer.paymentType === 'daily' ? `DEL-${String(id).padStart(4, '0')}` : null,
        amount: customer.dailyCans * 50 * (customer.paymentType === 'monthly' ? 30 : 1),
        method: id % 3 === 0 ? 'upi' : id % 3 === 1 ? 'cash' : 'online',
        date: date.toISOString().split('T')[0],
        status: id % 8 === 0 ? 'pending' : 'completed',
        reference: id % 3 === 0 ? `UPI${Math.floor(100000 + Math.random() * 900000)}` : null,
        collectedBy: mockSuppliers.find(s => s.id === customer.assignedSupplierId)?.name || null,
      });
      id++;
    }
  }
  return payments;
}

// ── Generate Invoices (20+) ──
function generateInvoices(): Invoice[] {
  const invoices: Invoice[] = [];
  const months = ['September', 'October'];
  let id = 1;

  for (const customer of mockCustomers.slice(0, 12)) {
    for (const month of months) {
      const totalCans = customer.dailyCans * 30;
      const totalAmount = totalCans * 50;
      const paidAmount = month === 'September' ? totalAmount : totalAmount - customer.balance;
      const items: InvoiceItem[] = [];
      for (let day = 1; day <= 30; day++) {
        items.push({
          date: `2026-${month === 'September' ? '09' : '10'}-${String(day).padStart(2, '0')}`,
          quantity: customer.dailyCans,
          rate: 50,
          amount: customer.dailyCans * 50,
          paymentStatus: month === 'September' ? 'paid' : (day <= 20 ? 'paid' : 'pending'),
        });
      }
      invoices.push({
        id: `INV-${String(id).padStart(4, '0')}`,
        customerId: customer.id,
        customerName: customer.name,
        customerAddress: customer.address,
        customerArea: customer.area,
        month: month,
        year: 2026,
        totalDeliveries: 30,
        totalCans,
        totalAmount,
        paidAmount: Math.max(0, paidAmount),
        outstandingAmount: Math.max(0, totalAmount - paidAmount),
        status: paidAmount >= totalAmount ? 'paid' : paidAmount > 0 ? 'partial' : 'unpaid',
        generatedDate: `2026-${month === 'September' ? '10' : '11'}-01`,
        dueDate: `2026-${month === 'September' ? '10' : '11'}-10`,
        items,
      });
      id++;
    }
  }
  return invoices;
}

// ── Event Bookings (10+) ──
export const mockEventBookings: EventBooking[] = [
  { id: 'KP-EVT-1001', customerId: null, customerName: 'Raj Malhotra', customerEmail: 'raj.m@email.com', customerPhone: '+91 99876 54321', eventType: 'wedding', eventDate: '2026-11-15', eventTime: '10:00 AM', expectedGuests: 500, venueName: 'Grand Palace Banquet', venueAddress: '45, Ring Road, Saket', venueArea: 'Saket', venueAreaId: 'area-1', venueLandmark: 'Near Select City Walk', estimatedCans: 100, canSize: '20L', deliveryRequirement: 'Before 8 AM', additionalNotes: 'Need chilled water', status: 'confirmed', assignedSupplierId: 'sup-1', assignedSupplierName: 'Imran Khan', quoteAmount: 5500, quoteDetails: { quantity: 100, rate: 50, deliveryFee: 500, discount: 0, totalAmount: 5500 }, createdAt: '2026-10-01T10:00:00' },
  { id: 'KP-EVT-1002', customerId: null, customerName: 'Anita Singh', customerEmail: 'anita.s@email.com', customerPhone: '+91 99876 54322', eventType: 'corporate', eventDate: '2026-10-20', eventTime: '9:00 AM', expectedGuests: 200, venueName: 'Tech Park Conference Hall', venueAddress: '12, Jasola District Centre', venueArea: 'Greater Kailash', venueAreaId: 'area-4', venueLandmark: 'Near Apollo Hospital', estimatedCans: 40, canSize: '20L', deliveryRequirement: 'Morning delivery', additionalNotes: 'Corporate event, need neat setup', status: 'under-review', assignedSupplierId: null, assignedSupplierName: null, quoteAmount: null, quoteDetails: null, createdAt: '2026-10-03T14:30:00' },
  { id: 'KP-EVT-1003', customerId: null, customerName: 'Pradeep Kumar', customerEmail: 'pradeep.k@email.com', customerPhone: '+91 99876 54323', eventType: 'birthday', eventDate: '2026-10-25', eventTime: '4:00 PM', expectedGuests: 80, venueName: 'Garden Restaurant', venueAddress: '78, Hauz Khas Village', venueArea: 'Hauz Khas', venueAreaId: 'area-6', venueLandmark: 'Near Hauz Khas Fort', estimatedCans: 20, canSize: '20L', deliveryRequirement: 'By 2 PM', additionalNotes: '', status: 'quote-sent', assignedSupplierId: null, assignedSupplierName: null, quoteAmount: 1200, quoteDetails: { quantity: 20, rate: 50, deliveryFee: 200, discount: 0, totalAmount: 1200 }, createdAt: '2026-10-04T09:15:00' },
  { id: 'KP-EVT-1004', customerId: null, customerName: 'Meena Sharma', customerEmail: 'meena.s@email.com', customerPhone: '+91 99876 54324', eventType: 'religious', eventDate: '2026-11-02', eventTime: '6:00 AM', expectedGuests: 300, venueName: 'Shiv Temple Community Hall', venueAddress: '90, Chirag Delhi', venueArea: 'Chirag Delhi', venueAreaId: 'area-8', venueLandmark: 'Near Chirag Delhi Gurudwara', estimatedCans: 60, canSize: '20L', deliveryRequirement: 'Early morning', additionalNotes: 'Religious function, water for prasad distribution', status: 'new', assignedSupplierId: null, assignedSupplierName: null, quoteAmount: null, quoteDetails: null, createdAt: '2026-10-06T16:00:00' },
  { id: 'KP-EVT-1005', customerId: null, customerName: 'Vikash Sinha', customerEmail: 'vikash.s@email.com', customerPhone: '+91 99876 54325', eventType: 'party', eventDate: '2026-10-30', eventTime: '7:00 PM', expectedGuests: 150, venueName: 'Club House Lounge', venueAddress: '33, Vasant Kunj', venueArea: 'Vasant Kunj', venueAreaId: 'area-5', venueLandmark: 'Near Vasant Kunj Mall', estimatedCans: 30, canSize: '20L', deliveryRequirement: 'Before 5 PM', additionalNotes: 'Party setup, need multiple delivery points', status: 'confirmed', assignedSupplierId: 'sup-5', assignedSupplierName: 'Ravi Tiwari', quoteAmount: 1700, quoteDetails: { quantity: 30, rate: 50, deliveryFee: 200, discount: 0, totalAmount: 1700 }, createdAt: '2026-10-02T11:00:00' },
  { id: 'KP-EVT-1006', customerId: null, customerName: 'Raman Gupta', customerEmail: 'raman.g@email.com', customerPhone: '+91 99876 54326', eventType: 'wedding', eventDate: '2026-11-22', eventTime: '11:00 AM', expectedGuests: 800, venueName: 'Royal Garden Resort', venueAddress: '55, Mehrauli', venueArea: 'Vasant Kunj', venueAreaId: 'area-5', venueLandmark: 'Near Qutub Minar', estimatedCans: 160, canSize: '20L', deliveryRequirement: 'Multiple batches', additionalNotes: 'Large wedding, 3-day event', status: 'under-review', assignedSupplierId: null, assignedSupplierName: null, quoteAmount: null, quoteDetails: null, createdAt: '2026-10-05T08:45:00' },
  { id: 'KP-EVT-1007', customerId: null, customerName: 'Sunita Devi', customerEmail: 'sunita.d@email.com', customerPhone: '+91 99876 54327', eventType: 'religious', eventDate: '2026-10-12', eventTime: '5:00 AM', expectedGuests: 400, venueName: 'Community Temple', venueAddress: '22, Lajpat Nagar', venueArea: 'Lajpat Nagar', venueAreaId: 'area-3', venueLandmark: 'Near Central Market', estimatedCans: 80, canSize: '20L', deliveryRequirement: 'Before dawn', additionalNotes: 'Diwali pooja arrangements', status: 'assigned', assignedSupplierId: 'sup-3', assignedSupplierName: 'Mohammad Ali', quoteAmount: 4200, quoteDetails: { quantity: 80, rate: 50, deliveryFee: 200, discount: 0, totalAmount: 4200 }, createdAt: '2026-09-28T13:20:00' },
  { id: 'KP-EVT-1008', customerId: null, customerName: 'Akash Patel', customerEmail: 'akash.p@email.com', customerPhone: '+91 99876 54328', eventType: 'corporate', eventDate: '2026-10-18', eventTime: '8:00 AM', expectedGuests: 120, venueName: 'Business Center', venueAddress: '67, South Extension', venueArea: 'South Extension', venueAreaId: 'area-7', venueLandmark: 'Near South Ex Mall', estimatedCans: 25, canSize: '20L', deliveryRequirement: 'Morning setup', additionalNotes: 'Full day conference', status: 'completed', assignedSupplierId: 'sup-7', assignedSupplierName: 'Anil Verma', quoteAmount: 1450, quoteDetails: { quantity: 25, rate: 50, deliveryFee: 200, discount: 0, totalAmount: 1450 }, createdAt: '2026-09-25T10:00:00' },
  { id: 'KP-EVT-1009', customerId: null, customerName: 'Neelam Arora', customerEmail: 'neelam.a@email.com', customerPhone: '+91 99876 54329', eventType: 'birthday', eventDate: '2026-11-05', eventTime: '12:00 PM', expectedGuests: 60, venueName: 'Garden View', venueAddress: '11, Malviya Nagar', venueArea: 'Malviya Nagar', venueAreaId: 'area-2', venueLandmark: 'Near Metro Station', estimatedCans: 15, canSize: '20L', deliveryRequirement: 'Before noon', additionalNotes: 'Kids birthday party', status: 'new', assignedSupplierId: null, assignedSupplierName: null, quoteAmount: null, quoteDetails: null, createdAt: '2026-10-06T19:30:00' },
  { id: 'KP-EVT-1010', customerId: null, customerName: 'Harish Chandra', customerEmail: 'harish.c@email.com', customerPhone: '+91 99876 54330', eventType: 'other', eventDate: '2026-10-28', eventTime: '2:00 PM', expectedGuests: 250, venueName: 'Community Center', venueAddress: '40, Saket', venueArea: 'Saket', venueAreaId: 'area-1', venueLandmark: 'Near PVR Saket', estimatedCans: 50, canSize: '20L', deliveryRequirement: 'Afternoon', additionalNotes: 'Charity event water supply', status: 'cancelled', assignedSupplierId: null, assignedSupplierName: null, quoteAmount: null, quoteDetails: null, createdAt: '2026-09-30T15:00:00' },
];

// ── Issues (20) ──
export const mockIssues: Issue[] = [
  { id: 'ISS-001', customerId: 'cust-1', customerName: 'Rahul Sharma', deliveryId: 'DEL-0006', issueType: 'missed-delivery', description: 'Delivery was not received today despite being scheduled.', status: 'open', createdAt: '2026-10-06T10:30:00', resolvedAt: null, resolution: null },
  { id: 'ISS-002', customerId: 'cust-3', customerName: 'Amit Verma', deliveryId: 'DEL-0015', issueType: 'wrong-quantity', description: 'Received 2 cans instead of 3 cans.', status: 'investigating', createdAt: '2026-10-05T14:00:00', resolvedAt: null, resolution: null },
  { id: 'ISS-003', customerId: 'cust-5', customerName: 'Vikram Singh', deliveryId: null, issueType: 'payment-issue', description: 'Payment showing as pending but I paid via UPI.', status: 'resolved', createdAt: '2026-10-03T09:15:00', resolvedAt: '2026-10-04T11:00:00', resolution: 'Payment confirmed after UPI verification. Balance updated.' },
  { id: 'ISS-004', customerId: 'cust-7', customerName: 'Rajesh Malhotra', deliveryId: 'DEL-0037', issueType: 'damaged-can', description: 'Received a can with a crack. Water was leaking.', status: 'resolved', createdAt: '2026-10-02T16:45:00', resolvedAt: '2026-10-03T08:30:00', resolution: 'Replacement can delivered same day. Damaged can collected.' },
  { id: 'ISS-005', customerId: 'cust-9', customerName: 'Anand Prakash', deliveryId: 'DEL-0049', issueType: 'supplier-issue', description: 'Delivery person was rude and left cans outside without informing.', status: 'investigating', createdAt: '2026-10-04T11:20:00', resolvedAt: null, resolution: null },
  { id: 'ISS-006', customerId: 'cust-11', customerName: 'Rohit Agarwal', deliveryId: 'DEL-0061', issueType: 'missed-delivery', description: 'No delivery for 2 consecutive days.', status: 'open', createdAt: '2026-10-06T08:00:00', resolvedAt: null, resolution: null },
  { id: 'ISS-007', customerId: 'cust-13', customerName: 'Sanjay Mishra', deliveryId: null, issueType: 'payment-issue', description: 'Overcharged for September. Bill shows 35 deliveries but only 28 were made.', status: 'investigating', createdAt: '2026-10-01T13:30:00', resolvedAt: null, resolution: null },
  { id: 'ISS-008', customerId: 'cust-15', customerName: 'Manish Saxena', deliveryId: 'DEL-0085', issueType: 'wrong-quantity', description: 'Received 1 can instead of 2.', status: 'resolved', createdAt: '2026-09-30T10:00:00', resolvedAt: '2026-10-01T09:00:00', resolution: 'Extra can delivered next day as compensation.' },
  { id: 'ISS-009', customerId: 'cust-17', customerName: 'Arun Khanna', deliveryId: null, issueType: 'other', description: 'Want to change delivery time from 6 AM to 8 AM.', status: 'resolved', createdAt: '2026-09-28T15:45:00', resolvedAt: '2026-09-29T10:00:00', resolution: 'Delivery time updated to 8:00-10:00 AM slot.' },
  { id: 'ISS-010', customerId: 'cust-19', customerName: 'Vivek Tandon', deliveryId: 'DEL-0109', issueType: 'damaged-can', description: 'Can seal was broken. Water quality seemed affected.', status: 'open', createdAt: '2026-10-06T12:00:00', resolvedAt: null, resolution: null },
  { id: 'ISS-011', customerId: 'cust-2', customerName: 'Priya Gupta', deliveryId: 'DEL-0008', issueType: 'missed-delivery', description: 'Delivery was scheduled for 8 AM but never arrived.', status: 'resolved', createdAt: '2026-10-04T12:30:00', resolvedAt: '2026-10-04T16:00:00', resolution: 'Re-delivered same evening. Apology note sent.' },
  { id: 'ISS-012', customerId: 'cust-4', customerName: 'Sunita Devi', deliveryId: null, issueType: 'supplier-issue', description: 'Supplier is consistently late. Arrives after 9 AM despite 6-8 AM window.', status: 'investigating', createdAt: '2026-10-05T07:30:00', resolvedAt: null, resolution: null },
  { id: 'ISS-013', customerId: 'cust-6', customerName: 'Neha Kapoor', deliveryId: 'DEL-0031', issueType: 'wrong-quantity', description: 'Only 2 cans delivered, order was for 3.', status: 'resolved', createdAt: '2026-09-29T11:00:00', resolvedAt: '2026-09-30T09:00:00', resolution: 'Additional can delivered next morning.' },
  { id: 'ISS-014', customerId: 'cust-10', customerName: 'Kavita Reddy', deliveryId: null, issueType: 'payment-issue', description: 'Cash payment of ₹300 not reflected in account.', status: 'open', createdAt: '2026-10-06T14:15:00', resolvedAt: null, resolution: null },
  { id: 'ISS-015', customerId: 'cust-12', customerName: 'Deepa Nair', deliveryId: 'DEL-0067', issueType: 'damaged-can', description: 'Water had unusual taste. Suspecting contamination.', status: 'investigating', createdAt: '2026-10-05T16:30:00', resolvedAt: null, resolution: null },
  { id: 'ISS-016', customerId: 'cust-20', customerName: 'Nisha Pandey', deliveryId: 'DEL-0115', issueType: 'missed-delivery', description: 'Sunday delivery was missed.', status: 'resolved', createdAt: '2026-10-05T09:00:00', resolvedAt: '2026-10-05T12:00:00', resolution: 'Sunday deliveries confirmed with supplier.' },
  { id: 'ISS-017', customerId: 'cust-22', customerName: 'Anjali Bhatt', deliveryId: null, issueType: 'other', description: 'Need to temporarily increase daily quantity to 4 cans for a week.', status: 'resolved', createdAt: '2026-09-27T10:30:00', resolvedAt: '2026-09-28T08:00:00', resolution: 'Temporary quantity increase applied for 7 days.' },
  { id: 'ISS-018', customerId: 'cust-25', customerName: 'Mohan Lal', deliveryId: 'DEL-0003', issueType: 'supplier-issue', description: 'Supplier did not collect empty cans as promised.', status: 'open', createdAt: '2026-10-06T11:00:00', resolvedAt: null, resolution: null },
  { id: 'ISS-019', customerId: 'cust-27', customerName: 'Pankaj Dubey', deliveryId: null, issueType: 'payment-issue', description: 'Invoice amount does not match the deliveries received.', status: 'investigating', createdAt: '2026-10-04T15:00:00', resolvedAt: null, resolution: null },
  { id: 'ISS-020', customerId: 'cust-29', customerName: 'Tarun Jain', deliveryId: 'DEL-0100', issueType: 'wrong-quantity', description: 'Received 3 cans instead of 4. Short by 1 can.', status: 'open', createdAt: '2026-10-06T09:45:00', resolvedAt: null, resolution: null },
];

// ── Notifications (30) ──
export const mockNotifications: Notification[] = [
  { id: 'notif-1', type: 'booking', title: 'New Event Booking', message: 'Raj Malhotra submitted a wedding booking for Nov 15.', read: false, createdAt: '2026-10-06T22:00:00', targetRole: 'admin', actionUrl: '/bookings/KP-EVT-1001' },
  { id: 'notif-2', type: 'delivery', title: 'Delivery Completed', message: 'Imran Khan completed delivery to Rahul Sharma — 4 cans.', read: false, createdAt: '2026-10-06T21:30:00', targetRole: 'admin', actionUrl: '/deliveries/DEL-0001' },
  { id: 'notif-3', type: 'payment', title: 'Payment Received', message: '₹4,000 received from Rahul Sharma via UPI.', read: true, createdAt: '2026-10-06T20:00:00', targetRole: 'admin', actionUrl: '/payments' },
  { id: 'notif-4', type: 'overdue', title: 'Payment Overdue', message: 'Sunita Devi has ₹2,400 overdue for September.', read: false, createdAt: '2026-10-06T19:00:00', targetRole: 'admin', actionUrl: '/customers/cust-4' },
  { id: 'notif-5', type: 'failed', title: 'Delivery Failed', message: 'Delivery to Vikram Singh failed — Customer unavailable.', read: false, createdAt: '2026-10-06T18:00:00', targetRole: 'admin', actionUrl: '/deliveries/DEL-0025' },
  { id: 'notif-6', type: 'issue', title: 'New Issue Reported', message: 'Rahul Sharma reported: Missed Delivery.', read: false, createdAt: '2026-10-06T17:00:00', targetRole: 'admin', actionUrl: '/issues/ISS-001' },
  { id: 'notif-7', type: 'delivery', title: 'Your Delivery Today', message: 'Your water delivery is scheduled for 8:00–10:00 AM today.', read: false, createdAt: '2026-10-07T06:00:00', targetRole: 'customer', actionUrl: '/deliveries' },
  { id: 'notif-8', type: 'delivery', title: 'Delivery Completed', message: 'Your delivery of 4 cans has been completed.', read: true, createdAt: '2026-10-06T08:32:00', targetRole: 'customer', actionUrl: '/deliveries/DEL-0001' },
  { id: 'notif-9', type: 'payment', title: 'Payment Confirmed', message: 'Your payment of ₹4,000 has been confirmed.', read: true, createdAt: '2026-10-06T15:00:00', targetRole: 'customer', actionUrl: '/payments' },
  { id: 'notif-10', type: 'overdue', title: 'Payment Reminder', message: 'You have an outstanding balance of ₹800.', read: false, createdAt: '2026-10-06T12:00:00', targetRole: 'customer', actionUrl: '/payments' },
  { id: 'notif-11', type: 'system', title: 'Subscription Updated', message: 'Your daily water supply has been updated.', read: true, createdAt: '2026-10-05T10:00:00', targetRole: 'customer', actionUrl: '/subscription' },
  { id: 'notif-12', type: 'delivery', title: 'New Deliveries Assigned', message: 'You have 12 deliveries scheduled for today.', read: false, createdAt: '2026-10-07T05:30:00', targetRole: 'supplier', actionUrl: '/today' },
  { id: 'notif-13', type: 'system', title: 'Route Updated', message: 'New customer added to your Saket route.', read: false, createdAt: '2026-10-06T16:00:00', targetRole: 'supplier', actionUrl: '/routes' },
  { id: 'notif-14', type: 'issue', title: 'Customer Issue', message: 'Rahul Sharma reported a missed delivery issue.', read: false, createdAt: '2026-10-06T10:30:00', targetRole: 'supplier', actionUrl: '/issues' },
  { id: 'notif-15', type: 'payment', title: 'Collection Summary', message: 'Yesterday collection: ₹1,200. Pending: ₹300.', read: true, createdAt: '2026-10-06T20:00:00', targetRole: 'supplier', actionUrl: '/payments' },
  { id: 'notif-16', type: 'booking', title: 'Event Delivery Assigned', message: 'You have been assigned to deliver for wedding event on Nov 15.', read: false, createdAt: '2026-10-05T14:00:00', targetRole: 'supplier', actionUrl: '/deliveries' },
  { id: 'notif-17', type: 'booking', title: 'New Booking Request', message: 'Anita Singh submitted a corporate event booking.', read: false, createdAt: '2026-10-06T14:30:00', targetRole: 'admin', actionUrl: '/bookings/KP-EVT-1002' },
  { id: 'notif-18', type: 'delivery', title: 'Delivery Completed', message: 'Arjun Yadav completed 7 out of 10 deliveries.', read: true, createdAt: '2026-10-06T13:00:00', targetRole: 'admin', actionUrl: '/suppliers/sup-2' },
  { id: 'notif-19', type: 'issue', title: 'Urgent Issue', message: 'Deepa Nair reported water contamination concern.', read: false, createdAt: '2026-10-06T16:30:00', targetRole: 'admin', actionUrl: '/issues/ISS-015' },
  { id: 'notif-20', type: 'payment', title: 'Daily Collection Report', message: 'Total collection today: ₹7,250. Pending: ₹1,750.', read: true, createdAt: '2026-10-06T21:00:00', targetRole: 'admin', actionUrl: '/payments' },
  { id: 'notif-21', type: 'system', title: 'Welcome to Kent Plus', message: 'Your account has been set up. Start exploring your dashboard.', read: true, createdAt: '2026-10-01T10:00:00', targetRole: 'customer', actionUrl: '/dashboard' },
  { id: 'notif-22', type: 'delivery', title: 'Delivery Out for Delivery', message: 'Your water delivery is on its way!', read: false, createdAt: '2026-10-07T07:45:00', targetRole: 'customer', actionUrl: '/deliveries' },
  { id: 'notif-23', type: 'booking', title: 'Booking Confirmed', message: 'Your event booking KP-EVT-1005 has been confirmed.', read: true, createdAt: '2026-10-03T11:00:00', targetRole: 'customer', actionUrl: '/bookings' },
  { id: 'notif-24', type: 'delivery', title: 'Delivery Summary', message: 'You completed 8 deliveries today. 4 pending.', read: false, createdAt: '2026-10-06T15:00:00', targetRole: 'supplier', actionUrl: '/today' },
  { id: 'notif-25', type: 'system', title: 'New Area Assigned', message: 'You have been assigned to cover parts of Malviya Nagar.', read: true, createdAt: '2026-10-04T09:00:00', targetRole: 'supplier', actionUrl: '/routes' },
  { id: 'notif-26', type: 'overdue', title: 'Outstanding Payments Alert', message: 'Total outstanding payments: ₹18,400 across 15 customers.', read: false, createdAt: '2026-10-06T09:00:00', targetRole: 'admin', actionUrl: '/payments' },
  { id: 'notif-27', type: 'system', title: 'Monthly Report Ready', message: 'September 2026 delivery and revenue report is ready.', read: true, createdAt: '2026-10-01T08:00:00', targetRole: 'admin', actionUrl: '/reports' },
  { id: 'notif-28', type: 'issue', title: 'Issue Resolved', message: 'Issue ISS-003 (Payment Issue) has been resolved.', read: true, createdAt: '2026-10-04T11:00:00', targetRole: 'customer', actionUrl: '/issues' },
  { id: 'notif-29', type: 'failed', title: 'Delivery Could Not Be Completed', message: 'Delivery to Rohit Agarwal failed. Customer unavailable.', read: false, createdAt: '2026-10-06T14:00:00', targetRole: 'supplier', actionUrl: '/deliveries' },
  { id: 'notif-30', type: 'booking', title: 'Booking Cancelled', message: 'Event booking KP-EVT-1010 has been cancelled by the customer.', read: true, createdAt: '2026-10-05T15:00:00', targetRole: 'admin', actionUrl: '/bookings/KP-EVT-1010' },
];

// ── Water Products ──
export const mockWaterProducts: WaterProduct[] = [
  { id: 'prod-1', name: '20L Water Can', size: '20L', rate: 50, description: 'Standard 20-litre drinking water can' },
  { id: 'prod-2', name: '10L Water Can', size: '10L', rate: 30, description: 'Medium 10-litre drinking water can' },
  { id: 'prod-3', name: '5L Water Can', size: '5L', rate: 20, description: 'Small 5-litre drinking water can' },
];

// ── Export generated data ──
export const mockDeliveries = generateDeliveries();
export const mockPayments = generatePayments();
export const mockInvoices = generateInvoices();

// ── Chart Data ──
export const dailyDeliveryData = [
  { day: 'Mon', deliveries: 380, cans: 1140 },
  { day: 'Tue', deliveries: 412, cans: 1236 },
  { day: 'Wed', deliveries: 395, cans: 1185 },
  { day: 'Thu', deliveries: 421, cans: 1263 },
  { day: 'Fri', deliveries: 408, cans: 1224 },
  { day: 'Sat', deliveries: 390, cans: 1170 },
  { day: 'Sun', deliveries: 365, cans: 1095 },
];

export const monthlyRevenueData = [
  { month: 'Apr', revenue: 520000 },
  { month: 'May', revenue: 580000 },
  { month: 'Jun', revenue: 620000 },
  { month: 'Jul', revenue: 660000 },
  { month: 'Aug', revenue: 710000 },
  { month: 'Sep', revenue: 750000 },
  { month: 'Oct', revenue: 640000 },
];

export const customerAreaData = [
  { area: 'Saket', customers: 82 },
  { area: 'Malviya Nagar', customers: 76 },
  { area: 'Lajpat Nagar', customers: 68 },
  { area: 'Greater Kailash', customers: 72 },
  { area: 'Vasant Kunj', customers: 64 },
  { area: 'Hauz Khas', customers: 58 },
  { area: 'South Extension', customers: 62 },
  { area: 'Chirag Delhi', customers: 60 },
];

export const monthlyConsumptionData = [
  { day: '1', cans: 4 }, { day: '2', cans: 4 }, { day: '3', cans: 4 },
  { day: '4', cans: 4 }, { day: '5', cans: 4 }, { day: '6', cans: 4 },
  { day: '7', cans: 4 }, { day: '8', cans: 0 }, { day: '9', cans: 4 },
  { day: '10', cans: 4 }, { day: '11', cans: 4 }, { day: '12', cans: 4 },
  { day: '13', cans: 4 }, { day: '14', cans: 4 }, { day: '15', cans: 4 },
  { day: '16', cans: 4 }, { day: '17', cans: 4 }, { day: '18', cans: 4 },
  { day: '19', cans: 4 }, { day: '20', cans: 4 }, { day: '21', cans: 4 },
  { day: '22', cans: 4 }, { day: '23', cans: 4 }, { day: '24', cans: 4 },
  { day: '25', cans: 4 }, { day: '26', cans: 4 }, { day: '27', cans: 4 },
  { day: '28', cans: 4 }, { day: '29', cans: 4 }, { day: '30', cans: 4 },
];

// Testimonials
export const testimonials = [
  { name: 'Rahul Sharma', area: 'Saket', text: 'Kent Plus has been delivering water to our home for 2 years now. Never missed a delivery!', rating: 5 },
  { name: 'Priya Gupta', area: 'Malviya Nagar', text: 'Very reliable service. The billing is transparent and payment is easy.', rating: 5 },
  { name: 'Amit Verma', area: 'Lajpat Nagar', text: 'We use Kent Plus for our office. Great quality water and on-time delivery every day.', rating: 4 },
  { name: 'Sunita Devi', area: 'Greater Kailash', text: 'Used Kent Plus for my daughter\'s wedding. They handled 100 cans delivery perfectly!', rating: 5 },
  { name: 'Rajesh Malhotra', area: 'South Extension', text: 'The customer portal is great. I can track deliveries and pay bills online.', rating: 4 },
  { name: 'Neha Kapoor', area: 'Hauz Khas', text: 'Best water delivery service in South Delhi. Clean water, fair pricing.', rating: 5 },
];

// FAQ
export const faqItems = [
  { question: 'How does Kent Plus daily water delivery work?', answer: 'We deliver fresh drinking water cans to your doorstep every day at your preferred time. Simply register, choose your daily quantity, and we assign a dedicated delivery person to your area.' },
  { question: 'What areas do you serve?', answer: 'We currently serve Saket, Malviya Nagar, Lajpat Nagar, Greater Kailash, Vasant Kunj, Hauz Khas, South Extension, and Chirag Delhi in South Delhi.' },
  { question: 'What are the payment options?', answer: 'We offer daily payment (pay per delivery) and monthly payment options. You can pay via Cash, UPI, or Online transfer.' },
  { question: 'Can I pause my subscription?', answer: 'Yes, you can pause your daily water supply anytime from your customer portal and resume it whenever you want.' },
  { question: 'Do you provide water for events?', answer: 'Yes! We provide bulk water supply for weddings, parties, corporate events, religious functions, and other events. Simply fill our event booking form.' },
  { question: 'How do I track my deliveries?', answer: 'Log in to your customer portal to see real-time delivery status, delivery history, and monthly consumption reports.' },
  { question: 'What if I have a complaint?', answer: 'You can report any issue from your customer portal. Our team will investigate and resolve it promptly.' },
  { question: 'What sizes of water cans are available?', answer: 'We offer 20L, 10L, and 5L water cans. The standard rate for 20L is ₹50 per can.' },
];
