import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  title: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, className }) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 lg:left-64 right-0 z-10",
      "flex items-center justify-between h-16 px-6 border-b bg-background",
      className
    )}>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden">
           <Menu className="h-6 w-6" />
           <span className="sr-only">Toggle Sidebar</span>
        </Button>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="bg-card text-muted-foreground hidden sm:flex">
          <CalendarDays className="mr-2 h-4 w-4" />
          last 6 months
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              Create
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>New Lead</DropdownMenuItem>
            <DropdownMenuItem>New Customer</DropdownMenuItem>
            <DropdownMenuItem>New Proposal</DropdownMenuItem>
            <DropdownMenuItem>New Invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
