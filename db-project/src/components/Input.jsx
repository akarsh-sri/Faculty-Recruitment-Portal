import classes from "./Input.module.css";
export default function Input({
  name,
  identifier,
  type,
  children,
  accept,
  disabled = false,
  label = true,
  value,
}) {
  let content = (
    <input
      type={type}
      name={identifier}
      placeholder={name}
      accept={accept}
      className={classes.input}
      disabled={disabled}
    />
  );
  if (value) {
    content = (
      <input
        type={type}
        name={identifier}
        placeholder={name}
        accept={accept}
        className={classes.input}
        disabled={disabled}
        // value={value}
        defaultValue={value}
      />
    );
  }
  if (type === "textarea") {
    content = (
      <textarea
        name={identifier}
        placeholder={name}
        rows="4"
        cols="30"
        className={classes.input}
        defaultValue={value}
      />
    );
  }
  if (type === "select") {
    content = <select className={classes.input} name={identifier} defaultValue={value}>{children}</select>;
  }
  return (
    
    <div className={classes.flex}>
      {<label name={name}>{name} </label>}
      {content}
    </div>
  );
}
