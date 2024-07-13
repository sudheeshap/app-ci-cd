import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div
      className="bg-slate-400 py-5 w-full text-center m-0"
      data-testid="header"
    >
      <ul className="flex justify-center items-center">
        <li>
          <Link href="/restaurants" className="bg-slate-200 rounded-lg p-3 m-2">
            Restaurants
          </Link>
        </li>
        <li>
          <Link href="/contacts" className="bg-slate-200 rounded-lg p-3 m-2">
            Contacts
          </Link>
        </li>
        <li>
          <Link href="/rewards" className="bg-slate-200 rounded-lg p-3 m-2">
            Rewards
          </Link>
        </li>
        <li>
          <Link
            href="/subscriptions"
            className="bg-slate-200 rounded-lg p-3 m-2"
          >
            Subscriptions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
