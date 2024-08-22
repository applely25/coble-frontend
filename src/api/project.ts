import { AuthInstance } from '.';

const base = 'projects';

interface IProjectSaveApi {
  image: File;
  title: string;
  description: string;
}
const projectSaveApi = async ({
  image,
  title,
  description,
}: IProjectSaveApi) => {
  const form = new FormData();
  form.append('image', image);
  form.append('title', title);
  form.append('description', description);
  return await AuthInstance.post(`${base}`, form);
};

export { projectSaveApi };
