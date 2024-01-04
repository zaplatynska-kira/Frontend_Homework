// rafce - react arrow function component export

//import React from "react";

/*const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="commonButton">Home</li>
          <li className="commonButton">About Me</li>
          <li className="commonButton">Star Wars</li>
          <li className="commonButton">Contact</li>
        </ul>
      </nav>
      <h1>Luke Skywalker</h1>
    </header>
  );
};

export default Header;
*/

 //изменить код, чтобы Компонент Header 
 //имел дочерний элемент Navigation,
 // который бы имел дочерний элемент NavItem 
 //с информацией об каждом элементе навигационного меню.
 import React from "react";

 interface NavItemProps {
   text: string;
 }
 
 const NavItem: React.FC<NavItemProps> = ({ text }) => (
   <li className="commonButton">{text}</li>
 );
 
 const Navigation = () => (
   <nav>
     <ul>
       <NavItem text="Home" />
       <NavItem text="About Me" />
       <NavItem text="Star Wars" />
       <NavItem text="Contact" />
     </ul>
   </nav>
 );
 
 const Header = () => {
   return (
     <header>
       <Navigation />
       <h1>Luke Skywalker</h1>
     </header>
   );
 };
 
 export default Header;
 
