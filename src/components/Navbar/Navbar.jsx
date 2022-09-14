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
import { SET_PROGRESS, UPDATE_NAVBAR_WIDTH } from '@/context/types';

function Navbar() {
  const navItemsRef = useRef();
  const [isScrollDown, setIsScrollDown] = useState(false);

  const [{ activeSection, progress, showShadow }, dispatch] = useStateValue();

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

    const handleNavWidth = () => {
      const width = navItemsRef.current?.offsetWidth;
      dispatch({ type: UPDATE_NAVBAR_WIDTH, payload: width });
      if (window.screen.width < 600) {
        dispatch({ type: SET_PROGRESS, payload: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleNavWidth, true);
    handleNavWidth();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleNavWidth, true);
    };
  }, [progress]);

  return (
    <header
      className={clsx(styles.container, {
        [styles.scrolled]: isScrollDown,
        [styles.shadow_right]: showShadow,
      })}
    >
      <nav id="nav" className={styles.navbar}>
        <Logo isHome={false} showBorder={progress > 0} />
        <div className={styles.progress_items_container}>
          <div ref={navItemsRef} className={styles.navbar__items}>
            <div className={styles.navbar__group}>
              <p>Get Started</p>
              <ul>
                {get_started.map(({ title, id, Icon }, index) => (
                  <NavbarItemList id={id} key={index} navItems={navItemsRef}>
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
                  <NavbarItemList id={id} key={index} navItems={navItemsRef}>
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
                  <NavbarItemList id={id} key={index} navItems={navItemsRef}>
                    <NavItem href={`#${id}`} isSelected={activeSection === id}>
                      <Icon />
                      <span>{title}</span>
                    </NavItem>
                  </NavbarItemList>
                ))}
              </ul>
            </div>
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
