"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Edit, Trash2 } from "lucide-react";
import { useCustomers } from "@/hooks/use-customers";
import { useLaundries } from "@/hooks/use-laundries";
import { Action, Column, DataTable } from "@/components/app-table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CreateCard, DeleteConfirm, DetailCard, UpdateCard } from "@/support/actions";
import LaundryLoading from "@/components/loading";

export default function AppLaundries() {
  const {
    data,
    loading,
    fetchAll,
    fetchById,
    createLaundry,
    updateLaundry,
    deleteLaundry,
  } = useLaundries()

  const { data: customers } = useCustomers()

  const [openCreate, setOpenCreate] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selected, setSelected] = useState<any>(null);

  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [status, setStatus] = useState(false);


  const fields =
    data && data.length > 0
      ? Object.keys(data[0]).filter(
        (k) => !["_id", "id", "createdAt", "updatedAt", "laundries", "customers", "customerId", "status"].includes(k)
      )
      : [];

  const columns: Column<any>[] = [
    { key: "jenis", label: "Jenis" },
    { key: "heft", label: "Heft" },
    { key: "count", label: "Count" },
    { key: "price", label: "Price" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${row.status
            ? "bg-green-400 text-green-700"
            : "bg-red-400 text-red-700"
            }`}
        >
          {row.status ? "Settled" : "Pay"}
        </span>
      ),
    },
  ];

  const actions: Action<any>[] = [
    {
      label: "Detail",
      icon: <Eye className="w-4 h-4" />,
      onClick: async (row) => {
        const detail = await fetchById(row._id);
        setSelected(detail);
        setOpenDetail(true);
      },
    },
    {
      label: "Edit",
      icon: <Edit className="w-4 h-4" />,
      onClick: async (row) => {
        const detail = await fetchById(row._id);
        setSelected(detail);
        setOpenEdit(true);
      },
    },
    {
      label: "Delete",
      icon: <Trash2 className="w-4 h-4" />,
      variant: "destructive",
      onClick: (row) => {
        setSelected(row);
        setOpenDelete(true);
      },
    },
  ];

  if (loading) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <LaundryLoading />
      </motion.div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  return (
    <div className="ml-72 min-h-screen bg-gray-50 p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-2"
          variants={fadeLeft}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Laundry Management
        </motion.h1>
        <motion.p
          className="text-gray-600 mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Manage laundry data more efficiently
        </motion.p>

        <DataTable
          data={data || []}
          columns={columns}
          actions={actions}
          searchPlaceholder="Search Laundry..."
          createButtonLabel="Create Laundry"
          onCreate={() => setOpenCreate(true)}
        />
      </motion.div>

      {/* CREATE */}
      <Dialog open={openCreate} onOpenChange={setOpenCreate}>
        <DialogContent
          className="
      max-w-lg w-full max-h-[85vh] rounded-2xl p-6
      bg-blue-100 backdrop-blur-xl shadow-2xl
      flex flex-col mx-auto my-12 border border-blue-200 overflow-hidden
    "
        >
          <DialogHeader className="text-center">
            <DialogTitle className="text-xl font-semibold tracking-wide text-blue-900">
              Create Laundry
            </DialogTitle>
          </DialogHeader>

          {/* scrollable content area - height limited so dialog never overflows */}
          <div
            className="flex flex-col space-y-3 overflow-y-auto pr-2"
            style={{ maxHeight: 'calc(85vh - 140px)' }} // adjust so header/footer have room
          >
            {/* Input Customer */}
            <select
              className="w-full border border-blue-300 rounded-xl p-3 bg-white shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={(e) => setSelectedCustomer(e.target.value)}
              value={selectedCustomer}
            >
              <option value="">Select Customer</option>
              {customers.map((c, i) => (
                <option key={`${c._id}-${i}`} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Checkbox styled */}
            <label className="inline-flex items-center space-x-3 mt-1 cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 rounded-lg border border-blue-300 bg-white
                     checked:bg-blue-600 checked:border-blue-600 accent-blue-600
                     focus:ring-2 focus:ring-blue-300 transition"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />
              <span className="text-sm text-blue-900 font-medium">Status Settled</span>
            </label>

            {/* CreateCard (keamanan: tidak mengubah logic di dalamnya) */}
            <div className="pt-1">
              <CreateCard
                fields={fields}
                onSubmit={async (form) => {
                  await createLaundry({
                    ...form,
                    customerId: selectedCustomer,
                    status: status,
                  });
                  setSelectedCustomer('');
                  setStatus(false);
                  setOpenCreate(false);
                }}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* DETAIL */}
      <Dialog open={openDetail} onOpenChange={setOpenDetail}>
        <DialogContent className="backdrop-blur-xl bg-blue-300 border border-blue-200 max-w-lg w-full rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle>Detail Customer</DialogTitle>
          </DialogHeader>

          {selected && <DetailCard data={selected} fieldMap={{customers: "name"}} />}
        </DialogContent>
      </Dialog>

      {/* UPDATE */}
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent
          className="
      max-w-xl w-full max-h-[85vh] overflow-y-auto rounded-2xl p-6
      bg-blue-100 backdrop-blur-xl shadow-2xl
      border border-blue-200
    "
        >
          <DialogHeader className="text-center">
            <DialogTitle className="text-lg font-semibold text-blue-900">
              Edit Laundry
            </DialogTitle>
          </DialogHeader>

          {selected && (
            <UpdateCard
              data={selected}
              hiddenFields={["customerId", "customers", 'createdAt', 'updatedAt']}
              onSubmit={async (id, form) => {
                await updateLaundry(id, form);
                await fetchAll();
                setOpenEdit(false);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* DELETE */}
      <DeleteConfirm
        id={selected?._id}
        open={openDelete}
        onOpenChange={setOpenDelete}
        onDelete={async (id) => {
          await deleteLaundry(id);
          setOpenDelete(false);
        }}
      />
    </div>
  )
}