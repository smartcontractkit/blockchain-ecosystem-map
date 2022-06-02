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

function Navbar() {
  const ref = useRef();
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
    const handleNavWidth = () => setNavWidth(ref.current.offsetWidth);

    handleNavWidth();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleNavWidth, true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleNavWidth, true);
    };
  }, []);

  return (
    <header
      className={clsx(styles.container, {
        [styles.scrolled]: isScrollDown,
        [styles.shadow_right]: showShadow,
      })}
    >
      <nav id="nav" ref={ref} className={styles.navbar}>
        <div className={styles.navbar__group}>
          <h3>Get Started</h3>
          <ul>
            {get_started.map(({ title, id, Icon }, index) => (
              <NavbarItemList id={id} key={index} navbar={ref} navWidth={navWidth}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  <span>{title}</span>
                </NavItem>
              </NavbarItemList>
            ))}
          </ul>
        </div>
        <div className={styles.navbar__group}>
          <h3>Development Cycle</h3>
          <ul>
            {development_cycle.map(({ title, id, Icon }, index) => (
              <NavbarItemList id={id} key={index} navbar={ref} navWidth={navWidth}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  <span>{title}</span>
                </NavItem>
              </NavbarItemList>
            ))}
          </ul>
        </div>

        <div className={styles.navbar__group}>
          <h3>Share</h3>
          <ul>
            {share.map(({ title, id, Icon }, index) => (
              <NavbarItemList id={id} key={index} navbar={ref} navWidth={navWidth}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  <span>{title}</span>
                </NavItem>
              </NavbarItemList>
            ))}
          </ul>
        </div>
        <NavigationProgressBar progress={progress} />
      </nav>
      <Search />
      <a
        href={github_repo_url}
        target="_blank"
        rel="noopener noreferrer"
        title="Ecosystem Map Repository"
        className={styles.github_logo}
        id="github"
      >
        <Githublogo />
      </a>
    </header>
  );
}

export default Navbar;
