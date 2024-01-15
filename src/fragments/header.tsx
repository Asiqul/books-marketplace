'use client';

import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Searchbar from '@/components/ui/searchbar';
import { AlignJustify, BookHeart, ChevronRight, CircleUser, ShoppingCart, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

export const disableHeader = ['/login', '/register', '/forgot-password', '/reset-password'];

const menus = {
  Category: 'Kategori',
  Cart: 'Keranjang',
  Login: 'Masuk',
  Help: 'Bantuan',
};

const Header = () => {
  const location = usePathname();
  return (
    <header className="w-full bg-background py-2.5 drop-shadow-md fixed top-0 z-10">
      <main className="container mx-auto">
        {!disableHeader.includes(location) ? (
          <>
            <div className="grid grid-flow-col items-center justify-between mb-1 md:mb-0">
              <div className="md:hidden ">
                <Sheet>
                  <SheetTrigger className="hover:bg-accent rounded-full p-1">
                    <AlignJustify size={28} className="text-primary" />
                  </SheetTrigger>
                  <SheetContent side={'left'}>
                    <SheetHeader>
                      <SheetTitle>
                        <Logo size="text-xl" className="w-full text-center" />
                      </SheetTitle>
                      <Separator />
                      <ul className="flex flex-col gap-2 px-3 py-3 border-gray border-opacity-30">
                        {Object.entries(menus).map(([key, value]) => (
                          <li
                            key={key}
                            className="flex items-center gap-2 py-2.5 border-b-[1px] border-gray border-opacity-20 text-background-foreground hover:brightness-50 transition-all duration-200 ease-in-out cursor-pointer"
                          >
                            {value}
                            <ChevronRight className="ml-auto h-4 w-4" />
                          </li>
                        ))}
                      </ul>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>

              <Logo size="text-3xl" className="w-full" />

              <nav className="hidden md:block">
                <Popover>
                  <PopoverTrigger className="rounded-xl font-heading text-primary font-semibold text-md lg:text-lg">
                    Kategori
                  </PopoverTrigger>
                  <PopoverContent align="start" className="bg-background">
                    Place content for the popover here.
                  </PopoverContent>
                </Popover>
              </nav>

              <Searchbar className="hidden md:block col-span-4" />
              <Button variant="ghost" className="md:hidden rounded-full px-1.5">
                <ShoppingCart size={28} className="text-primary" />
              </Button>

              <Menubar className="hidden md:block border-none py-0">
                <MenubarMenu>
                  <MenubarTrigger className="rounded-full px-1.5 border-none">
                    <CircleUser size={32} className="text-primary" />
                  </MenubarTrigger>
                  <MenubarContent align="end" className="bg-background">
                    <h2 className="text-center py-1.5 text-md font-semibold text-background-foreground bg-popover rounded-md">
                      Halo, John Doe
                    </h2>
                    <MenubarSeparator />
                    <MenubarItem className="cursor-pointer">
                      <UserCircle className="mr-2 h-5 w-5" /> Akun Saya
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <ShoppingCart className="mr-2 h-5 w-5" /> Pesanan Saya
                    </MenubarItem>
                    <MenubarItem className="cursor-pointer">
                      <BookHeart className="mr-2 h-5 w-5" /> Wishlist Saya
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem className="cursor-pointer py-3">
                      <Button variant="destructive" className="w-1/2 font-semibold">
                        Logout
                      </Button>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <Searchbar className="md:hidden" />
          </>
        ) : (
          <Logo size="text-3xl" className="w-full text-center" />
        )}
      </main>
    </header>
  );
};

export default Header;
