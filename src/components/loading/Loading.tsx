import { FC } from "react";
import { ReactComponent as IconLoading } from "../../assets/loading.svg";
import "./Loading.scss";

export const Loading: FC = () => {
  return (
    <div className="loading">
      <IconLoading />
    </div>
  );
};
