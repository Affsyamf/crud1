import { useEffect, useState } from "react";

export default function ModalForm({ isOpen, onClose, mode, onSubmit, clientData }) {
  const [favoritecolor, setFavoritecolor] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  const handlestatuschange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const clientData = {
        name,
        job,
        email,
        favorite_color: favoritecolor,
        isactive: status
      };
    await onSubmit(clientData)
    onClose()
    }catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  useEffect(() => {
    if (mode === "edit" && clientData) {
      setName (clientData.name);
      setEmail (clientData.email);
      setJob (clientData.job);
      setFavoritecolor (clientData.favorite_color);
      setStatus (clientData.isactive);
    } else {
      setName ("");
      setEmail ("");    
      setJob ("");
      setFavoritecolor ("");
      setStatus (false);
    }
  }, [mode, clientData]);


  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        open={isOpen}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>

          <form onSubmit={handlesubmit} className="flex flex-col gap-3">
            <button
              className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              X
            </button>

            <label className="flex items-center w-full border border-gray-500 rounded-sm overflow-hidden my-0">
              <span className="px-3 py-2 bg-base-200 text-gray-200 border-r border-gray-500">
                Name
              </span>
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-base-100 text-gray-100 outline-none"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="flex items-center w-full border border-gray-500 rounded-sm overflow-hidden my-0">
              <span className="px-3 py-2 bg-base-200 text-gray-200 border-r border-gray-500">
                Email
              </span>
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-base-100 text-gray-100 outline-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="flex items-center w-full border border-gray-500 rounded-sm overflow-hidden my-0">
              <span className="px-3 py-2 bg-base-200 text-gray-200 border-r border-gray-500">
                Job
              </span>
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-base-100 text-gray-100 outline-none"
                required
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>
            <label className="flex items-center w-full border border-gray-500 rounded-sm overflow-hidden my-0">
              <span className="px-3 py-2 bg-base-200 text-gray-200 border-r border-gray-500">
                Favorite Color
              </span>
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-base-100 text-gray-100 outline-none"
                required
                value={favoritecolor}
                onChange={(e) => setFavoritecolor(e.target.value)}
              />
            </label>

            <select
              value={status ? "Active" : "Inactive"}
              onChange={handlestatuschange}
              className="select select-md w-fit"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button className="btn btn-info self-start mt-2">
              {mode === "edit" ? "Simpan Perubahan" : "Tambah Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
