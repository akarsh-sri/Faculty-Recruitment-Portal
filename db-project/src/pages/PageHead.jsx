import classes from './Page.module.css'
export default function PageHead(){
    return (
        <div className={classes.head}>
        <div>
          <h2>भारतीय प्रौद्योगिकी संस्थान पटना</h2>
        </div>
        <div>
          <h2>Indian Institute of Technology Patna</h2>
        </div>
        <div className={classes["blink_me"]}>
          <h2>Application for Faculty Position</h2>
        </div>
      </div>
    )
}