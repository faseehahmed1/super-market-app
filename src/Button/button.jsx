import clsx from "clsx";
import classes from "./button.module.css";
export default function Button({ color, children, ...rest }) {

    const colorClassMap = {
        green: classes.button_green,
      };
    
      const buttonClass = clsx(classes.button, colorClassMap[color]);

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}
