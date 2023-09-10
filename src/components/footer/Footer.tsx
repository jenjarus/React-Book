import { FC } from "react";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__copy">©Jenjarus 2077</div>
        </div>
      </div>
    </footer>
  );
};
