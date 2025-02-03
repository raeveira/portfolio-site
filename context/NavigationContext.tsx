'use client'
import React, { createContext, useContext, useState } from 'react';
import {usePathname, useRouter} from 'next/navigation';

// Define the shape of your context
interface NavigationContextType {
  currentPath: string;
  handleNavigation: (path: string) => void;
}

const defaultValue: NavigationContextType = {
  currentPath: '/',
  handleNavigation: () => {
    console.warn('handleNavigation is not implemented');
  },
};

// Create the context with the default value
const NavigationContext = createContext<NavigationContextType>(defaultValue);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(usePathname());

  const handleNavigation = (path: string) => {
    setCurrentPath(path);
    setTimeout(() => {
      router.push(path);
    }, 300);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, handleNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
