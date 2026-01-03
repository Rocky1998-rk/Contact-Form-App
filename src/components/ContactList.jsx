import axios from "axios";

const ContactList = ({ contacts, refresh }) => {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://contact-form-backend-xk3b.onrender.com/api/contacts/${id}`);
      refresh(); 
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className="mt-10">
      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">No contacts found</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-md transition p-5 relative"
            >
              {/* Delete Button */}
              <button
                onClick={() => handleDelete(c._id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg cursor-pointer"
                title="Delete"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                  {c.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    {c.name}
                  </h3>
                  <p className="text-xs text-gray-500">Contact Lead</p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  📧 <span>{c.email || "N/A"}</span>
                </p>
                <p className="flex items-center gap-2">
                  📞 <span>{c.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  📝 <span className="line-clamp-2">{c.message}</span>
                </p>
              </div>

              {/* Tag */}
              <div className="mt-4">
                <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  New
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
