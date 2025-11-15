import { Home, Users, WashingMachine, Code, LayoutDashboard } from 'lucide-react';

export const menuItems = [
  { title: "Home", icon: Home, url: "/" },
  { title: "Dashboard", icon: LayoutDashboard, url: "/info" },
  { title: "Customers", icon: Users, url: "/customers" },
  { title: "Laundry", icon: WashingMachine, url: "/laundries" },
  { title: "Technology", icon: Code, url: "/technology" },
];