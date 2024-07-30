import { Provider } from 'jotai';

export default function JotaiProviders({ children }: React.PropsWithChildren) {
  return <Provider>{children}</Provider>;
}
