import { useEffect, useState } from "react";
import { ReactComponent as IconArrowTop } from "../../assets/arrow-top.svg";
import "./TopPageButton.scss";

export const TopPageButton = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const classDisplayButton: string = "show";

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    scrolled > coords ? setIsDisplay(true) : setIsDisplay(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`top-page-button ${isDisplay ? classDisplayButton : ""}`}
      onClick={handleClick}
    >
      <IconArrowTop />
    </button>
  );
};
