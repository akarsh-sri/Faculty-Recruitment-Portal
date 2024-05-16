import classes from './TableInput.module.css';
export default function TableInput({name,identifier,disabled=false,value}){
    return (
        <div className={classes.solo}>
            <input name={identifier} placeholder={name} disabled={disabled} value={value ? value : undefined} />
        </div>
    )
}