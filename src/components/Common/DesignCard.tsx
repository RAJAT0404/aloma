'use client'
import React, { useCallback } from 'react';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface DesignCardProps {
    id: number;
    title: string;
    lastSaved: string;
    front: string;
    back: string;
    type: 'hoodie' | 'tshirt';
    onDelete: (id: number) => void;
}

const DesignCard: React.FC<DesignCardProps> = ({ 
    id,
    title, 
    lastSaved, 
    front,
    back,
    onDelete 
}) => {
    const handleDelete = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        onDelete(id);
    }, [id, onDelete]);

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="relative group">
                <div className="bg-white w-full flex p-6">
                    {[front, back].map((src, index) => (
                        <div key={index} className="w-1/2 h-250 max-h-[250px] flex items-center justify-center">
                            <Image
                                src={src}
                                alt={`${index === 0 ? 'Front' : 'Back'} view of ${title}`}
                                width={200}
                                height={250}
                                className="w-full max-h-[250px] object-contain"
                                priority={false}
                            />
                        </div>
                    ))} 
                </div>

                <button 
                    onClick={handleDelete}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-50"
                    aria-label={`Delete ${title} design`}
                >
                    <Trash className="w-4 h-4 text-gray-600" />
                </button>
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 mb-4">Last Saved: {lastSaved}</p>

                <div className="flex space-x-2">
                    <Button asChild variant='blue' className="flex-1 px-4 py-2 rounded-lg text-sm font-medium">
                        <Link href={`/my-account/my-designs/RGVzaWduOjEwOTI2MzM2`}>
                            Ordering Options
                        </Link>
                    </Button>
                    <Button className="flex-1 border border-[#003C64] text-[#003C64] bg-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
                        Edit Design
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DesignCard;