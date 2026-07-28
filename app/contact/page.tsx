import ContactList from "../_components/ContactList";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

const ContactPage = async () => {
  const user = await getSession();
  if (!user) {
    return (
      <div>
        Please{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          login
        </a>
        to view contact
      </div>
    );
  }

  const contacts = await getContacts(user?.id);
  console.log("contact list", contacts);
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        Please{" "}
        <a href="/contact/new" className="text-blue-600 hover:underline">
          Add a Contact
        </a>
        to your contact List
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center md-6">
        <h1 className="mb-6 border-b-2 border-blue-600 pb-3 text-2xl font-bold text-gray-800">
          List of Contacts
        </h1>
        <a
          href="/contact/new"
          className="md-2-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-md shadow-md transition duration-200"
        >
          Add Contact
        </a>
      </div>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactPage;
