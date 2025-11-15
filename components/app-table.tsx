"use client";

import React, { useState } from 'react';
import { Search, Plus, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface Action<T> {
  label: string;
  icon?: React.ReactNode;
  onClick: (item: T) => void;
  variant?: 'default' | 'destructive';
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  actions?: Action<T>[];
  onSearch?: (query: string) => void;
  onCreate?: () => void;
  searchPlaceholder?: string;
  createButtonLabel?: string;
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  actions = [],
  onSearch,
  onCreate,
  searchPlaceholder = "Search...",
  createButtonLabel = "Craete New Data",
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (onSearch) onSearch(value);
  };

  const filteredData = onSearch
    ? data
    : data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="relative flex-1 max-w-sm min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 rounded-full border-blue-300 focus-visible:ring-blue-500"
          />
        </div>

        {onCreate && (
          <Button onClick={onCreate} className="gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            <Plus className="w-4 h-4" />
            {createButtonLabel}
          </Button>
        )}
      </div>

      <div className="border rounded-2xl overflow-hidden shadow-sm">
        <Table className="table-fixed">
          <TableHeader>
            <TableRow className="bg-blue-200/60">
              {columns.map((column, index) => (
                <TableHead
                  key={index}
                  className="truncate font-bold text-blue-900 bg-blue-100 rounded-md py-4 text-sm"
                >
                  {column.label}
                </TableHead>
              ))}
              {actions.length > 0 && <TableHead className="w-16 bg-blue-100"></TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (actions.length > 0 ? 1 : 0)}
                  className="text-center text-gray-500 py-12 bg-blue-50"
                >
                  Tidak ada data
                </TableCell>
              </TableRow>
            ) : (
              filteredData.map((item, rowIndex) => (
                <TableRow key={rowIndex} className="hover:bg-blue-50 transition">
                  {columns.map((column, colIndex) => (
                    <TableCell
                      key={colIndex}
                      className="bg-blue-50/40 rounded-lg py-3"
                    >
                      <div className="truncate" title={String(column.render ? '' : item[column.key as keyof T])}>
                        {column.render ? column.render(item) : item[column.key as keyof T]}
                      </div>
                    </TableCell>
                  ))}

                  {actions.length > 0 && (
                    <TableCell className="bg-blue-50/40 rounded-lg">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-200 rounded-full">
                            <MoreVertical className="h-4 w-4 text-blue-800" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className=" rounded-xl shadow-md backdrop-blur-xl bg-white/30  border border-white/40">
                          {actions.map((action, actionIndex) => (
                            <DropdownMenuItem
                              key={actionIndex}
                              onClick={() => action.onClick(item)}
                              className={`${action.variant === 'destructive' ? 'text-red-600' : 'text-blue-900'} rounded-md`}
                            >
                              {action.icon && <span className="mr-2">{action.icon}</span>}
                              {action.label}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export { DataTable, type Column, type Action, type DataTableProps };
