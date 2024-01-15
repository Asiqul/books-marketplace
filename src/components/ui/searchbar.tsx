'use client';

import { Search } from 'lucide-react';
import { Input } from './input';
import { Label } from './label';
import { Button } from './button';

const Searchbar = ({ className }: { className?: string }) => {
  return (
    <search className={className}>
      <form className="w-full relative">
        <Label htmlFor="search">
          <Search size={20} className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground" />
        </Label>
        <Input
          id="search"
          type="text"
          placeholder="Cari buku, penulis, atau penerbit"
          className="rounded-full w-full pl-10 min-h-11"
          required
          onInvalid={(e) => {
            e.currentTarget.setCustomValidity('Kata kunci tidak boleh kosong');
          }}
        />
        <Button
          type="submit"
          variant="default"
          size={'sm'}
          className="rounded-full font-heading px-4 font-semibold absolute top-1/2 -translate-y-1/2 right-2 ease-in-out duration-300"
        >
          Cari
        </Button>
      </form>
    </search>
  );
};

export default Searchbar;
