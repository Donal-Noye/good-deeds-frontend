'use client';

import { protectedPage } from '@/app/protected-page';
import GoodDeedsList from '@/app/(main)/good-deeds/GoodDeedsList';
import Button from '@/components/ui/button/button';
import { Plus } from 'lucide-react';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import React, { useState } from 'react';
import { createGoodDeed } from '@/store/good-deeds/good-deeds.actions';
import { GoodDeedDialog } from '@/app/(main)/good-deeds/GoodDeedsDialog';
import {Heading} from "@/components/ui/heading";
import {goodDeedSelectors} from "@/store/good-deeds/good-deeds.selector";

function Home() {
  const dispatch = useAppDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
	const goodDeeds = useAppSelector(goodDeedSelectors.selectGoodDeeds);

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCreate = (updatedTitle: string, updatedDescription: string) => {
    dispatch(
      createGoodDeed({
        title: updatedTitle,
        description: updatedDescription,
      }),
    );
    setIsDialogOpen(false);
  };

  return (
    <div className="">
	    <Heading title="Хорошие дела">
		    <Button onClick={handleOpen} variant="outline">
			    Создать
			    <Plus size={16} />
		    </Button>
	    </Heading>
      <GoodDeedsList />

      {isDialogOpen && (
        <GoodDeedDialog
          onClose={handleCloseDialog}
          onSave={handleCreate}
          mode="create"
        />
      )}
    </div>
  );
}

export default protectedPage(Home);
