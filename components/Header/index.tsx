import Image from "next/image";
import Link from "next/link";
import { formattedDate } from "@/utils/formattedDate";
import { HeaderProps } from "@/@types/HeaderProps";
import "./Header.scss";

export const Header = ({ user }: HeaderProps) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width="33" height="33" />
            <h3>FocalPoint</h3>
          </Link>
        </div>
        <div className="navbar-welcome">
          <p>Bem-vindo de volta, {user}</p>
        </div>
        <div className="navbar-date">{formattedDate}</div>
      </nav>
      <hr className="navbar-line" />
    </>
  );
};
