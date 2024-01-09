import { NavTitleWrapper, TagLine, Title, TitleWrapper, Button } from "./NavTitle.styles";
import companyLogo from "../../assets/Image.png";
import ChevronDown from '../svg/ChevronDown'

const NavTitle = () => {
  return (
    <NavTitleWrapper>
      <img src={companyLogo} width={39} height={39} />
      <TitleWrapper>
        <Title>Nishyan</Title>
        <TagLine>Visit Store</TagLine>
      </TitleWrapper>
      <Button><ChevronDown /></Button>
    </NavTitleWrapper>
  );
};

export default NavTitle;
