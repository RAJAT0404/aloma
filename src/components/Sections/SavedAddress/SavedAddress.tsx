'use client'
import React, { useState } from 'react';
import Sidebar from '@/components/Common/Sidebar';
import { Button } from '@/components/ui/button';
import { Trash2, Edit, Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Address {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

const SavedAddress = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: 'John Doe',
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      isDefault: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      street: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      country: 'United States',
      isDefault: false
    },
    {
      id: 3,
      name: 'Work Address',
      street: '789 Business Park',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
      country: 'United States',
      isDefault: false
    }
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<Address | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddNew = () => {
    setCurrentAddress({
      id: Date.now(),
      name: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      isDefault: addresses.length === 0
    });
    setIsEditing(false);
    setIsDialogOpen(true);
  };

  const handleEdit = (address: Address) => {
    setCurrentAddress(address);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAddress) {
      if (isEditing) {
        setAddresses(addresses.map(addr => 
          addr.id === currentAddress.id ? currentAddress : addr
        ));
      } else {
        setAddresses([...addresses, currentAddress]);
      }
      setIsDialogOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentAddress) {
      setCurrentAddress({
        ...currentAddress,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <div className="flex container mx-auto">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Saved Addresses</h1>
            <Button variant="blue" onClick={handleAddNew}>
              <Plus className="mr-2 h-4 w-4" /> Add New Address
            </Button>
          </div>

          {addresses.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-600">No saved addresses yet</h3>
                <p className="text-gray-500">Add your first address to get started</p>
                <Button variant="blue" onClick={handleAddNew}>
                  Add New Address
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((address) => (
                <div key={address.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{address.name}</h3>
                        {address.isDefault && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600">{address.street}</p>
                      <p className="text-gray-600">
                        {address.city}, {address.state} {address.zip}
                      </p>
                      <p className="text-gray-600">{address.country}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(address)}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(address.id)}
                        className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{isEditing ? 'Edit Address' : 'Add New Address'}</DialogTitle>
              </DialogHeader>
              {currentAddress && (
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={currentAddress.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="street">Street Address</Label>
                      <Input
                        id="street"
                        name="street"
                        value={currentAddress.street}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={currentAddress.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input
                        id="state"
                        name="state"
                        value={currentAddress.state}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP/Postal Code</Label>
                      <Input
                        id="zip"
                        name="zip"
                        value={currentAddress.zip}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={currentAddress.country}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="blue">
                      {isEditing ? 'Save Changes' : 'Add Address'}
                    </Button>
                  </div>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
