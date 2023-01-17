import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => (
  <header className="flex justify-between p-4">
    <div className="flex items-center">
      <Link href="/">
        <div className="flex justify-center items-center">
          <Image src="/logo.svg" width="32" height="32" alt="Logo" />
          <span className="ml-3 font-bold">Your application</span>
        </div>
      </Link>
    </div>
    <div className="flex items-center">
      <SignedOut>
        <Link href="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/user-profile"
          afterSignOutUrl="/"
        />
      </SignedIn>
    </div>
  </header>
)

export default Header