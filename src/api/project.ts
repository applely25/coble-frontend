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
  form.append('codeFile', code, 'workspace.xml');
  return await AuthInstance.patch(`${base}/codefile/${projectId}`, form, {
    headers: {
      'Content-Type': 'multipart/form-data', // 파일 업로드를 위한 헤더 설정
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

interface IresProjectDetail {
  description: string;
  nick_name: string;
  profile: string;
  project_url: string;
  title: string;
}
const projectDetailApi = async (
  projectId: number,
): Promise<IresProjectDetail> => {
  const { data } = await AuthInstance.get(`${base}/${projectId}`);
  return data;
};

interface projectType {
  id: number;
  image: string;
  profile: string;
  title: string;
  description: string;
  like_status: boolean;
  is_mine: boolean;
}
interface IresProjectList {
  project_list: projectType[];
  total_elements: number;
  page_number: number;
  size: number;
  last: boolean;
  total_pages: number;
}
const projectListApi = async (size: number, page: number) => {};

export {
  projectSaveApi,
  projectCodeSaveApi,
  projectInfoUpdateApi,
  projectInfoGetApi,
  projectDetailApi,
};
