import Users from '@/components/Users';
import React from 'react'

// Gracias a los React Server Component se puede crear facilmente esto
// sin necesidad de llamar un useEffect o UseSatate1
const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

const HomePage = async () => {
  const users = await fetchUsers();

  return <Users users={users} />
}

export default HomePage;