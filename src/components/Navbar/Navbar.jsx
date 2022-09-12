import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import NavItem from '@/components/NavItem';
import NavigationProgressBar from '@/components/NavigationProgressBar';
import chapters from '@/data/chapters';
import styles from './Navbar.module.scss';
import { useStateValue } from '@/context/StateProvider';
import NavbarItemList from '@/components/NavbarItemList';
import Githublogo from '@/icons/github-logo.svg';
import Search from '@/components/Search';
import Logo from '../Logo';

function Navbar() {
  const navItemsRef = useRef();
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [navWidth, setNavWidth] = useState(0);

  const [{ activeSection, progress, showShadow }] = useStateValue();

  const { get_started, development_cycle, share } = chapters;

  const github_repo_url = process.env.GITHUB_REPO_URL || '#';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrollDown(true);
      } else if (window.scrollY < 50) {
        setIsScrollDown(false);
      }
    };

    const handleNavWidth = () => setNavWidth(navItemsRef.current.offsetWidth);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleNavWidth, true);
    window.addEventListener('load', handleNavWidth, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleNavWidth, true);
      window.removeEventListener('load', handleNavWidth, true);
    };
  }, []);

  return (
    <header
      className={clsx(styles.container, {
        [styles.scrolled]: isScrollDown,
        [styles.shadow_right]: showShadow,
      })}
    >
      <nav id="nav" className={styles.navbar}>
        <Logo isHome={false} showBorder={progress > 0} />
        <div ref={navItemsRef} className={styles.navbar__items}>
          <div className={styles.navbar__group}>
            <p>Get Started</p>
            <ul>
              {get_started.map(({ title, id, Icon }, index) => (
                <NavbarItemList id={id} key={index} navWidth={navWidth} navItems={navItemsRef}>
                  <NavItem href={`#${id}`} isSelected={activeSection === id}>
                    <Icon />
                    <span>{title}</span>
                  </NavItem>
                </NavbarItemList>
              ))}
            </ul>
          </div>
          <div className={styles.navbar__group}>
            <p>Development Cycle</p>
            <ul>
              {development_cycle.map(({ title, id, Icon }, index) => (
                <NavbarItemList id={id} key={index} navWidth={navWidth} navItems={navItemsRef}>
                  <NavItem href={`#${id}`} isSelected={activeSection === id}>
                    <Icon />
                    <span>{title}</span>
                  </NavItem>
                </NavbarItemList>
              ))}
            </ul>
          </div>

          <div className={styles.navbar__group}>
            <p>Share</p>
            <ul>
              {share.map(({ title, id, Icon }, index) => (
                <NavbarItemList id={id} key={index} navWidth={navWidth} navItems={navItemsRef}>
                  <NavItem href={`#${id}`} isSelected={activeSection === id}>
                    <Icon />
                    <span>{title}</span>
                  </NavItem>
                </NavbarItemList>
              ))}
            </ul>
          </div>
          <NavigationProgressBar progress={progress} />
        </div>
      </nav>
      <Search />
      <a
        href={github_repo_url}
        target="_blank"
        rel="noopener noreferrer"
        title="Blockchain ecosystem Repository"
        className={styles.github_logo}
        id="github"
      >
        <Githublogo />
      </a>
    </header>
  );
}

export default Navbar;
