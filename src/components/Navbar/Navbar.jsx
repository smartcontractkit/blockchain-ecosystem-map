import { useState, useEffect } from 'react';
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
import isElementVisible from '@/helpers/isElementVisible';

function Navbar() {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [progress, setProgress] = useState(0);
  const [, setActiveSection] = useState(null); //this will be needed to know which navitem isselected

  const updateProgress = (id) => {
    const elm = document.querySelector('li#' + id);
    if (elm) {
      const nav = document.getElementById('nav');
      const navwidth = nav.offsetWidth;
      const left = Math.floor((elm.offsetLeft * 100) / navwidth);
      const navitemId = id.split('-')[0];
      console.log(navitemId);
      setProgress(left + 5);
      setActiveSection(navitemId);
      return;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (document.scrollY > 200) {
        setIsScrollDown(true);
      } else if (document.scrollY < 50) {
        setIsScrollDown(false);
      }
    };
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionsElements = Array.from(document.querySelectorAll('section'));

    const handleScroll = () => {
      const activeSectionElement = sectionsElements.find((section) => isElementVisible(section));
      if (activeSectionElement && activeSectionElement.id) {
        let id = activeSectionElement.id;
        updateProgress(`${id}-li`);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.container}>
      <nav id="nav" className={styles.navbar}>
        <div className={styles.navbar__group}>
          {!isScrollDown && <h3>Get Started</h3>}
          <ul>
            <li id="learn-li">
              <NavItem href="#learn">
                <LearnIcon />
                Learn
              </NavItem>
            </li>
            <li id="fund-li">
              <NavItem href="#fund">
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
              <NavItem href="#develop">
                <DevelopIcon />
                Develop
              </NavItem>
            </li>
            <li id="test-li">
              <NavItem href="#test">
                <TestIcon />
                Test
              </NavItem>
            </li>
            <li id="secure-li">
              <NavItem href="#secure" isSelected>
                <SecureIcon />
                Secure
              </NavItem>
            </li>
            <li id="deploy-li">
              <NavItem href="#deploy">
                <DeployIcon />
                Deploy
              </NavItem>
            </li>
            <li id="monitor-li">
              <NavItem href="#monitor">
                <MonitorIcon />
                Monitor
              </NavItem>
            </li>
            <li id="manage-li">
              <NavItem href="#manage">
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
              <NavItem href="#community">
                <CommunityIcon />
                Community
              </NavItem>
            </li>
            <li id="market-li">
              <NavItem href="#market">
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

export default Navbar;
