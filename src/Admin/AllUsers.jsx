import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {data : users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () =>{
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })
  return (
    <div>
      <h2 className="text-3xl font-semibold my-5 text-center text-red-400">
        All Users {users.length}
      </h2>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Profile Picture
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt=""
                  />
                </th>

                <td className="px-6 py-4">Priyanka Das Dipa</td>

                <td className="px-6 py-4">priyankadipa@gmail.com</td>

                <td className="px-6 py-4">
                  <Button className="btn">Make Admin</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
