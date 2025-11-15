"use client";

import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001/api/laundries";

export function useLaundries() {
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
      setData(json.data || []);
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
      return json.data || json;
    } catch (err) {
      throw err;
    }
  };

  const createLaundry = async (payload: any) => {
    try {
      const body = {
        customerId: payload.customerId,              
        jenis: String(payload.jenis || ""),
        heft: Number(payload.heft || 0),             
        count: Number(payload.count || 0),           
        price: Number(payload.price || 0),           
        pickupTime: Number(payload.pickupTime || 0), 
        status: Boolean(payload.status || false),    
      };


      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json();
      await fetchAll();

      return json.data;
    } catch (err) {
      throw err;
    }
  };


  const updateLaundry = async (id: string, payload: any) => {
    const body = {
      ...payload,
      heft: Number(payload.heft),
      count: Number(payload.count),
      price: Number(payload.price),
    };

    const res = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    await fetchAll();
    return (await res.json()).data;
  };



  const deleteLaundry = async (id: string) => {
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
    createLaundry,
    updateLaundry,
    deleteLaundry,
  };
}
