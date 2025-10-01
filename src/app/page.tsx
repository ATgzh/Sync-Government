"use client";
import styles from "./home.module.css";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import logo from '../app/assets/purpleLogo.png'
import Card from "./components/card/Card";
import Footer from './components/footer'

export default function HomePage() {
  const router = useRouter();
  const { user } = useUser(); // Get user info from Clerk

  // Function to handle role-based redirection
  const handleNavigation = (route: string) => {
    if (!user) {
      // Redirect to sign-in if not logged in
      router.push("/auth/sign-in");
    } else {
      // Redirect authenticated users to their dashboard (handled on back end)
      router.push(route);
    }
  };

  return (
    <div className={styles.homePage}>
      {/* Main Heading */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.info}>
            <div className={styles.left}>
              <div className={styles.headerTitle}>
                <Image src={logo} alt="MNSU Logo" className={styles.img}/>
                <h1>Student Government</h1>
              </div>
              <p> Welcome to your student-led hub for advocacy, support, and connection. Connect with our student representatives and legal support network to make your voice heard.</p>
              <button className={styles.navButton} onClick={() => router.push("/student/schedule")}> Schedule</button>
            </div>

            <div className={styles.right}>
              <div className={styles.rightBoxes}>
                <h2>Senates</h2>
                <p>Ready to vote? Check out what is on the table and make your voice count where it matters.<br /> <br />Please click here to get started.</p>
                <button className={styles.navButton} onClick={() => handleNavigation("/senate/dashboard")}>Vote Now</button>
              </div>

              <div className={styles.rightBoxes}>
                <h2>Attorneys</h2>
                <p>Easily manage appointments, stay organized, and connect with students on your terms.<br /> <br />Please click here to get started.</p>
                <button className={styles.navButton} onClick={() => handleNavigation("/attorney/dashboard")}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why use our platform */}
      <div className={styles.why}>
        <div className={styles.whyTitle}>
          <h2>Why Use Our Platform?</h2>
        </div>

        <div className={styles.cards}>
          <Card title={"Students"} text={"Whether you are here to share your ideas or just learn more, we are here to listen, support, and empower your journey. Schedule your appointment today!"} path={"/student/schedule"}/>
          <Card title={"Attorneys"} text={"Easily manage appointments, stay organized, and connect with students on your terms. \n When you are ready, just click the button to get started."}  path={"/attorney/dashboard"}/>
          <Card title={"Senates"} text={"Ready to vote? Check out what is on the table and make your voice count when it matters. \n Click the button to get started."} path={"/senate/dashboard"}/>
        </div>
      </div>
      {/* Footer */}
      <Footer />

    </div>
  );
}
