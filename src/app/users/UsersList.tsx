// 'use client';
//
// import { useAppDispatch, useAppSelector } from '@/store/hooks';
// import { useEffect } from 'react';
// import { UserCard } from '@/app/users/UserCard';
// import { Spinner } from '@/components/ui/spinner';
// import {IUserBody} from "@/services/users/users.types";
// import {fetchUsers} from "@/store/users/users.actions";
//
// export const UsersList = () => {
//   const dispatch = useAppDispatch();
//   const { users, loading, error } = useAppSelector((state) => state.users);
//
// 	useEffect(() => {
//     dispatch(fetchUsers());
// 	}, [dispatch]);
//
//   if (loading) {
//     return (
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 animate-spin">
//         <Spinner size={120} />
//       </div>
//     );
//   }
//
//   if (error) return <div>Error: {error}</div>;
//
//
// 	return (
//     <ul className="grid grid-cols-5 gap-4">
//       {users.map((user: IUserBody) => (
//         <UserCard
//           key={user.id}
//           id={user.id}
//           name={user.name}
//           tag={user.tag}
//           email={user.email}
//         />
//       ))}
//     </ul>
//   );
// };
