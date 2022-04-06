import { useState, useEffect } from 'react';
import NavItem from '@/components/NavItem';

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

function Navbar() {
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsScrollDown(true);
      } else if (window.scrollY < 50) {
        setIsScrollDown(false);
      }
    });

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__group}>
        {!isScrollDown && <h3>Get Started</h3>}
        <ul>
          <li>
            <NavItem href="#learn">
              <LearnIcon />
              Learn
            </NavItem>
          </li>
          <li>
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
          <li>
            <NavItem href="#develop">
              <DevelopIcon />
              Develop
            </NavItem>
          </li>
          <li>
            <NavItem href="#test">
              <TestIcon />
              Test
            </NavItem>
          </li>
          <li>
            <NavItem href="#secure" isSelected>
              <SecureIcon />
              Secure
            </NavItem>
          </li>
          <li>
            <NavItem href="#deploy">
              <DeployIcon />
              Deploy
            </NavItem>
          </li>
          <li>
            <NavItem href="#monitor">
              <MonitorIcon />
              Monitor
            </NavItem>
          </li>
          <li>
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
          <li>
            <NavItem href="#community">
              <CommunityIcon />
              Community
            </NavItem>
          </li>
          <li>
            <NavItem href="#market">
              <MarketIcon />
              Market
            </NavItem>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
