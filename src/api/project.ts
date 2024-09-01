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

interface IProjectCodeSaveApi {
  projectId: number;
  code: Blob;
}
const projectCodeSaveApi = async ({ projectId, code }: IProjectCodeSaveApi) => {
  const form = new FormData();
  form.append('code_file', code);
  return await AuthInstance.patch(`${base}/codefile/${projectId}`, form, {
    validateStatus: function (status) {
      return status >= 200 && status < 300; // default
    },
  });
};

interface IProjectInfoUpdateApi extends IProjectSaveApi {
  projectId: number;
}
const projectInfoUpdateApi = async ({
  image,
  title,
  description,
  projectId,
}: IProjectInfoUpdateApi) => {
  const form = new FormData();
  form.append('image', image);
  form.append('title', title);
  form.append('description', description);
  return await AuthInstance.post(`${base}/info/${projectId}`, form);
};

interface IresProjectInfoGetApi {
  id: number;
  image: string;
  title: string;
  description: string;
}
const projectInfoGetApi = async (
  projectId: number,
): Promise<IresProjectInfoGetApi> => {
  const { data } = await AuthInstance.get(`${base}/info/${projectId}`);
  return data;
};

export {
  projectSaveApi,
  projectCodeSaveApi,
  projectInfoUpdateApi,
  projectInfoGetApi,
};
