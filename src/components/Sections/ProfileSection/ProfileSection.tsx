'use client'
import Sidebar from '@/components/Common/Sidebar';
import { Button } from '@/components/ui/button';
import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { KeyIcon, PencilIcon, ShieldCheckIcon, TrashIcon, ToggleLeft, ToggleRight, CameraIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { DocumentTextIcon } from '@sanity/icons';
import { useSelector } from 'react-redux'

interface ProfileSectionProps {
  [key: string]: never;
}

const ProfileSection: React.FC<ProfileSectionProps> = () => {
  const { email } = useSelector((state: { auth: {email: string | null } }) => state.auth);
  
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isDeactivateOpen, setIsDeactivateOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: email,
    phone: '+1 (555) 123-4567',
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: false
  });

  const getInitialsFromEmail = useCallback((email: string | null) => {
    return email?.split('@')[0].charAt(0).toUpperCase() || '';
  }, []);

  const extractNameFromEmail = useCallback((email: string) => {
    return email.split('@')[0];
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  }, []);

  const toggleNotification = useCallback((type: 'email' | 'push') => {
    setNotifications(prev => ({ ...prev, [type]: !prev[type] }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsEditOpen(false);
  }, []);

  const handlePasswordSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsPasswordOpen(false);
  }, []);

  const handleDeactivate = useCallback(() => {
    setIsDeactivateOpen(false);
  }, []);

  return (
    <div className="flex container mx-auto">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile Settings</h1>
            <p className="text-gray-500">Manage your personal information and account preferences</p>
          </div>

          <div className="flex flex-col gap-8">
            {/* User Profile Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 py-8 col-span-1 text-center sm:text-left">
              <div className="flex flex-col items-center gap-6 mb-8 sm:flex-row sm:gap-8">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#003C64] to-[#0072BA] flex items-center justify-center text-4xl sm:text-5xl font-bold text-white shadow-lg">
                    {getInitialsFromEmail(email)}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 sm:p-2 shadow-md hover:bg-gray-100 transition-colors">
                    <CameraIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0072BA]" />
                  </button>
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{email ? extractNameFromEmail(email) : ''}</h2>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-600">
                    <MailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p>{formData.email}</p>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base text-gray-500">
                    <PhoneIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <p>{formData.phone}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto h-11 sm:h-12 px-4 sm:px-8 text-sm sm:text-base">
                      <PencilIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] sm:max-w-[600px] p-4 sm:p-8">
                    <DialogHeader className="mb-4 sm:mb-6">
                      <DialogTitle className="text-2xl sm:text-3xl">Edit Profile</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base sm:text-lg">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="h-12 sm:h-14 text-base sm:text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base sm:text-lg">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email || ''}
                          onChange={handleInputChange}
                          className="h-12 sm:h-14 text-base sm:text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base sm:text-lg">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="h-12 sm:h-14 text-base sm:text-lg"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-6 sm:pt-8">
                        <Button 
                          variant="outline" 
                          onClick={() => setIsEditOpen(false)}
                          className="h-11 sm:h-12 px-4 sm:px-8 text-sm sm:text-lg hover:bg-gray-100"
                        >
                          Cancel
                        </Button>
                        <Button 
                          variant='blue'
                          type="submit"
                          className="h-11 sm:h-12 px-4 sm:px-8 text-sm sm:text-lg"
                        >
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>

                <Dialog open={isPasswordOpen} onOpenChange={setIsPasswordOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto h-11 sm:h-12 px-4 sm:px-8 text-sm sm:text-base">
                      <KeyIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" />
                      Change Password
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] sm:max-w-[600px] p-4 sm:p-8">
                    <DialogHeader className="mb-4 sm:mb-6">
                      <DialogTitle className="text-2xl sm:text-3xl">Change Password</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handlePasswordSubmit} className="space-y-6 sm:space-y-8">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword" className="text-base sm:text-lg">Current Password</Label>
                        <Input
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                          className="h-12 sm:h-14 text-base sm:text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword" className="text-base sm:text-lg">New Password</Label>
                        <Input
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                          className="h-12 sm:h-14 text-base sm:text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-base sm:text-lg">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={passwordData.confirmPassword}
                          onChange={handlePasswordChange}
                          className="h-12 sm:h-14 text-base sm:text-lg"
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-6 sm:pt-8">
                        <Button 
                          variant="outline" 
                          onClick={() => setIsPasswordOpen(false)}
                          className="h-11 sm:h-12 px-4 sm:px-8 text-sm sm:text-lg hover:bg-gray-100"
                        >
                          Cancel
                        </Button>
                        <Button 
                          variant='blue'
                          type="submit"
                          className="h-11 sm:h-12 px-4 sm:px-8 text-sm sm:text-lg"
                        >
                          Update Password
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Account Settings Section */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 col-span-3">
              <h2 className="text-2xl font-semibold mb-8">Account Settings</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div 
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleNotification('email')}
                    >
                      <div>
                        <span className="block font-medium">Email Notifications</span>
                        <span className="text-sm text-gray-500">Receive important updates via email</span>
                      </div>
                      {notifications.email ? (
                        <ToggleRight className="w-6 h-6 text-blue-600" />
                      ) : (
                        <ToggleLeft className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div 
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleNotification('push')}
                    >
                      <div>
                        <span className="block font-medium">Push Notifications</span>
                        <span className="text-sm text-gray-500">Get instant alerts on your device</span>
                      </div>
                      {notifications.push ? (
                        <ToggleRight className="w-6 h-6 text-blue-600" />
                      ) : (
                        <ToggleLeft className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-lg mb-4">Security & Privacy</h3>
                  <p className="text-gray-600 mb-6">
                    Your credentials are securely stored and encrypted with industry-standard protocols. 
                    You can update your security settings anytime.
                  </p>
                  <div className="flex space-x-6">
                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                      <ShieldCheckIcon className="w-5 h-5 mr-2" />
                      Privacy Policy
                    </a>
                    <a href="#" className="text-blue-600 hover:underline flex items-center">
                      <DocumentTextIcon className="w-5 h-5 mr-2" />
                      Terms of Service
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Dialog open={isDeactivateOpen} onOpenChange={setIsDeactivateOpen}>
                    <DialogTrigger asChild>
                      <Button variant="destructive" className="h-11 px-6 text-base">
                        <TrashIcon className="w-5 h-5 mr-2" />
                        Deactivate Account
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Deactivate Account</DialogTitle>
                      </DialogHeader>
                      <div className="py-4">
                        <p className="text-gray-600 mb-6">
                          Are you sure you want to deactivate your account? This action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-4">
                          <Button variant="outline" onClick={() => setIsDeactivateOpen(false)}>
                            Cancel
                          </Button>
                          <Button variant="destructive" onClick={handleDeactivate}>
                            Confirm Deactivation
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
