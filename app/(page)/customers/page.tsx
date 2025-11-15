"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Eye, Trash2 } from "lucide-react";
import { useCustomers } from "@/hooks/use-customers";
import { Action, Column, DataTable } from "@/components/app-table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CreateCard, UpdateCard, DeleteConfirm, DetailCard } from "@/support/actions";
import LaundryLoading from "@/components/loading";

export default function AppCustomers() {
  const {
    data,
    loading,
    fetchAll,
    fetchById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
  } = useCustomers();

  // State UI
  const [openCreate, setOpenCreate] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selected, setSelected] = useState<any>(null);

  const fields =
    data && data.length > 0
      ? Object.keys(data[0]).filter(
        (k) => !["_id", "id", "createdAt", "updatedAt", "customers", "laundries"].includes(k)
      )
      : [];

  const columns: Column<any>[] = [
    { key: "name", label: "Name" },
    { key: "address", label: "Address" },
    { key: "noCall", label: "Telepon" },
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

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

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
          Customers Management
        </motion.h1>
        <motion.p
          className="text-gray-600 mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Manage customer data easily
        </motion.p>

        <DataTable
          data={data || []}
          columns={columns}
          actions={actions}
          searchPlaceholder="Search customer..."
          createButtonLabel="Create New Customer"
          onCreate={() => setOpenCreate(true)}
        />
      </motion.div>

      {/* CREATE */}
      <Dialog open={openCreate} onOpenChange={setOpenCreate}>
        <DialogContent className="backdrop-blur-xl bg-blue-100 border border-blue-200 max-w-lg w-full rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
          </DialogHeader>

          <CreateCard
            fields={fields}
            onSubmit={async (form) => {
              await createCustomer(form);
              setOpenCreate(false);
            }}
          />
        </DialogContent>
      </Dialog>

      {/* DETAIL */}
      <Dialog open={openDetail} onOpenChange={setOpenDetail}>
        <DialogContent className="backdrop-blur-xl bg-blue-300 border border-blue-200 max-w-lg w-full rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle>Detail Customer</DialogTitle>
          </DialogHeader>

          {selected && <DetailCard data={selected} fieldMap={{ laundries: "jenis"}} />}
        </DialogContent>
      </Dialog>

      {/* UPDATE */}
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent
          className="
      max-w-xl w-full rounded-2xl p-8
      bg-blue-100 backdrop-blur-xl shadow-2xl border border-blue-200
      fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      max-h-[80vh] 
    "
        >
          <DialogHeader className="text-center mb-2">
            <DialogTitle className="text-lg font-semibold text-blue-900">
              Edit Customer
            </DialogTitle>
          </DialogHeader>

          {selected && (
            <UpdateCard
              data={selected}
              hiddenFields={["laundries", "createdAt", "updatedAt"]}
              onSubmit={async (id, form) => {
                await updateCustomer(id, form);
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
          await deleteCustomer(id);
          setOpenDelete(false);
        }}
      />
    </div>
  );
}
