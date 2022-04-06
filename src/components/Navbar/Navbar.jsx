import NavItem from '@/components/NavItem';
import LearnIcon from '@/icons/learn.svg';

function Navbar() {
  return (
    <header>
      <div>
        <span>Get Started</span>
        <li>
          <ul>
            <NavItem href="#learn">
              <LearnIcon />
              Learn
            </NavItem>
          </ul>
        </li>
      </div>
    </header>
  );
}

export default Navbar;
