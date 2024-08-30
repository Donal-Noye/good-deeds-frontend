import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { goodDeedSelectors } from '@/store/good-deeds/good-deeds.selector';
import { fetchGoodDeeds } from '@/store/good-deeds/good-deeds.actions';
import { GoodDeedsCard } from '@/app/(main)/good-deeds/GoodDeedsCard';
import {Spinner} from "@/components/ui/spinner";

const GoodDeedsList = () => {
  const dispatch = useAppDispatch();
  const goodDeeds = useAppSelector(goodDeedSelectors.selectGoodDeeds);
  const loading = useAppSelector(goodDeedSelectors.selectLoading);
  const error = useAppSelector(goodDeedSelectors.selectError);

  useEffect(() => {
    dispatch(fetchGoodDeeds());
  }, [dispatch]);

  if (error) return <div>Error: {error}</div>;

  return (
		<>
			{loading ? (
				<div className="flex justify-center items-center min-h-[calc(100vh-94px)]">
					<Spinner />
				</div>
			) : (
				<ul className="grid grid-cols-4 gap-6">
					{goodDeeds?.map((item) => (
						<GoodDeedsCard
							key={item.id}
							id={item.id}
							title={item.title}
							description={item.description}
						/>
					))}
				</ul>
			)}
		</>
  );
};

export default GoodDeedsList;
