"use client";
import React, { useActionState, useEffect } from "react";
import { ContactType } from "../_types/contact";
import { redirect } from "next/navigation";

type CreateFormProps = {
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
};
const ContactForm = ({ action, contact }: CreateFormProps) => {
  //const router = useRouter();
  const [state, formAction] = useActionState(action, null);

  useEffect(() => {
    if (state?.success) {
      redirect("/contact");
    }
  }, [state]);
  return (
    <form className="space-x-4" action={formAction}>
      <input type="hidden" name="id" value={contact?.id} />
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          defaultValue={contact?.name || ""}
          required
          className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          defaultValue={contact?.email || ""}
          required
          className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      {state?.error && (
        <div className="text-red-500 text-sm">{state.error} </div>
      )}
      <button
        type="submit"
        className="mt-3 w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
      >
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;
