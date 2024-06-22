import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function Header() {
  return (
   <header className="flex justify-between items-center">
    <div className="flex items-center">
    <img  className="w-35 h-20"src="https://cdn.vectorstock.com/i/500p/17/09/deer-head-logo-black-silhouette-vector-46591709.jpg" alt="Logo" />

<nav className="items-center space-x-5 md:flex hidden ml-5 ">

    <a href="/help" className="text-sm sans serif">Help</a>
          <a href="/resource" className="text-sm sans serif">Resource</a>
          <a href="/pricing" className="text-sm sans serif">Pricing</a>
          <a href="/contactus" className="text-sm sans serif">Contact Us</a>
</nav>
      </div>
       
      <div className="flex items-center">
        <SignedOut>
        <SignInButton className="border-4 border-black mr-4  py-2 px-6 rounded-full"/>
      </SignedOut>
    
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
   </header>
  );
}

export default Header;
