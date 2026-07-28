"use client";
import React, { useActionState } from "react";
import { ContactType } from "../_types/contact";

import { FiTrash2 } from "react-icons/fi";

type DeleteButtonProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact: ContactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
  const [state, formAction] = useActionState(action, null);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={contact.id} />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md border border-red-500 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 shadow-sm transition-all duration-200 hover:bg-red-600 hover:text-white hover:shadow-md"
        onClick={(e) => {
          if (!confirm("Are you sure you want to delete this contact ! ")) {
            e.preventDefault();
          }
        }}
      >
        <FiTrash2 className="h-4 w-4" /> Delete
      </button>
    </form>
  );
};

export default DeleteButton;
