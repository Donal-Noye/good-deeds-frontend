import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { fetchUserByTag } from '@/store/users/users.actions';
import Button from '@/components/ui/button/button';

interface UsersFormProps {
  onInputChange: (value: string) => void;
}

const SearchForm = ({ onInputChange }: UsersFormProps) => {
  const [tag, setTag] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tag.trim()) {
      dispatch(fetchUserByTag(tag.trim()));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTag(value);
    onInputChange(value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center gap-2 w-96">
      <input
        type="text"
        value={tag}
        onChange={handleInputChange}
        placeholder="Введите тэг, например @bob"
        className="input w-96"
      />
      <Button type="submit">Поиск</Button>
    </form>
  );
};

export default SearchForm;
