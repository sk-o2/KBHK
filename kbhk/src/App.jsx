// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import front

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App






import { useState } from 'react';
import { MapPin, Home, Package, Menu, X, Users, Wallet, ShieldCheck, Search, Filter, Clock, TrendingUp, AlertCircle, MessageSquare, Send, CheckCircle, IndianRupee, FileText, Navigation, XCircle } from 'lucide-react';

export default function App() {
  // Main app state
  const [currentView, setCurrentView] = useState('home');
  const [userStatus, setUserStatus] = useState('at-home');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Delivery requests state
  const [deliveryRequests, setDeliveryRequests] = useState([
    {
      id: '1',
      userName: 'Sarah Johnson',
      userAvatar: 'SJ',
      itemName: 'Grocery Items',
      itemCost: 450,
      bidAmount: 500,
      location: 'MG Road, Bangalore',
      distance: '1.2 km',
      timePosted: '5 mins ago',
      description: 'Need vegetables and fruits from the local market',
      category: 'Groceries',
      urgency: 'high',
      bids: 3,
      status: 'open'
    },
    {
      id: '2',
      userName: 'Rahul Sharma',
      userAvatar: 'RS',
      itemName: 'Medicines',
      itemCost: 280,
      bidAmount: 320,
      location: 'Koramangala, Bangalore',
      distance: '2.5 km',
      timePosted: '12 mins ago',
      description: 'Urgent: Need prescribed medicines from Apollo Pharmacy',
      category: 'Medical',
      urgency: 'high',
      bids: 5,
      status: 'open'
    },
    {
      id: '3',
      userName: 'Priya Patel',
      userAvatar: 'PP',
      itemName: 'Phone Charger',
      itemCost: 599,
      bidAmount: 650,
      location: 'Indiranagar, Bangalore',
      distance: '3.1 km',
      timePosted: '25 mins ago',
      description: 'Type-C fast charger from any mobile store',
      category: 'Electronics',
      urgency: 'medium',
      bids: 2,
      status: 'open'
    },
    {
      id: '4',
      userName: 'Amit Kumar',
      userAvatar: 'AK',
      itemName: 'Birthday Cake',
      itemCost: 800,
      bidAmount: 900,
      location: 'HSR Layout, Bangalore',
      distance: '4.0 km',
      timePosted: '35 mins ago',
      description: '1kg chocolate cake from any good bakery',
      category: 'Food',
      urgency: 'medium',
      bids: 4,
      status: 'open'
    },
    {
      id: '5',
      userName: 'Neha Desai',
      userAvatar: 'ND',
      itemName: 'Stationery Items',
      itemCost: 150,
      bidAmount: 180,
      location: 'Whitefield, Bangalore',
      distance: '5.5 km',
      timePosted: '1 hour ago',
      description: 'Notebooks and pens for kids',
      category: 'Stationery',
      urgency: 'low',
      bids: 1,
      status: 'open'
    },
  ]);

  // Active orders state
  const [activeOrders, setActiveOrders] = useState([
    {
      id: 'o1',
      itemName: 'Grocery Items',
      userName: 'You',
      userAvatar: 'Y',
      partnerName: 'Rajesh Kumar',
      partnerAvatar: 'RK',
      itemCost: 450,
      deliveryBid: 60,
      location: 'Big Bazaar, MG Road',
      deliveryAddress: '123, 4th Cross, Indiranagar',
      status: 'in-progress',
      timeCreated: '25 mins ago',
      estimatedTime: '15 mins',
    },
    {
      id: 'o2',
      itemName: 'Birthday Cake',
      userName: 'Amit Kumar',
      userAvatar: 'AK',
      partnerName: 'You',
      partnerAvatar: 'Y',
      itemCost: 800,
      deliveryBid: 100,
      location: 'Sweet Treats Bakery, HSR Layout',
      deliveryAddress: '456, 2nd Main, HSR Layout',
      status: 'accepted',
      timeCreated: '10 mins ago',
      estimatedTime: '30 mins',
    },
    {
      id: 'o3',
      itemName: 'Medicines',
      userName: 'You',
      userAvatar: 'Y',
      partnerName: 'Priya Sharma',
      partnerAvatar: 'PS',
      itemCost: 280,
      deliveryBid: 40,
      location: 'Apollo Pharmacy, Koramangala',
      deliveryAddress: '789, 7th Block, Koramangala',
      status: 'delivered',
      timeCreated: '2 hours ago',
    },
  ]);

  // Search and filter state
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Modal states
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showBiddingModal, setShowBiddingModal] = useState(false);

  // Create request form state
  const [createRequestForm, setCreateRequestForm] = useState({
    itemName: '',
    description: '',
    category: 'Groceries',
    itemCost: '',
    deliveryBid: '',
    location: '',
    urgency: 'medium',
  });
  const [showCreateSuccess, setShowCreateSuccess] = useState(false);

  // Bidding modal state
  const [counterOffer, setCounterOffer] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [currentBid, setCurrentBid] = useState(0);
  const [showBiddingSuccess, setShowBiddingSuccess] = useState(false);

  // ============================================
  // HANDLER FUNCTIONS - Ready for backend integration
  // ============================================

  // Function to create a new delivery request
  const handleCreateRequest = (e) => {
    e.preventDefault();
    
    const newRequest = {
      id: Date.now().toString(),
      userName: 'You',
      userAvatar: 'Y',
      itemName: createRequestForm.itemName,
      itemCost: parseInt(createRequestForm.itemCost),
      bidAmount: parseInt(createRequestForm.deliveryBid),
      location: createRequestForm.location,
      distance: 'Nearby', // This would come from geolocation API
      timePosted: 'Just now',
      description: createRequestForm.description,
      category: createRequestForm.category,
      urgency: createRequestForm.urgency,
      bids: 0,
      status: 'open'
    };

    // TODO: Replace with API call
    // Example: await fetch('/api/requests', { method: 'POST', body: JSON.stringify(newRequest) })
    setDeliveryRequests([newRequest, ...deliveryRequests]);
    
    // Reset form and show success
    setShowCreateSuccess(true);
    setTimeout(() => {
      setShowCreateSuccess(false);
      setCreateRequestForm({
        itemName: '',
        description: '',
        category: 'Groceries',
        itemCost: '',
        deliveryBid: '',
        location: '',
        urgency: 'medium',
      });
      setCurrentView('dashboard');
    }, 2000);
  };

  // Function to handle form input changes
  const handleFormChange = (e) => {
    setCreateRequestForm({
      ...createRequestForm,
      [e.target.name]: e.target.value,
    });
  };

  // Function to open bidding modal
  const handleViewRequest = (request) => {
    setSelectedRequest(request);
    setCurrentBid(request.bidAmount);
    setChatMessages([
      {
        id: '1',
        sender: 'user',
        text: `I need ${request.itemName}. My initial bid is ₹${request.bidAmount}`,
        time: '10:30 AM',
        type: 'message',
      },
    ]);
    setShowBiddingModal(true);
  };

  // Function to send counter offer
  const handleSendCounterOffer = () => {
    if (!counterOffer) return;
    
    const amount = parseInt(counterOffer);
    const newMessage = {
      id: Date.now().toString(),
      sender: 'partner',
      text: `Counter offer: ₹${amount}`,
      time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      type: 'counter-offer',
      amount: amount,
    };
    
    // TODO: Replace with API call to send counter offer
    // Example: await fetch('/api/negotiations', { method: 'POST', body: JSON.stringify({ requestId, amount }) })
    setChatMessages([...chatMessages, newMessage]);
    setCurrentBid(amount);
    setCounterOffer('');
  };

  // Function to send chat message
  const handleSendMessage = () => {
    if (!chatMessage) return;
    
    const newMessage = {
      id: Date.now().toString(),
      sender: userStatus === 'outside' ? 'partner' : 'user',
      text: chatMessage,
      time: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }),
      type: 'message',
    };
    
    // TODO: Replace with API call (WebSocket for real-time chat)
    // Example: socket.emit('send_message', { requestId, message: newMessage })
    setChatMessages([...chatMessages, newMessage]);
    setChatMessage('');
  };

  // Function to accept deal
  const handleAcceptDeal = () => {
    // TODO: Replace with API call to create order and process payment
    // Example: await fetch('/api/orders/create', { 
    //   method: 'POST', 
    //   body: JSON.stringify({ 
    //     requestId: selectedRequest.id, 
    //     finalAmount: currentBid,
    //     paymentMethod: 'card' 
    //   }) 
    // })
    
    const newOrder = {
      id: 'o' + Date.now(),
      itemName: selectedRequest.itemName,
      userName: userStatus === 'at-home' ? 'You' : selectedRequest.userName,
      userAvatar: userStatus === 'at-home' ? 'Y' : selectedRequest.userAvatar,
      partnerName: userStatus === 'outside' ? 'You' : 'Partner Name',
      partnerAvatar: userStatus === 'outside' ? 'Y' : 'PN',
      itemCost: selectedRequest.itemCost,
      deliveryBid: currentBid,
      location: selectedRequest.location,
      deliveryAddress: 'Your Address', // Would come from user profile
      status: 'accepted',
      timeCreated: 'Just now',
      estimatedTime: '30 mins',
    };
    
    setActiveOrders([newOrder, ...activeOrders]);
    setShowBiddingSuccess(true);
    
    setTimeout(() => {
      setShowBiddingSuccess(false);
      setShowBiddingModal(false);
      setCurrentView('active-orders');
    }, 2000);
  };

  // Function to confirm delivery
  const handleConfirmDelivery = (orderId) => {
    // TODO: Replace with API call to confirm delivery and release payment
    // Example: await fetch(`/api/orders/${orderId}/confirm`, { method: 'POST' })
    
    setActiveOrders(activeOrders.map(order => 
      order.id === orderId ? { ...order, status: 'completed' } : order
    ));
    
    alert('Delivery confirmed! Payment has been released to the delivery partner.');
  };

  // Function to start delivery (for delivery partner)
  const handleStartDelivery = (orderId) => {
    // TODO: Replace with API call and start location tracking
    // Example: await fetch(`/api/orders/${orderId}/start`, { method: 'POST' })
    
    setActiveOrders(activeOrders.map(order => 
      order.id === orderId ? { ...order, status: 'in-progress' } : order
    ));
  };

  // Function to mark as delivered
  const handleMarkDelivered = (orderId) => {
    // TODO: Replace with API call
    // Example: await fetch(`/api/orders/${orderId}/delivered`, { method: 'POST' })
    
    setActiveOrders(activeOrders.map(order => 
      order.id === orderId ? { ...order, status: 'delivered' } : order
    ));
  };

  // ============================================
  // COMPONENT RENDERS
  // ============================================

  // Header Component
  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-blue-900">QuickDeliver</span>
          </div>

          {/* Desktop Navigation */}
          {isAuthenticated && (
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'dashboard'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('create-request')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'create-request'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                New Request
              </button>
              <button
                onClick={() => setCurrentView('active-orders')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentView === 'active-orders'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Active Orders
              </button>
            </nav>
          )}

          {/* User Status Toggle */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setUserStatus('at-home')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    userStatus === 'at-home'
                      ? 'bg-white text-blue-700 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span className="text-sm">At Home</span>
                </button>
                <button
                  onClick={() => setUserStatus('outside')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    userStatus === 'outside'
                      ? 'bg-white text-green-700 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Outside</span>
                </button>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isAuthenticated && (
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isAuthenticated && mobileMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                setCurrentView('create-request');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              New Request
            </button>
            <button
              onClick={() => {
                setCurrentView('active-orders');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              Active Orders
            </button>
            <div className="px-4 pt-2 border-t">
              <p className="text-xs text-gray-500 mb-2">Status</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setUserStatus('at-home')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                    userStatus === 'at-home'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span className="text-sm">At Home</span>
                </button>
                <button
                  onClick={() => setUserStatus('outside')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                    userStatus === 'outside'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Outside</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Hero Component
  const Hero = () => (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6">
            Peer-to-Peer Delivery
            <br />
            <span className="text-blue-600">Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with people nearby to get what you need delivered fast. No
            traditional couriers, just your community helping each other.
          </p>
          <button
            onClick={() => setCurrentView('dashboard')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Community Powered</h3>
            <p className="text-sm text-gray-600">
              Connect with nearby users who can help deliver your items quickly
              and efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Flexible Pricing</h3>
            <p className="text-sm text-gray-600">
              Set your own bid and negotiate directly with delivery partners for
              the best price.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Real-time Tracking</h3>
            <p className="text-sm text-gray-600">
              Track your delivery partner's location and get updates in
              real-time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-sm text-gray-600">
              Payment is held securely and released only after successful
              delivery confirmation.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              1
            </div>
            <h3 className="text-gray-900 mb-2">Create a Request</h3>
            <p className="text-sm text-gray-600">
              Post what you need and set your delivery bid amount
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              2
            </div>
            <h3 className="text-gray-900 mb-2">Negotiate & Accept</h3>
            <p className="text-sm text-gray-600">
              Available delivery partners will bid and you can negotiate the
              price
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              3
            </div>
            <h3 className="text-gray-900 mb-2">Get Delivered</h3>
            <p className="text-sm text-gray-600">
              Confirm delivery and payment is automatically released to the
              partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Component
  const Dashboard = () => {
    const categories = ['all', 'Groceries', 'Medical', 'Electronics', 'Food', 'Stationery'];

    const filteredRequests = deliveryRequests.filter((request) => {
      const matchesSearch = request.itemName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        request.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === 'all' || request.category === categoryFilter;
      return matchesSearch && matchesCategory && request.status === 'open';
    });

    const urgencyColors = {
      low: 'bg-gray-100 text-gray-700',
      medium: 'bg-yellow-100 text-yellow-700',
      high: 'bg-red-100 text-red-700',
    };

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Banner */}
        <div
          className={`rounded-lg p-4 mb-6 ${
            userStatus === 'at-home'
              ? 'bg-blue-50 border border-blue-200'
              : 'bg-green-50 border border-green-200'
          }`}
        >
          <p className="text-center">
            {userStatus === 'at-home' ? (
              <span className="text-blue-800">
                You're viewing available delivery requests in your area
              </span>
            ) : (
              <span className="text-green-800">
                You're available to accept delivery requests! Browse requests
                below to start earning.
              </span>
            )}
          </p>
        </div>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl text-gray-900 mb-2">
            {userStatus === 'at-home'
              ? 'Available Delivery Partners'
              : 'Delivery Requests Near You'}
          </h1>
          <p className="text-gray-600">
            {userStatus === 'at-home'
              ? 'Create a request and let nearby users deliver for you'
              : `${filteredRequests.length} requests available in your area`}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search requests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="pl-10 pr-8 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white min-w-[180px]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Requests Grid */}
        {filteredRequests.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-100">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    {request.userAvatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{request.userName}</p>
                    <p className="text-xs text-gray-500">{request.timePosted}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      urgencyColors[request.urgency]
                    }`}
                  >
                    {request.urgency}
                  </span>
                </div>

                {/* Item Details */}
                <div className="mb-4">
                  <h3 className="text-gray-900 mb-2">{request.itemName}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {request.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                    {request.category}
                  </span>
                </div>

                {/* Location & Distance */}
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="flex-1 truncate">{request.location}</span>
                  <span className="text-blue-600">{request.distance}</span>
                </div>

                {/* Price Info */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Item Cost</span>
                    <span className="text-gray-900">₹{request.itemCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Delivery Bid</span>
                    <span className="text-green-600">₹{request.bidAmount}</span>
                  </div>
                  <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between items-center">
                    <span className="text-sm">Total Payout</span>
                    <span className="text-blue-600">
                      ₹{request.bidAmount}
                    </span>
                  </div>
                </div>

                {/* Bids Count */}
                {request.bids > 0 && (
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <span>{request.bids} other users interested</span>
                  </div>
                )}

                {/* Action Button */}
                <button
                  onClick={() => handleViewRequest(request)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {userStatus === 'outside' ? 'Accept & Negotiate' : 'View Details'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500">No requests found matching your criteria</p>
          </div>
        )}
      </div>
    );
  };

  // Create Request Component
  const CreateRequest = () => {
    if (showCreateSuccess) {
      return (
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-2">Request Posted!</h2>
            <p className="text-gray-600">
              Nearby delivery partners will be notified about your request
            </p>
          </div>
        </div>
      );
    }

    const totalAmount = (
      parseInt(createRequestForm.itemCost || '0') + parseInt(createRequestForm.deliveryBid || '0')
    ).toString();

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <h1 className="text-2xl text-gray-900 mb-6">Create Delivery Request</h1>

          <form onSubmit={handleCreateRequest} className="space-y-6">
            {/* Item Name */}
            <div>
              <label className="block text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  Item Name
                </span>
              </label>
              <input
                type="text"
                name="itemName"
                value={createRequestForm.itemName}
                onChange={handleFormChange}
                placeholder="e.g., Grocery Items, Medicine, Phone Charger"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Description
                </span>
              </label>
              <textarea
                name="description"
                value={createRequestForm.description}
                onChange={handleFormChange}
                placeholder="Describe what you need and any specific requirements"
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Category and Urgency */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  value={createRequestForm.category}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Groceries">Groceries</option>
                  <option value="Medical">Medical</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Food">Food</option>
                  <option value="Stationery">Stationery</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Urgency</label>
                <select
                  name="urgency"
                  value={createRequestForm.urgency}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Pickup Location
                </span>
              </label>
              <input
                type="text"
                name="location"
                value={createRequestForm.location}
                onChange={handleFormChange}
                placeholder="Enter store/shop location or address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Item Cost and Delivery Bid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    Item Cost (₹)
                  </span>
                </label>
                <input
                  type="number"
                  name="itemCost"
                  value={createRequestForm.itemCost}
                  onChange={handleFormChange}
                  placeholder="e.g., 450"
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Approximate cost of the item(s)
                </p>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    Delivery Bid (₹)
                  </span>
                </label>
                <input
                  type="number"
                  name="deliveryBid"
                  value={createRequestForm.deliveryBid}
                  onChange={handleFormChange}
                  placeholder="e.g., 50"
                  required
                  min="0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Your initial bid for delivery
                </p>
              </div>
            </div>

            {/* Total Amount Info */}
            {createRequestForm.itemCost && createRequestForm.deliveryBid && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-blue-800 mb-2">
                      You will pay ₹{totalAmount} in total
                    </p>
                    <p className="text-xs text-blue-700">
                      ₹{createRequestForm.itemCost} (item cost) + ₹{createRequestForm.deliveryBid}{' '}
                      (delivery bid)
                    </p>
                    <p className="text-xs text-blue-700 mt-2">
                      Payment will be held securely until delivery is confirmed
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => setCurrentView('dashboard')}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Post Request
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Active Orders Component
  const ActiveOrders = () => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'pending':
          return 'bg-yellow-100 text-yellow-700 border-yellow-200';
        case 'accepted':
          return 'bg-blue-100 text-blue-700 border-blue-200';
        case 'in-progress':
          return 'bg-purple-100 text-purple-700 border-purple-200';
        case 'delivered':
          return 'bg-green-100 text-green-700 border-green-200';
        case 'completed':
          return 'bg-gray-100 text-gray-700 border-gray-200';
        default:
          return 'bg-gray-100 text-gray-700 border-gray-200';
      }
    };

    const getStatusText = (status) => {
      switch (status) {
        case 'pending':
          return 'Waiting for Partner';
        case 'accepted':
          return 'Partner Assigned';
        case 'in-progress':
          return 'Out for Delivery';
        case 'delivered':
          return 'Delivered - Confirm';
        case 'completed':
          return 'Completed';
        default:
          return status;
      }
    };

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl text-gray-900 mb-2">Active Orders</h1>
          <p className="text-gray-600">
            {userStatus === 'at-home'
              ? 'Track your ongoing delivery requests'
              : 'Manage your accepted delivery tasks'}
          </p>
        </div>

        {activeOrders.length > 0 ? (
          <div className="space-y-4">
            {activeOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusText(order.status)}
                  </span>
                  <span className="text-sm text-gray-500">{order.timeCreated}</span>
                </div>

                {/* Order Info */}
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h3 className="text-gray-900 mb-3">{order.itemName}</h3>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-600">Pickup</p>
                          <p className="text-gray-900">{order.location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Navigation className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-600">Delivery</p>
                          <p className="text-gray-900">{order.deliveryAddress}</p>
                        </div>
                      </div>

                      {order.estimatedTime && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">
                            ETA: {order.estimatedTime}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    {/* Partner Info */}
                    {order.partnerName && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">
                          {userStatus === 'at-home' ? 'Delivery Partner' : 'Customer'}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white">
                            {order.partnerAvatar}
                          </div>
                          <div>
                            <p className="text-gray-900">{order.partnerName}</p>
                            <p className="text-sm text-gray-500">4.8 ★ (120 deliveries)</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Price Breakdown */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Item Cost</span>
                          <span className="text-gray-900">₹{order.itemCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Delivery Fee</span>
                          <span className="text-gray-900">₹{order.deliveryBid}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between">
                          <span className="text-gray-900">Total</span>
                          <span className="text-blue-600">
                            ₹{order.itemCost + order.deliveryBid}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  {order.status === 'delivered' && userStatus === 'at-home' && (
                    <>
                      <button
                        onClick={() => handleConfirmDelivery(order.id)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Confirm Delivery
                      </button>
                      <button className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                        <XCircle className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {order.status === 'in-progress' && (
                    <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Track Live Location
                    </button>
                  )}

                  {order.status === 'accepted' && userStatus === 'outside' && (
                    <>
                      <button 
                        onClick={() => handleStartDelivery(order.id)}
                        className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Start Delivery
                      </button>
                    </>
                  )}

                  {order.status === 'in-progress' && userStatus === 'outside' && (
                    <button 
                      onClick={() => handleMarkDelivered(order.id)}
                      className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Mark as Delivered
                    </button>
                  )}

                  <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Contact {userStatus === 'at-home' ? 'Partner' : 'Customer'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-900 mb-2">No Active Orders</h3>
            <p className="text-gray-600">
              {userStatus === 'at-home'
                ? "You don't have any active delivery requests"
                : "You haven't accepted any delivery requests yet"}
            </p>
          </div>
        )}
      </div>
    );
  };

  // Bidding Modal Component
  const BiddingModal = () => {
    if (!showBiddingModal || !selectedRequest) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
          {showBiddingSuccess ? (
            <div className="flex flex-col items-center justify-center p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">Deal Accepted!</h3>
              <p className="text-gray-600 text-center">
                {userStatus === 'outside' 
                  ? "You've accepted this delivery. Please purchase and deliver the item."
                  : "Payment initiated. Your item will be delivered soon."}
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl text-gray-900">Delivery Request Details</h2>
                <button
                  onClick={() => setShowBiddingModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
                {/* Request Details */}
                <div className="p-6 border-b bg-gray-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                      {selectedRequest.userAvatar}
                    </div>
                    <div>
                      <p className="text-gray-900">{selectedRequest.userName}</p>
                      <p className="text-sm text-gray-500">{selectedRequest.timePosted}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Item</p>
                      <p className="text-gray-900">{selectedRequest.itemName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Category</p>
                      <p className="text-gray-900">{selectedRequest.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Item Cost</p>
                      <p className="text-gray-900">₹{selectedRequest.itemCost}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Current Bid</p>
                      <p className="text-green-600">₹{currentBid}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-1">Description</p>
                    <p className="text-gray-900">{selectedRequest.description}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{selectedRequest.location}</span>
                    <span className="text-blue-600 text-sm ml-auto">{selectedRequest.distance}</span>
                  </div>
                </div>

                {/* Chat/Negotiation Section */}
                <div className="p-6">
                  <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Negotiation Chat
                  </h3>

                  <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${
                          msg.sender === 'partner' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            msg.sender === 'partner'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          {msg.type === 'counter-offer' && (
                            <p className="text-xs opacity-75 mb-1">Counter Offer</p>
                          )}
                          <p className="text-sm">{msg.text}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.sender === 'partner'
                                ? 'text-blue-100'
                                : 'text-gray-500'
                            }`}
                          >
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Counter Offer Input (for delivery partner) */}
                  {userStatus === 'outside' && (
                    <div className="mb-4">
                      <label className="block text-sm text-gray-700 mb-2">
                        Send Counter Offer
                      </label>
                      <div className="flex gap-2">
                        <div className="flex-1 flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg">
                          <span className="text-gray-600">₹</span>
                          <input
                            type="number"
                            value={counterOffer}
                            onChange={(e) => setCounterOffer(e.target.value)}
                            placeholder="Enter amount"
                            className="flex-1 outline-none"
                          />
                        </div>
                        <button
                          onClick={handleSendCounterOffer}
                          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t bg-gray-50">
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowBiddingModal(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAcceptDeal}
                    className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {userStatus === 'outside' 
                      ? `Accept Deal (₹${currentBid})`
                      : `Pay & Confirm (₹${currentBid + selectedRequest.itemCost})`}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  // Main render logic
  const renderView = () => {
    if (!isAuthenticated && currentView !== 'home') {
      return <Hero />;
    }

    switch (currentView) {
      case 'home':
        return <Hero />;
      case 'dashboard':
        return <Dashboard />;
      case 'create-request':
        return <CreateRequest />;
      case 'active-orders':
        return <ActiveOrders />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{renderView()}</main>
      <BiddingModal />
    </div>
  );
}
