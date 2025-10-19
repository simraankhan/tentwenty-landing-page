import { navItems } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { ArrowRight, Menu } from 'lucide-react'
import { Button } from './ui/button'

const NavItems = navItems.map(({ href, id, title }) => (
    <Link key={id} href={href}>
        {title}
    </Link>
))
const Navbar = () => {
    return (
        <nav>
            <div className='p-3 bg-white flex items-center'>
                <Drawer direction='left'>
                    <DrawerTrigger className='flex-1 sm:hidden'>
                        <Menu className='text-gray-500' />
                    </DrawerTrigger>
                    <DrawerContent className='w-1/2!'>
                        <DrawerTitle></DrawerTitle>
                        <DrawerHeader className='flex flex-col flex-1 justify-evenly'>
                            {NavItems}
                        </DrawerHeader>
                    </DrawerContent>
                </Drawer>
                <div className='hidden sm:flex flex-1 gap-x-3'>
                    {NavItems}
                </div>
                <Button variant={"outline"} className='flex items-center gap-x-3 px-3 py-2 border border-black'>
                    <Link href={"/contact-us"}>
                        Contact us
                    </Link>
                    <ArrowRight />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar

