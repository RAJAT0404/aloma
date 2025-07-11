import React, { useState } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { User, Palette, Package, LogOut, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '@/Store/slices/authSlice'
const MyAccountCard = () => {
  const { isLoggedIn, email } = useSelector((state: { auth: { isLoggedIn: boolean; email: string | null } }) => state.auth)
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    dispatch(logout())
  }

  const toggleHoverCard = () => {
    setIsOpen(!isOpen)
  }

  const handleNav = () => {
    if(isLoggedIn){
      window.location.href = '/my-account/profile'
    }else{
      window.location.href = '/sign-in'
    }
  }

  return (
    <HoverCard openDelay={200} closeDelay={200} open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <div className='relative group'>
     
            {/* href={isLoggedIn ? "/my-account/profile" : "/sign-in"} */}
          
            <Button
               onClick={(e) => {
                 e.preventDefault()
                 handleNav()
               }}
                onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
              variant="ghost"
              size="icon"
              className={`flex items-center py-3 flex w-full max-w-max items-center hover:bg-transparent text-[#003C64] font-semibold text-sm cursor-pointer gap-1 px-2 sm:px-3 
                group-hover:text-[#0072BA] data-[state=open]:text-[#0072BA] data-[state=open]:bg-gray-100 transition-colors duration-200`}
             
            >
              <User className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-[#0072BA] data-[state=open]:text-[#0072BA] transition-colors duration-200" />
              <span className="hidden lg:inline whitespace-nowrap group-hover:text-[#0072BA] data-[state=open]:text-[#0072BA] transition-colors duration-200">{email ? email : 'My Account'}</span>
              <ChevronDown className={`h-4 w-4 ml-0 transition-transform duration-200 ${isHovered || isOpen ? 'rotate-180 ' : ''} group-hover:rotate-180 group-hover:text-[#0072BA] data-[state=open]:rotate-180 data-[state=open]:text-[#0072BA]`} />
            </Button>
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className={`w-64 bg-white shadow-lg rounded-none rounded-bl-lg rounded-br-lg overflow-hidden border-gray-200 mt-2.5 ${isLoggedIn ? 'p-0' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isLoggedIn ? (
          <>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 leading-normal break-words max-w-[240px]">
              Sign in to view your account details, saved items, and past orders
            </p>

            <Link href='/sign-in'>
              <Button
                variant="blue"
                className="w-full h-8 sm:h-9 text-xs sm:text-sm hover:bg-[#0062A3] transition-colors duration-200"
              >
                Sign In
              </Button>
            </Link>

            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-center text-gray-500 whitespace-nowrap">
              New customer? <span className="text-[#003C64] cursor-pointer hover:underline hover:text-[#0072BA] data-[state=open]:text-[#0072BA]">Start here</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-0.5 p-0">
            <div className="px-3 py-2 bg-gray-50 text-sm text-gray-700 border-b border-gray-200">
              {email}
            </div>
            <Link href="/my-account/my-designs">
              <Button
                variant="ghost"
                className="w-full justify-start h-9 sm:h-10 text-sm sm:text-base px-3 text-[#003C64] hover:bg-[#0072BA] hover:text-white data-[state=open]:text-[#0072BA] transition-colors duration-200 group gap-2"
              >
                <Palette className="w-5 h-5 transition-colors duration-200" />
                <span>My Designs</span>
              </Button>
            </Link>
            <Link href="/my-account/my-orders">
              <Button
                variant="ghost"
                className="w-full justify-start h-9 sm:h-10 text-sm sm:text-base px-3 text-[#003C64] hover:bg-[#0072BA] hover:text-white data-[state=open]:text-[#0072BA] transition-colors duration-200 group gap-2"
              >
                <Package className="w-5 h-5 transition-colors duration-200" />
                <span>My Orders</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start h-9 sm:h-10 text-sm sm:text-base px-3 text-red-500 hover:bg-red-500 hover:text-white data-[state=open]:text-red-500 transition-colors duration-200 group gap-2"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 group-hover:text-white transition-colors duration-200" />
              <span>Logout</span>
            </Button>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  )
}

export default MyAccountCard