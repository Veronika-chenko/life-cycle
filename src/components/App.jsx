import { Reader } from './Reader/Reader';
import publications from './publications.json';

export function App() {
  return (
    <>
      <Reader items={publications} />
    </>
  );
}
