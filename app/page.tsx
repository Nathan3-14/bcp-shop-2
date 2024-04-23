import styles from "./home.module.css"
import bg from './gradient.png'
import Link from "next/link"

export default function Home() {
  return (
    <div className={ styles.main }>
      {/* <div className="fish">
        <h1>Hello!</h1>
      </div> */}
      <div className={ styles.land } style={{ backgroundImage: `url(${bg.src})` }}> {/* style needed for bg img to work */}
            <div className={ styles.top }>
                <h1 className={ styles.top_title }>WELCOME TO</h1>
            </div>

            <div className={ styles.bottom }>
                <h1 className={ styles.bottom_title } style={{ backgroundImage: `url(${bg.src})` }}>THE BCP SHOP</h1>
            </div>
        </div>

        <div className={ styles.login_wrapper }>
            <Link
                className={`${ styles.button } ${ styles.login }`}
                // onclick="window.location='./login/'"
                href="/login"
            >Log In</div>
        </div>

        <div className={ styles.sign_up_wrapper}>
            <div
                className={`${ styles.button } ${ styles.sign_up }`}
                // onclick="window.location='./login/'"
            >Sign Up</div>
        </div>

        <style>{`
          html,
          body {
            overflow: hidden;
          }
        `}</style>
    </div>
  );
}
