import { toast } from 'react-toastify';

const handleCopyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('클립보드에 URL이 복사되었습니다.');
  } catch {
    toast.error('클립보드에 복사하는 도중 오류가 발생하였습니다.');
  }
};

export { handleCopyClipBoard };
