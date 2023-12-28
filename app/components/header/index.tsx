import React from 'react';

const Header = () => {
  return (
    <div
      className="bg-slate-400 py-5 w-full text-center m-0"
      data-testid="header"
    >
      <ul className="flex justify-center items-center">
        <li>
          <button className="bg-slate-200 rounded-lg p-3 m-2">
            Restaurants
          </button>
        </li>
        <li>
          <button className="bg-slate-200 rounded-lg p-3 m-2">Contacts</button>
        </li>
        <li>
          <button className="bg-slate-200 rounded-lg p-3 m-2">Rewards</button>
        </li>
        <li>
          <button className="bg-slate-200 rounded-lg p-3 m-2">
            Subscription
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
