import {IGoodDeedResponse} from "@/services/good-deeds/good-deeds.types";

export interface IFriendBody {
	id: string;
	name: string;
	tag: string;
	email: string;
	goodDeeds: IGoodDeedResponse[];
}