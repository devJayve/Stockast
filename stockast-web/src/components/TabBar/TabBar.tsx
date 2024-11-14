import {
  Children,
  isValidElement,
  cloneElement,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import { TabBarProps, TabProps } from '../../types/TabBar.types';

interface TabBarContextType {
  selectedTab: number;
  onTabChange: (index: number) => void;
}

const TabBarContext = createContext<TabBarContextType | null>(null);

const useTabBarContext = () => {
  const context = useContext(TabBarContext);
  if (!context) {
    throw new Error('Tab components must be used within a TabBar');
  }
  return context;
};

const TabBarProvider = ({
  selectedTab,
  onTabChange,
  children,
}: TabBarProps) => {
  return (
    <TabBarContext.Provider value={{ selectedTab, onTabChange }}>
      <div>{children}</div>
    </TabBarContext.Provider>
  );
};

const TabBar = ({
  children,
  selectedTab,
  onTabChange,
  hasUnderline = false,
  hasBackground = false,
}: TabBarProps) => {
  return (
    <TabBarProvider selectedTab={selectedTab} onTabChange={onTabChange}>
      <div
        className={clsx(
          'flex space-x-2',
          hasUnderline && 'relative border-b border-neutral-400',
          hasBackground && 'rounded-lg bg-neutral-800 p-1'
        )}
      >
        {children}
      </div>
    </TabBarProvider>
  );
};

const CircleTab = ({ label, value }: TabProps) => {
  const { selectedTab, onTabChange } = useTabBarContext();
  const isActive = selectedTab == value;

  return (
    <button
      className={clsx(
        'rounded-full px-3 py-1.5 text-neutral-200',
        isActive && 'bg-neutral-800 font-semibold text-white'
      )}
      onClick={() => onTabChange(value)}
    >
      {label}
    </button>
  );
};

const UnderlineTab = ({ label, value }: TabProps) => {
  const { selectedTab, onTabChange } = useTabBarContext();
  const isActive = selectedTab == value;

  return (
    <button
      className={clsx(
        'relative py-2 text-center text-neutral-200',
        isActive && 'font-semibold'
      )}
      onClick={() => onTabChange(value)}
    >
      {label}
      {isActive && (
        <div className='absolute bottom-[-1px] left-0 z-10 h-1 w-full rounded-full bg-white' />
      )}
    </button>
  );
};

const InterfaceTab = ({
  label,
  value,
  activeColor = `bg-neutral-600 text-white font-semibold`,
}: TabProps) => {
  const { selectedTab, onTabChange } = useTabBarContext();
  const isActive = selectedTab == value;

  return (
    <button
      className={clsx(
        'flex-grow rounded-lg py-2 text-center text-neutral-200 transition-colors',
        isActive && activeColor
      )}
      onClick={() => onTabChange(value)}
    >
      {label}
    </button>
  );
};

TabBar.CircleTab = CircleTab;
TabBar.UnderlineTab = UnderlineTab;
TabBar.InterfaceTab = InterfaceTab;

export default TabBar;
