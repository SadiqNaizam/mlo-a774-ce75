import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingBasket,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
  Circle
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href, isActive = false }) => (
  <Button
    asChild
    variant={isActive ? 'secondary' : 'ghost'}
    className={cn(
      'w-full justify-start h-10 font-medium',
      isActive
        ? 'bg-primary/10 text-primary hover:bg-primary/15'
        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
    )}
  >
    <a href={href}>
      <Icon className="mr-3 h-5 w-5" />
      {label}
    </a>
  </Button>
);

const Sidebar: React.FC = () => {
  const mainNavItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '#', isActive: true },
    { icon: Users, label: 'Leads', href: '#' },
    { icon: User, label: 'Customers', href: '#' },
    { icon: FileText, label: 'Proposals', href: '#' },
    { icon: Receipt, label: 'Invoices', href: '#' },
    { icon: ShoppingBasket, label: 'Items', href: '#' },
    { icon: Mail, label: 'Mail', href: '#' },
    { icon: Archive, label: 'Shoebox', href: '#' },
    { icon: Calendar, label: 'Calendar', href: '#' },
  ];

  const helpNavItems = [
    { icon: HelpCircle, label: 'Help', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <aside className="fixed top-0 left-0 z-20 h-screen w-64 flex-col bg-secondary p-4 border-r hidden lg:flex">
      <div className="flex items-center gap-2 mb-8 h-12 px-2">
        <div className='bg-foreground p-2 rounded-lg'>
            <Circle className='text-background fill-background h-4 w-4' />
        </div>
        <span className="font-bold text-lg text-foreground">Dashboard</span>
      </div>
      
      <nav className="flex-grow flex flex-col justify-between">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
        <div className="space-y-1">
          {helpNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
