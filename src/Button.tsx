type ButtonPropsType = {
  title: string;
  onClickHandler?: () => void;
  classes?: string;
};

export const Button = ({ title, onClickHandler, classes }: ButtonPropsType) => {
  return (
    <button className={classes} onClick={onClickHandler}>
      {title}
    </button>
  );
};
