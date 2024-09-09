import { AuthInstance } from '.';

const base = 'likes';

const likesApi = async (projectId: number) => {
  const { data } = await AuthInstance.post(`${base}/${projectId}`);
  return data;
};

export { likesApi };
