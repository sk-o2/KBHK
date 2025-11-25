// import { useState } from 'react';
// import { Package, MapPin, Clock, User, CheckCircle, XCircle, Navigation } from 'lucide-react';

// type UserStatus = 'at-home' | 'outside';
// type OrderStatus = 'pending' | 'accepted' | 'in-progress' | 'delivered' | 'completed';

// interface Order {
//   id: string;
//   itemName: string;
//   userName: string;
//   userAvatar: string;
//   partnerName?: string;
//   partnerAvatar?: string;
//   itemCost: number;
//   deliveryBid: number;
//   location: string;
//   deliveryAddress: string;
//   status: OrderStatus;
//   timeCreated: string;
//   estimatedTime?: string;
// }

// interface ActiveOrdersProps {
//   userStatus: UserStatus;
// }

// // Mock data
// const mockOrders: Order[] = [
//   {
//     id: '1',
//     itemName: 'Grocery Items',
//     userName: 'You',
//     userAvatar: 'Y',
//     partnerName: 'Rajesh Kumar',
//     partnerAvatar: 'RK',
//     itemCost: 450,
//     deliveryBid: 60,
//     location: 'Big Bazaar, MG Road',
//     deliveryAddress: '123, 4th Cross, Indiranagar',
//     status: 'in-progress',
//     timeCreated: '25 mins ago',
//     estimatedTime: '15 mins',
//   },
//   {
//     id: '2',
//     itemName: 'Birthday Cake',
//     userName: 'Amit Kumar',
//     userAvatar: 'AK',
//     partnerName: 'You',
//     partnerAvatar: 'Y',
//     itemCost: 800,
//     deliveryBid: 100,
//     location: 'Sweet Treats Bakery, HSR Layout',
//     deliveryAddress: '456, 2nd Main, HSR Layout',
//     status: 'accepted',
//     timeCreated: '10 mins ago',
//     estimatedTime: '30 mins',
//   },
//   {
//     id: '3',
//     itemName: 'Medicines',
//     userName: 'You',
//     userAvatar: 'Y',
//     partnerName: 'Priya Sharma',
//     partnerAvatar: 'PS',
//     itemCost: 280,
//     deliveryBid: 40,
//     location: 'Apollo Pharmacy, Koramangala',
//     deliveryAddress: '789, 7th Block, Koramangala',
//     status: 'delivered',
//     timeCreated: '2 hours ago',
//   },
// ];

// export function ActiveOrders({ userStatus }: ActiveOrdersProps) {
//   const [orders] = useState<Order[]>(mockOrders);
//   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

//   const getStatusColor = (status: OrderStatus) => {
//     switch (status) {
//       case 'pending':
//         return 'bg-yellow-100 text-yellow-700 border-yellow-200';
//       case 'accepted':
//         return 'bg-blue-100 text-blue-700 border-blue-200';
//       case 'in-progress':
//         return 'bg-purple-100 text-purple-700 border-purple-200';
//       case 'delivered':
//         return 'bg-green-100 text-green-700 border-green-200';
//       case 'completed':
//         return 'bg-gray-100 text-gray-700 border-gray-200';
//       default:
//         return 'bg-gray-100 text-gray-700 border-gray-200';
//     }
//   };

//   const getStatusText = (status: OrderStatus) => {
//     switch (status) {
//       case 'pending':
//         return 'Waiting for Partner';
//       case 'accepted':
//         return 'Partner Assigned';
//       case 'in-progress':
//         return 'Out for Delivery';
//       case 'delivered':
//         return 'Delivered - Confirm';
//       case 'completed':
//         return 'Completed';
//       default:
//         return status;
//     }
//   };

//   const handleConfirmDelivery = (orderId: string) => {
//     // Mock confirmation
//     alert('Delivery confirmed! Payment released to delivery partner.');
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="mb-6">
//         <h1 className="text-3xl text-gray-900 mb-2">Active Orders</h1>
//         <p className="text-gray-600">
//           {userStatus === 'at-home'
//             ? 'Track your ongoing delivery requests'
//             : 'Manage your accepted delivery tasks'}
//         </p>
//       </div>

//       {orders.length > 0 ? (
//         <div className="space-y-4">
//           {orders.map((order) => (
//             <div
//               key={order.id}
//               className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
//             >
//               {/* Status Badge */}
//               <div className="flex items-center justify-between mb-4">
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(
//                     order.status
//                   )}`}
//                 >
//                   {getStatusText(order.status)}
//                 </span>
//                 <span className="text-sm text-gray-500">{order.timeCreated}</span>
//               </div>

//               {/* Order Info */}
//               <div className="grid md:grid-cols-2 gap-6 mb-4">
//                 <div>
//                   <h3 className="text-gray-900 mb-3">{order.itemName}</h3>
                  
//                   <div className="space-y-2 text-sm">
//                     <div className="flex items-start gap-2">
//                       <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <p className="text-gray-600">Pickup</p>
//                         <p className="text-gray-900">{order.location}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-start gap-2">
//                       <Navigation className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <p className="text-gray-600">Delivery</p>
//                         <p className="text-gray-900">{order.deliveryAddress}</p>
//                       </div>
//                     </div>

//                     {order.estimatedTime && (
//                       <div className="flex items-center gap-2">
//                         <Clock className="w-4 h-4 text-gray-400" />
//                         <span className="text-gray-600">
//                           ETA: {order.estimatedTime}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   {/* Partner Info */}
//                   {order.partnerName && (
//                     <div className="mb-4">
//                       <p className="text-sm text-gray-600 mb-2">
//                         {userStatus === 'at-home' ? 'Delivery Partner' : 'Customer'}
//                       </p>
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white">
//                           {order.partnerAvatar}
//                         </div>
//                         <div>
//                           <p className="text-gray-900">{order.partnerName}</p>
//                           <p className="text-sm text-gray-500">4.8 ★ (120 deliveries)</p>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Price Breakdown */}
//                   <div className="bg-gray-50 rounded-lg p-4">
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Item Cost</span>
//                         <span className="text-gray-900">₹{order.itemCost}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Delivery Fee</span>
//                         <span className="text-gray-900">₹{order.deliveryBid}</span>
//                       </div>
//                       <div className="border-t pt-2 flex justify-between">
//                         <span className="text-gray-900">Total</span>
//                         <span className="text-blue-600">
//                           ₹{order.itemCost + order.deliveryBid}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-3 pt-4 border-t">
//                 {order.status === 'delivered' && userStatus === 'at-home' && (
//                   <>
//                     <button
//                       onClick={() => handleConfirmDelivery(order.id)}
//                       className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
//                     >
//                       <CheckCircle className="w-5 h-5" />
//                       Confirm Delivery
//                     </button>
//                     <button className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
//                       <XCircle className="w-5 h-5" />
//                     </button>
//                   </>
//                 )}

//                 {order.status === 'in-progress' && (
//                   <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                     Track Live Location
//                   </button>
//                 )}

//                 {order.status === 'accepted' && userStatus === 'outside' && (
//                   <button className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
//                     Start Delivery
//                   </button>
//                 )}

//                 <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
//                   Contact {userStatus === 'at-home' ? 'Partner' : 'Customer'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="bg-white rounded-xl shadow-sm p-12 text-center">
//           <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//           <h3 className="text-xl text-gray-900 mb-2">No Active Orders</h3>
//           <p className="text-gray-600">
//             {userStatus === 'at-home'
//               ? "You don't have any active delivery requests"
//               : "You haven't accepted any delivery requests yet"}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
