"use client";

import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001/api/customers"; 

export function useCustomers() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_BASE);
      const json = await res.json();
      console.log(json, "data")
      setData(json.data || []); // Data ada di json.data
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchById = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`);
      const json = await res.json();
      return json.data || json; // pastikan bentuk yang dikembalikan konsisten
    } catch (err) {
      throw err;
    }
  };

  const createCustomer = async (payload: any) => {
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      await fetchAll();
      const json = await res.json();
      return json.data || json;
    } catch (err) {
      throw err;
    }
  };

  const updateCustomer = async (id: string, payload: any) => {
  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload), 
    });

    const json = await res.json();
    await fetchAll();
    return json.data || json;
  } catch (err) {
    throw err;
  }
};


  const deleteCustomer = async (id: string) => {
    try {
      await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
      });
      await fetchAll();
    } catch (err) {
      throw err;
    }
  };

  return {
    data,
    loading,
    error,
    fetchAll,
    fetchById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
  };
}
