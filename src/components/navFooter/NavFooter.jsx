import { WalletNavIcon } from "../svg";
import { FooterContent, IconWrapper, NavFooterWrapper } from "./navFooter.styles";

const NavFooter = () => {
  return (
    <NavFooterWrapper>
      <IconWrapper>
        <WalletNavIcon />
      </IconWrapper>
      <FooterContent>
        <p className="heading">Available Credits</p>
        <p className="value">222.10</p>
      </FooterContent>
    </NavFooterWrapper>
  );
};

export default NavFooter;
