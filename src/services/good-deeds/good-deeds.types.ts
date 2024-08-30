export interface IGoodDeedResponse {
  id: string;
  title: string;
  description: string;
  userId: string;
}

export interface IGoodDeedBody {
  title: string;
  description?: string;
}

