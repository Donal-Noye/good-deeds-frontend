"use client"

import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {useEffect} from "react";
import {getById} from "@/store/friends/friends.actions";
import {protectedPage} from "@/app/protected-page";
import {IGoodDeedBody} from "@/services/good-deeds/good-deeds.types";

const FriendPage = ({ params }: { params: { id: string } }) => {
	const dispatch = useAppDispatch();
	const { friend, loading, error } = useAppSelector((state) => state.friends);

	useEffect(() => {
		if (params.id) {
			dispatch(getById(params.id));
		}
	}, [dispatch, params.id]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	
	return (
    <div>
      {friend ? (
        <div className="space-y-6">
          <div className="space-y-1.5">
            <h1 className="text-4xl font-bold">{friend.name}</h1>
            <p className='text-xl'>{friend.email}</p>
            <p className='text-xl'>{friend.tag}</p>
          </div>
          <div>
	          <h3 className="text-3xl font-medium mb-4">Хорошие дела</h3>
	          <div className="grid grid-cols-4 gap-4">
		          {friend.goodDeeds.map((item: IGoodDeedBody, idx: number) => (
			          <div className="p-6 bg-[#1C1D22] rounded-lg" key={idx}>
				          <h3 className="text-2xl mb-2">{item.title}</h3>
				          <p className="text-sm text-neutral-300">{item.description}</p>
			          </div>
		          ))}
	          </div>
          </div>
        </div>
      ) : (
        <p>No friend details available.</p>
      )}
    </div>
  );
};

export default protectedPage(FriendPage);
