import Link from "next/link";
import styles from "../styles/navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.links} >
            <div className={styles.logo}>
            <Link href='/'>The Goblin and Kobold</Link>
            </div>
            <Link href='/about'>About</Link>
            <Link href='/shop'>Shop</Link>
            <Link href='/quests'>Quests</Link>
        </div>
    </div>
  )
};

export default Navbar;