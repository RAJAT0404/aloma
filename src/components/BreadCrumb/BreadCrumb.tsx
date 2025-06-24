import React from 'react'
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const BreadCrumb = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    return (
        <div className="flex items-center text-sm text-[#0072BA] mb-6">
            <Link href="/catalog" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
                All Products
            </Link>

            {pathSegments.map((segment, index) => {
                const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
                const displayName = segment.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');

                return (
                    <React.Fragment key={index}>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <Link
                            href={href}
                            className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300"
                        >
                            {displayName}
                        </Link>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default BreadCrumb