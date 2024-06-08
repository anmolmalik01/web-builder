import { ThemeToggle } from '~/routes/resources.theme-toggle';
import { Command } from 'lucide-react';
import { Link } from '@remix-run/react';
import { Drawer, DrawerContent, DrawerTrigger } from '~/components/ui/drawer';
import { Button } from './ui/button';
import { CodeView } from './code-view';

export const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between p-4 w-full border-b">

      <div className='flex flex-row'>
        <div>
        <Link to="/" className="flex items-center space-x-2">
          <Command className="" />
          <h2 className=" font-semibold">Drag-cn</h2>
        </Link>
          </div>
        <Link to="/" className='flex justify-center items-center pl-8 font-light text-base'>Help</Link>
        <Link to="/" className='flex justify-center items-center pl-8 font-light text-base'>Setting</Link>
      </div>

      <div>
      <Link to="/" className='flex justify-center items-center px-2 py-1 text-base bg-gray-300 text-black rounded-md  shadow-md'>Preview</Link>
      </div>

      {/* <ThemeToggle /> */}
    </nav>
  );
};
