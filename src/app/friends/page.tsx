'use client';

import { fetchAllFriends } from '@/store/friends/friends.actions';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
import { ROUTES } from '@/constants/routes';
import Button from '@/components/ui/button/button';
import { useRouter } from 'next/navigation';
import { UserCard } from '@/components/user-card';
import Link from "next/link";

const FriendsPage = () => {
  const dispatch = useAppDispatch();
  const { friends, loading, error } = useAppSelector((state) => state.friends);

  const router = useRouter();

  useEffect(() => {
    dispatch(fetchAllFriends());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!friends || friends.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-94px)]">
        <p className="text-4xl font-bold mb-4">Нет друзей?</p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => router.push(ROUTES.USERS)}
        >
          Найди по тэгу!
        </Button>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-4 gap-6">
      {friends.map((friend) => (
				<Link className="hover:scale-[1.05] transition" href={`${ROUTES.FRIENDS}/${friend.id}`} key={friend.id}>
          <UserCard {...friend} isFriend={false} />
				</Link>
      ))}
    </ul>
  );
};

export default FriendsPage;
