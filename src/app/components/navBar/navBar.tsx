"use client";
import Image from "next/image";
import styles from './navBar.module.css'
import purpleLogo from '../../assets/purpleImage.png'
import { useRouter,usePathname } from "next/navigation";
import { useUser, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname()
    const { user } = useUser(); // Get user info from Clerk
    const isHome = pathname === '/'
    const showButton = pathname !== '/auth/sign-in'

  return (
    <div className={`${styles.navBar} ${isHome ? styles.whiteBg : styles.purpleBg}`}>
      {/* Home icon */}
        <div onClick={() => router.push('/')}>
          <svg
            className={styles.homeIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style={{ color: isHome ? '#3f3f3f' : '#FFFFFF'}} // purple or white
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <div style={{height: '40px', width: '1px', backgroundColor: '#ccc', margin: '0 16px', marginTop:'5px', flexShrink: 0}}
          />
      <Image src={purpleLogo} alt="MNSU Logo" className={styles.img} onClick={() => router.push('/')}/>
      {/* Profile Section at Bottom  */}
      <div className={styles.profileSection}>
        <SignedIn>
          <p>Welcome, {user?.firstName}.</p>
          <UserButton />
        </SignedIn>
        <SignedOut>
          {showButton && (<button className={styles.loginBtn} onClick={() => router.push("/auth/sign-in")}>Sign In</button>)}
        </SignedOut>
      </div>
    </div>
  );
}
