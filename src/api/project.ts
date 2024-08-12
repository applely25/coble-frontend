import { AuthInstance } from '.';

const base = 'projects';
const projectSaveApi = async (file: File, title: string, description) => {
  const form = new FormData();
  form.append('image');
  const response = await AuthInstance.post(`${base}`);
};
