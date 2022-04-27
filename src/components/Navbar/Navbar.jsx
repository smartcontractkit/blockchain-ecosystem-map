import { useState, useEffect } from 'react';
import NavItem from '@/components/NavItem';
import NavigationProgressBar from '@/components/NavigationProgressBar';
import chapters from '@/data/chapters';
import styles from './Navbar.module.scss';
import clsx from 'clsx';
import { useStateValue } from '@/context/StateProvider';
import NavbarItemList from '@/components/NavbarItemList';
import { useRef } from 'react';

function Navbar() {
  const ref = useRef();
  const [isScrollDown, setIsScrollDown] = useState(false);

  const [{ activeSection, progress, showShadow }] = useStateValue();

  const { get_started, development_cycle, share } = chapters;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrollDown(true);
      } else if (window.scrollY < 50) {
        setIsScrollDown(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
              <NavbarItemList id={id} key={index} navbar={ref}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  {title}
                </NavItem>
              </NavbarItemList>
            ))}
          </ul>
        </div>
        <div className={styles.navbar__group}>
          <h3>Development Cycle</h3>
          <ul>
            {development_cycle.map(({ title, id, Icon }, index) => (
              <NavbarItemList id={id} key={index} navbar={ref}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  {title}
                </NavItem>
              </NavbarItemList>
            ))}
          </ul>
        </div>

        <div className={styles.navbar__group}>
          <h3>Share</h3>
          <ul>
            {share.map(({ title, id, Icon }, index) => (
              <NavbarItemList id={id} key={index} navbar={ref}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  {title}
                </NavItem>
              </NavbarItemList>
            ))}
          </ul>
        </div>
        <NavigationProgressBar progress={progress} />
      </nav>
    </header>
  );
}

export default Navbar;
