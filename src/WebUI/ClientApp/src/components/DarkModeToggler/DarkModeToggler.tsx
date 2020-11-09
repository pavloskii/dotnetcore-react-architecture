import * as React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Sun, Moon } from "react-feather";

const DarkModeToggler: React.FC = () => {
  const [enabled, setEnabled] = useLocalStorage<boolean>("dark-mode-enabled", false);

  const toggleEnabled = () => {
    setEnabled(!enabled);
  };

  React.useEffect(() => {
    const className = "dark-mode";
    const body = window.document.body;

    if (enabled) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }
  }, [enabled]);

  return (
    <>
      {enabled ? (
        <Sun onClick={toggleEnabled} />
      ) : (
        <Moon onClick={toggleEnabled} />
      )}
    </>
  );
};

export default DarkModeToggler;
