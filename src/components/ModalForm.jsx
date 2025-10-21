export default function modalform( {isOpen, onClose, mode, onSubmit}) {
  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        open={isOpen}
        onClose={onClose}>

        <div className="modal-box">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          <form method="dialog">
            <button className="btn btn-lg btn-circle btn-ghost absolute right-2 top-2">X</button>

            <button className="btn btn-success">
                 {mode === "edit" ? "Simpan Perubahan" : "Tambah Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
