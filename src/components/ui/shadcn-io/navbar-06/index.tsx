'use client';

import * as React from 'react';
import { useEffect, useState, useRef,   } from 'react';
import {
  

  HomeIcon,
  
  SunIcon,
  MoonIcon,

  ChevronDownIcon,
} from 'lucide-react';








import { cn } from '@/lib/utils';
import { Button } from '../../button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../../avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover';
import { NavigationMenu, NavigationMenuItem,  NavigationMenuList } from '../../navigation-menu';
import { TooltipContent, TooltipProvider, TooltipTrigger } from '../../tooltip';
import { Tooltip } from '@radix-ui/react-tooltip';
import { Link } from 'react-router';



const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg width='1em' height='1em' viewBox='0 0 324 323' fill='currentColor' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect
        x='88.1023'
        y='144.792'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 88.1023 144.792)'
        fill='currentColor'
      />
      <rect
        x='85.3459'
        y='244.537'
        width='151.802'
        height='36.5788'
        rx='18.2894'
        transform='rotate(-38.5799 85.3459 244.537)'
        fill='currentColor'
      />
    </svg>
  );
};

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Theme Toggle Component
const ThemeToggle = ({ onThemeChange }: { onThemeChange?: (theme: 'light' | 'dark') => void }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (onThemeChange) onThemeChange(newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

// User Menu Component
const UserMenu = ({
  userName = 'John Doe',
  userEmail = 'john@example.com',
  userAvatar,
  onItemClick
}: {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 px-2 py-0 hover:bg-accent hover:text-accent-foreground">
        <Avatar className="h-6 w-6">
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback className="text-xs">
            {userName.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="h-3 w-3 ml-1" />
        <span className="sr-only">User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">{userName}</p>
          <p className="text-xs leading-none text-muted-foreground">
            {userEmail}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('profile')}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('settings')}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.('billing')}>
        Billing
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.('logout')}>
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Types
export interface Navbar06NavItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean }>;
  active?: boolean;
}

export interface Navbar06Language {
  value: string;
  label: string;
}

export interface Navbar06Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar06NavItem[];
  languages?: Navbar06Language[];
  defaultLanguage?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onNavItemClick?: (href: string) => void;
  onLanguageChange?: (language: string) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
  onUserItemClick?: (item: string) => void;
}

// Default navigation links with icons
const defaultNavigationLinks: Navbar06NavItem[] = [
  { href: '/books', label: 'Home', icon: HomeIcon, active: true },
  // { href: '#', label: 'Projects', icon: LayersIcon },
  // { href: '#', label: 'Documentation', icon: FileTextIcon },
  // { href: '#', label: 'Team', icon: UsersIcon },
];




export const Navbar06 = React.forwardRef<HTMLElement, Navbar06Props>(
  (
    {
      className,
      // logo = <Logo />,
      // logoHref = '#',
      navigationLinks = defaultNavigationLinks,

   

      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);


    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    return (
      <header
        ref={combinedRef}
        className={cn(
          'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline',
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-8 w-8 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navigationLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                          <NavigationMenuItem key={index} className="w-full">
                            <Link
                               to={link.href || '/'}
                              className={cn(
                                'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline',
                                link.active && 'bg-accent text-accent-foreground'
                              )}
                            >
                              <Icon
                                size={16}
                                className="text-muted-foreground"
                                aria-hidden={true}
                              />
                              <span>{link.label}</span>
                            </Link>
                          </NavigationMenuItem>
                        );
                      })}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link
               to={'/'}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >

                <span className=" font-bold text-xl sm:inline-block">Book.io</span>
              </Link>
              {/* Desktop navigation - icon only */}
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-2">
                    <TooltipProvider>
                      {navigationLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                         
                          <NavigationMenuItem key={link.label}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                               
                                  <Link 
                                    to={link.href || '/books'}
                                    
                                    className={cn(
                                      'flex size-8 items-center justify-center p-1.5 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer',
                                      link.active && 'bg-accent text-accent-foreground'
                                    )}
                                  >
                                    <Icon size={20} aria-hidden={true} />
                                    <span className="sr-only">{link.label}</span>
                                  </Link>
                               
                              </TooltipTrigger>
                              <TooltipContent
                                side="bottom"
                                className="px-2 py-1 text-xs"
                              >
                                <p>{link.label}</p>
                              </TooltipContent>
                            </Tooltip>
                          </NavigationMenuItem>
                   
                        );
                      })}
                    </TooltipProvider>
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
          {/* Right side */}

        </div>
      </header>
    );
  }
);

Navbar06.displayName = 'Navbar06';

export { Logo, HamburgerIcon, ThemeToggle, UserMenu };