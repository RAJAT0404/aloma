'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, Package, Users, LogOut, Palette } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '@/Store/slices/authSlice';

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
    
  const menuItems = [
    { icon: Users, label: 'Profile', path: '/my-account/profile' },
    { icon: Palette, label: 'My Designs', path: '/my-account/my-designs' },
    { icon: Package, label: 'My Orders', path: '/my-account/my-orders' },
    { icon: Users, label: 'Saved Addresses', path: '/my-account/saved-addresses' },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="w-64   border-r border-gray-200 flex flex-col">
      <div className="p-6 px-6 py-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">My Account</h2>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
                <Link
                  href={item.path}
                  key={index}
                  className="flex flex-col gap-4"
                >
                  <li className={`
                    w-full flex items-center space-x-3 
                    px-4 py-3 rounded-lg text-left 
                    transition-colors duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-[#0072BA] border-l-4 border-[#0072BA]' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}>
                   
                 <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </li>
                </Link>
            );
          })}
          
          <li className="pt-4">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Log Out</span>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="bg-white rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-800">Get Help</h3>
          <p className="text-sm text-gray-600">
            All of your designs are saved here for easy access. If you have any questions or need help with an order, please get in touch with us!
          </p>
          
          <div className="space-y-3">
            <button className="flex items-center space-x-3 text-[#003C64] hover:text-[#0072BA] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call (800) 620-1233</span>
            </button>
            
            <button className="flex items-center space-x-3 text-[#003C64] hover:text-[#0072BA] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Chat with an Expert</span>
            </button>
            
            <button className="flex items-center space-x-3 text-[#003C64] hover:text-[#0072BA] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;