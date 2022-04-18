import { useState, useEffect } from 'react';
import NavItem from '@/components/NavItem';
import NavigationProgressBar from '@/components/NavigationProgressBar';
import chapters from '@/data/chapters';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

function Navbar() {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [progress] = useState(0);
  const [activeSection] = useState(null); //this will be needed to know which navitem isselected

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

  useEffect(() => {
    // const updateProgress = (id, addedValue) => {

    //   const elm = document.querySelector(`li#${id}-li`);
    //   if (elm) {
    //     const nav = document.getElementById('nav');
    //     const navwidth = nav.offsetWidth;
    //     const left = Math.floor((elm.offsetLeft * 100) / navwidth);
    //     setProgress(left + addedValue);
    //     setActiveSection(id);
    //     return;
    //   }
    // };

    // updateProgress(activeLink, 4.5);

    window.addEventListener(
      'resize',
      function () {
        /* In the future for responsiveness if needed we can check for screen width to know which rough value can be added */
        // updateProgress(activeLink, 4.5);
      },
      true
    );

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <header className={clsx(styles.container, { [styles.scrolled]: isScrollDown })}>
      <nav id="nav" className={styles.navbar}>
        <div className={styles.navbar__group}>
          <h3>Get Started</h3>
          <ul>
            {get_started.map(({ title, id, Icon }, index) => (
              <li id={`${id}-li`} key={index}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  {title}
                </NavItem>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.navbar__group}>
          <h3>Development Cycle</h3>
          <ul>
            {development_cycle.map(({ title, id, Icon }, index) => (
              <li id={`${id}-li`} key={index}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  {title}
                </NavItem>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.navbar__group}>
          <h3>Share</h3>
          <ul>
            {share.map(({ title, id, Icon }, index) => (
              <li id={`${id}-li`} key={index}>
                <NavItem href={`#${id}`} isSelected={activeSection === id}>
                  <Icon />
                  {title}
                </NavItem>
              </li>
            ))}
          </ul>
        </div>
        <NavigationProgressBar progress={progress} />
      </nav>
    </header>
  );
}

export default Navbar;
