"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CreateCardProps {
  title?: string;
  onSubmit: (data: any) => Promise<void> | void;
}

export function CreateCard({
  title = "Add Data",
  fields = [],
  onSubmit
}: {
  title?: string;
  fields: string[];
  onSubmit: (data: any) => void;
}) {
  const [form, setForm] = useState<any>(
    Object.fromEntries(fields.map((f) => [f, ""]))
  );

  const handleChange = (key: string, value: string) =>
    setForm((prev: any) => ({ ...prev, [key]: value }));

  const handleSubmit = () => {
    const { _id, id, ...cleanForm } = form;
    onSubmit(cleanForm);
  };

  const addField = () => {
    const key = prompt("New field name:");
    if (!key) return;
    setForm((prev: any) => ({ ...prev, [key]: "" }));
  };

  return (
    <div className="space-y-6 p-5 rounded-2xl bg-blue-100 backdrop-blur-xl shadow-xl border border-blue-200">
      <h2 className="text-lg font-semibold text-blue-900">{title}</h2>

      <div className="grid grid-cols-2 gap-x-4 gap-y-7">
        {fields.map((field) => (
          <div key={field} className="flex flex-col space-y-2">
            <label className="text-xs font-medium capitalize text-blue-900">{field}</label>
            <Input
              value={String(form[field] ?? "")}
              onChange={(e) => handleChange(field, e.target.value)}
              className="bg-white h-9 text-sm rounded-xl border-blue-200 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
            />
          </div>
        ))}
      </div>

      <div className="items-center flex justify-center">
        <Button
          className="rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-300 active:scale-95"
          onClick={handleSubmit}
        >
          Create
        </Button>
      </div>
    </div>
  );
}

interface UpdateCardProps {
  title?: string;
  data: any;
  hiddenFields?: string[];
  onSubmit: (id: any, data: any) => Promise<void> | void;
}

export function UpdateCard({ title = "Edit Data", data, hiddenFields = [], onSubmit }: UpdateCardProps) {
  const [form, setForm] = useState<any>(data);

  const handleChange = (key: string, value: string) =>
    setForm((prev: any) => ({ ...prev, [key]: value }));

  const handleSubmit = async () => {
    const { _id, id, ...cleanForm } = form;
    await onSubmit(data._id || data.id, cleanForm);
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div
        className="
          w-full max-w-2xl rounded-2xl p-8
          bg-blue-100 backdrop-blur-xl border border-blue-200 shadow-2xl
          space-y-6
        "
      >
        <h2 className="text-xl font-semibold text-blue-900 text-center tracking-wide">
          {title}
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          {Object.entries(form).map(([key, value]) =>
            key === "_id" || key === "id" || hiddenFields?.includes(key) ? null : (
              <div key={key} className="flex flex-col space-y-2">
                <label className="text-sm font-medium capitalize text-blue-900">
                  {key}
                </label>
                <Input
                  value={String(value ?? "")}
                  onChange={(e) => handleChange(key, e.target.value)}
                  className="
                    bg-white h-10 text-sm rounded-xl border border-blue-200
                    focus:ring-blue-400 focus:border-blue-400
                    shadow-sm transition
                  "
                />
              </div>
            )
          )}
        </div>

        <div className="flex justify-center pt-2">
          <Button
            className="
              rounded-xl bg-blue-600 text-white px-6
              hover:bg-blue-700 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              transition-all duration-300 active:scale-95
            "
            onClick={handleSubmit}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

interface DeleteConfirmProps {
  id: any;
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onDelete: (id: any) => Promise<void> | void;
  title?: string;
  message?: string;
}

export function DeleteConfirm({
  id,
  open,
  onOpenChange,
  onDelete,
  title = "Delete Data?",
  message = "This action cannot be undone.",
}: DeleteConfirmProps) {

  const handleDelete = async () => {
    await onDelete(id);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="backdrop-blur-xl bg-blue-200 border border-blue-200 shadow-xl rounded-2xl p-6 animate-in fade-in zoom-in"
      >
        <DialogHeader>
          <DialogTitle className="text-blue-900 font-semibold text-lg">
            {title}
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-700 mt-2">{message}</p>

        <DialogFooter className="mt-6 flex gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-xl border-blue-300 text-blue-700 hover:bg-blue-200 hover:shadow-md hover:scale-110 active:scale-95 transition duration-300"
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            onClick={handleDelete}
            className="rounded-xl bg-red-600 hover:bg-red-900 hover:text-white hover:ring-4 hover:ring-red-400 hover:shadow-[0_0_20px_rgba(255,0,0,0.7)] hover:scale-125 hover:-translate-y-2 hover:rotate-1  active:scale-95 transition duration-300"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

interface DetailCardProps {
  title?: string;
  data: Record<string, any>;
  fieldMap?: Record<string, string>;
}

export function DetailCard({
  title = "Detail Data",
  data,
  fieldMap = {},
}: DetailCardProps) {
  const formatValue = (key: string, val: any) => {
    const field = fieldMap[key];

    if (Array.isArray(val)) {
      return val
        .map((item) =>
          typeof item === "object"
            ? field
              ? item?.[field] ?? `[no ${field}]`
              : JSON.stringify(item)
            : String(item)
        )
        .join(", ");
    }

    if (typeof val === "object" && val !== null) {
      return field ? val[field] ?? `[no ${field}]` : JSON.stringify(val);
    }

    return String(val);
  };

  return (
    <Card className="p-6 space-y-4 backdrop-blur-xl bg-blue-300 rounded-2xl shadow-sm border border-blue-200">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-blue-800 tracking-wide">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-1">
        {Object.entries(data).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between items-start bg-white/70 hover:bg-white transition 
                       px-4 py-2 rounded-lg border border-blue-200/50 shadow-sm"
          >
            <span className="text-sm font-semibold capitalize text-blue-700 tracking-wide">
              {key}
            </span>
            <span className="text-sm text-blue-900 max-w-[55%] text-right break-words">
              {formatValue(key, value)}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
