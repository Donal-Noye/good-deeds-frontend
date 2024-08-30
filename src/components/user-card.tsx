import Button from '@/components/ui/button/button';
import { useAppDispatch } from '@/store/hooks';
import { addFriend } from '@/store/friends/friends.actions';
import { IUserBody } from '@/services/users/users.types';

interface UsersCardProps extends IUserBody {
  friends?: { tag: string }[];
	isFriend: boolean
}

export const UserCard = ({ tag, name, email, friends, isFriend = true }: UsersCardProps) => {
  const dispatch = useAppDispatch();

  const checkFriend = friends?.some((friend) => friend.tag === tag);

  const handleAddFriend = async () => {
    if (tag) {
      dispatch(addFriend(tag));
    }
  };

  return (
    <li className="bg-shark p-6 h-36 rounded-lg flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-medium">{name}</p>
          <p className="text-sm text-neutral-400">{tag}</p>
        </div>
        {isFriend && !checkFriend && (
          <Button onClick={handleAddFriend} variant="outline">
            Добавить
          </Button>
        )}
      </div>

      <p className="mt-3">{email}</p>
    </li>
  );
};
