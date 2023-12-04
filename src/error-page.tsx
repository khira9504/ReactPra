import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>お探しのページは見つかりませんでした</h1>
      <a href={`/`}>トップに戻る</a>
    </div>
  );
};
