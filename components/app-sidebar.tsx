"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { menuItems } from '@/support/menu';



export default function AppSidebar() {
  const [activePage, setActivePage] = useState("Dashboard");

  const router = useRouter();

  return (
    <Sidebar className="border-none bg-gradient-to-b from-blue-600 to-blue-800">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header */}
      <SidebarHeader className="border-b border-indigo-500/30 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg">
            <img
              src="/glaundry.png"
              alt="Glandry Logo"
              className="w-6 h-6 object-contain"
            />
          </div>

          <div>
            <h2 className="font-bold text-lg text-white">Glaundry</h2>
            <p className="text-xs text-indigo-200">global laundry express</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Menu Items */}
      <SidebarContent className="scrollbar-hide">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.title;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      onClick={() => {  
                        setActivePage(item.title);
                        router.push(item.url);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-200 ${isActive
                        ? 'bg-white text-blue-600 shadow-lg hover:bg-white hover:text-blue-600'
                        : 'text-blue-100 hover:bg-indigo-800/50 hover:text-white'
                        }`}
                    >
                      <Icon size={22} className={isActive ? 'text-indigo-600' : ''} />
                      <span className="font-medium">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer - User Profile */}
      <SidebarFooter className="border-t border-blue-500/30 p-4">
        <div className="flex items-center gap-3 p-3 bg-blue-700/50 rounded-lg">
          <Avatar className="w-10 h-10 bg-blue-300">
            <AvatarFallback className="text-blue-800 font-bold">MU</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium text-sm text-white">Maz ulex Galaxy</p>
            <p className="text-xs text-blue-200">mazprom65@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}