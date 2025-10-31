import { ArrowPathIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";


export default function TableList({handleOpen, onSearch}) {

  const [tabledata, setTabledata] =  useState ([]);
  const [error, setError] = useState (null);

  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await axios.get ("http://localhost:3000/api/clients"); 
        setTabledata (response.data);
      } catch (err) {
        setError (err.message);
      }
    };
    fetchData ();
  }, []);

  const filterData = tabledata.filter ((client) => 
    client.name.toLowerCase().includes(onSearch.toLowerCase()) ||
    client.email.toLowerCase().includes(onSearch.toLowerCase()) ||
    client.job.toLowerCase().includes(onSearch.toLowerCase()) ||
    client.favorite_color.toLowerCase().includes(onSearch.toLowerCase())
  );


  return (
    <>
    {error && <p className="text-red-500">Error: {error}</p>}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th className="text-center">Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="hover">
            {/* row 1 */}

            {filterData.map((client) => (
              <tr key={client.id} className="hover:bg-base-300">
                <th> {client.id} </th>
                <th>{client.name}</th>
                <th> {client.email} </th>
                <td>{client.job}</td>
                <td>{client.favorite_color}</td>
                <td className="text-center">
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isactive
                        ? "btn-primary"
                        : "btn-outline btn-primary"
                    }`}
                  >
                    {client.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button>
                    <ArrowPathIcon onClick={() => handleOpen('edit', client)} className="h-6 w-6 text-blue-500 hover:text-blue-700" />
                  </button>
                  <button>
                    <TrashIcon className="h-6 w-6 mx-2 text-red-500 hover:text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
