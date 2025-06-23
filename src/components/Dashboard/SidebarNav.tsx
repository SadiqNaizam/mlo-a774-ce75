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
  Menu,
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
      'w-full justify-start h-10',
      isActive && 'bg-blue-100 text-primary hover:bg-blue-100',
      !isActive && 'text-gray-600 hover:bg-gray-200 hover:text-gray-900'
    )}
  >
    <a href={href}>
      <Icon className="mr-3 h-5 w-5" />
      {label}
    </a>
  </Button>
);

const SidebarNav: React.FC = () => {
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
    <aside className="w-64 flex flex-col h-screen bg-secondary p-4 border-r fixed">
      <div className="flex items-center gap-3 mb-8">
        <Button variant="ghost" size="icon" className="lg:hidden">
           <Menu className="h-6 w-6" />
        </Button>
        <div className="flex items-center gap-2">
            <div className='bg-black p-2 rounded-lg'>
                <Circle className='text-white fill-white' />
            </div>
            <span className="sr-only">Logo</span>
        </div>
      </div>
      
      <nav className="flex-grow flex flex-col">
        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
        <div className="mt-auto space-y-1">
          {helpNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default SidebarNav;
