import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavItem from '@/components/NavItem';
import NavigationProgressBar from '@/components/NavigationProgressBar';
import chapters from '@/data/chapters';
import styles from './Navbar.module.scss';
import clsx from 'clsx';

function Navbar({ activeLink }) {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null); //this will be needed to know which navitem isselected

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
    const updateProgress = (id, addedValue) => {
      /* 
      Todo:
      - Get the id of the visible section
      - Use that to identify the list item
      - Get the width of the nav
      - Get the distance of the list item from the left with respect to the nav tag (note: in this case)
      - Multiply the distance by 100 and divide by the width of the nav, thereby converting it to %
      - Using rough estimate by adding a random value to balance things
    */

      const elm = document.querySelector(`li#${id}-li`);
      if (elm) {
        const nav = document.getElementById('nav');
        const navwidth = nav.offsetWidth;
        const left = Math.floor((elm.offsetLeft * 100) / navwidth);
        setProgress(left + addedValue);
        setActiveSection(id);
        return;
      }
    };

    updateProgress(activeLink, 4.5);

    window.addEventListener(
      'resize',
      function () {
        /* In the future for responsiveness if needed we can check for screen width to know which rough value can be added */
        updateProgress(activeLink, 4.5);
      },
      true
    );

    return () => window.removeEventListener('resize', () => {});
  }, [activeLink]);

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

Navbar.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default Navbar;
