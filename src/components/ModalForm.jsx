import { useState } from "react";

export default function modalform({ isOpen, onClose, mode, onSubmit }) {
  const [favoritecolor, setFavoritecolor] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);

  const handlestatuschange = (e) => {
    setStatus(e.target.value === "Active");
  };

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

          <form method="dialog" className="flex flex-col gap-3">
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="flex items-center w-full border border-gray-500 rounded-sm overflow-hidden my-0">
              <span className="px-3 py-2 bg-base-200 text-gray-200 border-r border-gray-500">
                Job
              </span>
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-base-100 text-gray-100 outline-none"
                value={job}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="flex items-center w-full border border-gray-500 rounded-sm overflow-hidden my-0">
              <span className="px-3 py-2 bg-base-200 text-gray-200 border-r border-gray-500">
                Favorite Color
              </span>
              <input
                type="text"
                className="flex-1 px-3 py-2 bg-base-100 text-gray-100 outline-none"
                value={favoritecolor}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <select
              value={status ? "Active" : "Inactive"}
              onChange={(e) => setStatus(e.target.value === 'Active')}
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
