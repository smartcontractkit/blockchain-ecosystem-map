import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NavItem from '@/components/NavItem';
import NavigationProgressBar from '@/components/NavigationProgressBar';

import styles from './Navbar.module.scss';

import LearnIcon from '@/icons/learn.svg';
import FundIcon from '@/icons/fund.svg';
import DevelopIcon from '@/icons/develop.svg';
import TestIcon from '@/icons/test.svg';
import SecureIcon from '@/icons/secure.svg';
import DeployIcon from '@/icons/deploy.svg';
import MonitorIcon from '@/icons/monitor.svg';
import ManageIcon from '@/icons/manage.svg';
import CommunityIcon from '@/icons/community.svg';
import MarketIcon from '@/icons/market.svg';

function Navbar({ activeLink }) {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null); //this will be needed to know which navitem isselected

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
    <header className={styles.container}>
      <nav id="nav" className={styles.navbar}>
        <div className={styles.navbar__group}>
          {!isScrollDown && <h3>Get Started</h3>}
          <ul>
            <li id="learn-li">
              <NavItem href="#learn" isSelected={activeSection === 'learn'}>
                <LearnIcon />
                Learn
              </NavItem>
            </li>
            <li id="fund-li">
              <NavItem href="#fund" isSelected={activeSection === 'fund'}>
                <FundIcon />
                Fund
              </NavItem>
            </li>
          </ul>
        </div>
        <div className={styles.navbar__group}>
          {!isScrollDown && <h3>Development Cycle</h3>}
          <ul>
            <li id="develop-li">
              <NavItem href="#develop" isSelected={activeSection === 'develop'}>
                <DevelopIcon />
                Develop
              </NavItem>
            </li>
            <li id="test-li">
              <NavItem href="#test" isSelected={activeSection === 'test'}>
                <TestIcon />
                Test
              </NavItem>
            </li>
            <li id="secure-li">
              <NavItem href="#secure" isSelected={activeSection === 'secure'}>
                <SecureIcon />
                Secure
              </NavItem>
            </li>
            <li id="deploy-li">
              <NavItem href="#deploy" isSelected={activeSection === 'deploy'}>
                <DeployIcon />
                Deploy
              </NavItem>
            </li>
            <li id="monitor-li">
              <NavItem href="#monitor" isSelected={activeSection === 'monitor'}>
                <MonitorIcon />
                Monitor
              </NavItem>
            </li>
            <li id="manage-li">
              <NavItem href="#manage" isSelected={activeSection === 'manage'}>
                <ManageIcon />
                Manage
              </NavItem>
            </li>
          </ul>
        </div>

        <div className={styles.navbar__group}>
          {!isScrollDown && <h3>Share</h3>}
          <ul>
            <li id="community-li">
              <NavItem href="#community" isSelected={activeSection === 'community'}>
                <CommunityIcon />
                Community
              </NavItem>
            </li>
            <li id="market-li">
              <NavItem href="#market" isSelected={activeSection === 'market'}>
                <MarketIcon />
                Market
              </NavItem>
            </li>
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
