
import styles from "./page.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import HomeComponent from "./components/home/HomeComponent"
import About from "./components/about/About";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <HomeComponent />
        <About />
        <Services />
      </div>
    </div>
  );
}
