import ContactForm from "@/app/_components/ContactForm";
import { updateContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import React, { use } from "react";

const EditContactPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const contact = use(getContactById(id));
  console.log("contact info", contact);

  return (
    <div className="max-w-md mx-auto p-6 bg-whilte rounded-lg shadow-md">
      <h1 className="text-2xl fontbold m-6">Edit Contact</h1>
      <ContactForm action={updateContactAction} contact={contact} />
    </div>
  );
};

export default EditContactPage;
