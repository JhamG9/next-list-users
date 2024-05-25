import React from "react";

const getUser = async (id) => {
  const req = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await req.json();
  return data.data;
};

const UserPage = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <div className=" bg-slate-400 p-10 rounded-md">
      <img src={user.avatar} className="m-auto my-4" />
      <h1 className="text-3xl font-bold">
        {user.id} {user.first_name} {user.last_name}
      </h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserPage;
