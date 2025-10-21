import { ArrowPathIcon, TrashIcon } from '@heroicons/react/24/solid'

export default function TableList() {
   
    const clients = [{
        id: 1,
        name: "Cy Ganderton",
        job: "Quality Control Specialist",
        favoriteColor: "Blue"
    }, 
    {
    id: 2,
        name: "Hart Hagerty",
        job: "Desktop Support Technician",
        favoriteColor: "Purple"
    },
    {
    id: 3,
        name: "Brice Swyre",
        job: "Tax Accountant",
        favoriteColor: "Red"
    }
]
   
    return (
        <>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="hover">
      {/* row 1 */}

      {clients.map((client) => (
        <tr key={client.id} className="hover:bg-base-300">
        <th> {client.id} </th>
        <th>{client.name}</th>
        <td>{client.job}</td>
        <td>{client.favoriteColor}</td>
        <td>
            <button className={`btn rounded-full w-20 ${client.isactive ? 'btn-primary' : 'btn-outline btn-primary'}`}>
            {client.isactive ? 'Active' : 'Inactive'}
            </button>
        </td>
        <td>
            <button>
            <ArrowPathIcon  className="h-6 w-6 text-blue-500 hover:text-blue-700" />
            </button>
            <button>
            <TrashIcon  className="h-6 w-6 mx-2 text-red-500 hover:text-red-700" />
            </button>
        </td>
      </tr>
      ))}
        
     
    </tbody>
  </table>
</div>
        </>
    )
}