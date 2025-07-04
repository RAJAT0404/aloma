'use client'
import React, { useState, useMemo, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import Sidebar from '@/components/Common/Sidebar';
import DesignCard from '@/components/Common/DesignCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type SortOption = 'Newest' | 'Oldest' | 'A-Z' | 'Z-A';
const SORT_OPTIONS: SortOption[] = ['Newest', 'Oldest', 'A-Z', 'Z-A'];

interface Design {
    id: number;
    title: string;
    lastSaved: string;
    type: 'hoodie' | 'tshirt';
    front: string;
    back: string;
}

const DEFAULT_DESIGNS: Design[] = [
    {
        id: 1,
        title: 'Summer Vibes',
        lastSaved: 'June 25, 2025',
        type: 'hoodie',
        front:'/my-designs/front.jpg',
        back: '/my-designs/back.jpg'
    },
    {
        id: 2,
        title: 'Graphic Tee',
        lastSaved: 'May 20, 2025',
        type: 'tshirt',
        front:'/my-designs/front-red.jpg',
        back: '/my-designs/back-red.jpg',
    },
];

const DesignsDashboard = () => {
    const [sortBy, setSortBy] = useState<SortOption>('Newest');
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const [designs, setDesigns] = useState<Design[]>(DEFAULT_DESIGNS);

    const handleDeleteDesign = useCallback((id: number) => {
        setDesigns(prev => prev.filter(design => design.id !== id));
    }, []);

    const sortedDesigns = useMemo(() => {
        const designsCopy = [...designs];
        switch (sortBy) {
            case 'Oldest':
                return designsCopy.reverse();
            case 'A-Z':
                return designsCopy.sort((a, b) => a.title.localeCompare(b.title));
            case 'Z-A':
                return designsCopy.sort((a, b) => b.title.localeCompare(a.title));
            default:
                return designsCopy;
        }
    }, [designs, sortBy]);

    const toggleSortDropdown = useCallback(() => {
        setIsSortDropdownOpen(prev => !prev);
    }, []);

    const handleSortOptionClick = useCallback((option: SortOption) => {
        setSortBy(option);
        setIsSortDropdownOpen(false);
    }, []);

    return (
        <div className="flex container mx-auto">
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col">
                <header className="bg-white border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-gray-800">My Designs</h1>
                        <div className="relative">
                            <button
                                onClick={toggleSortDropdown}
                                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="text-sm font-medium">Sort By:</span>
                                <span className="text-sm">{sortBy}</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isSortDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <div className="py-2">
                                        {SORT_OPTIONS.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleSortOptionClick(option)}
                                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-6">
                    {sortedDesigns.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-6">
                            {sortedDesigns.map((design) => (
                                <DesignCard
                                    key={design.id}
                                    {...design}
                                    onDelete={() => handleDeleteDesign(design.id)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-16 text-center">
                            <div className="mb-6">
                                <Image
                                    src="/Cart/cart2.png"
                                    alt="No designs"
                                    width={100}
                                    height={100}
                                    className="mx-auto mb-4"
                                />
                                <h3 className="text-lg font-medium text-gray-600 mb-2">No designs found</h3>
                                <p className="text-gray-500">Create a new design to get started!</p>
                            </div>
                            <Button variant="blue" className="text-white px-8 py-3 rounded-lg font-medium text-base">
                                Start Designing
                            </Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default DesignsDashboard;