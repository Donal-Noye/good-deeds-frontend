import React, { useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import {
  deleteGoodDeed,
  updateGoodDeed,
} from '@/store/good-deeds/good-deeds.actions';
import { GoodDeedDialog } from '@/app/(main)/good-deeds/GoodDeedsDialog';
import { Pen, Trash } from 'lucide-react';

interface GoodDeedsCardProps {
  id: string;
  title: string;
  description: string;
}

export const GoodDeedsCard: React.FC<GoodDeedsCardProps> = ({
  id,
  title,
  description,
}) => {
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteGoodDeed(id));
  };

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSave = (updatedTitle: string, updatedDescription: string) => {
    dispatch(
      updateGoodDeed({
        id,
        data: { title: updatedTitle, description: updatedDescription },
      }),
    );
    setIsDialogOpen(false);
  };

  return (
    <li className="bg-shark rounded-xl p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex items-center justify-end gap-4">
        <button
          onClick={handleOpen}
          className="p-2 text-neutral-400 hover:text-white transition-colors"
        >
          <Pen size={20} />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 text-neutral-400 hover:text-rose-500 transition-colors"
        >
          <Trash size={20} />
        </button>
      </div>

      {isDialogOpen && (
        <GoodDeedDialog
          initialTitle={title}
          initialDescription={description}
          onClose={handleCloseDialog}
          onSave={handleSave}
          mode="edit"
        />
      )}
    </li>
  );
};
