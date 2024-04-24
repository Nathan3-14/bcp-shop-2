import styles from "@/styles/login/login.module.css"
import Canvas from "@/app/components/Canvas"

export default function LoginPage() {
  return (
    <>
      <Canvas colors='#f00 #ff003c #ff4242 #ff00c8'/>
      <div className={ styles.login_wrapper }>
        <div className={ styles.login_window }>
          <div className={`${ styles.login_child } ${ styles.left }`}></div>
          <div className={`${ styles.login_child } ${ styles.right }`}></div>
        </div>
      </div>
    </>
  )
}