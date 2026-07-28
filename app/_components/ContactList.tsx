import React from "react";
import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../actions/contact";

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-md hover:shadow-lg transition-all duration-200"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold">{contact.name}</h2>
              <p>{contact.email}</p>
            </div>
            <div className="flex items-center self-center gap-3">
              <Link
                href={`/contact/edit/${contact.id}`}
                className="inline-flex items-center gap-2 rounded-md border border-blue-500 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-md transition-all duration-200"
              >
                <FiEdit className="h-4 w-4" />
                Edit
              </Link>
              <DeleteButton action={deleteContactAction} contact={contact} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
