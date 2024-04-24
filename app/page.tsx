import styles from "@/styles/home.module.css"
import bg from '@/styles/gradient.png'
import Link from "next/link"
import Canvas from "@/app/components/Canvas"

// var GradientCanv = dynamic(
//   () => import('@/app/components/canv'),
//   { ssr: false }
// )

export default function Home() {
  return (
    <>
      <Canvas />
      <div className={styles.main}>
        {/* <div className="fish">
          <h1>Hello!</h1>
          </div> */}
        <div className={styles.land}> {/* style needed for bg img to work */}
          <div className={styles.top}>
            <h1 className={styles.top_title}>WELCOME TO</h1>
          </div>

          <div className={styles.bottom}>
            <h1 className={styles.bottom_title} style={{ backgroundImage: `url(${bg.src})` }}>THE BCP SHOP</h1>
          </div>
        </div>

        <div className={styles.button_wrapper}>

          <Link className={`${styles.button} ${styles.sign_up}`} href='/sign-up'>
            Sign Up
          </Link>

          <Link className={`${styles.button} ${styles.login}`} href="/login">
            Log In
          </Link>

        </div>
        {/* <style>{`
            html,
            body {
              overflow: hidden;
            }
          `}</style> */}
      </div>
    </>
  );
}
