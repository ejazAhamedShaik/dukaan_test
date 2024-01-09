import SearchBar from "../searchBar/SearchBar";
import { HelpIcon, MenuIcon, SolidChevronDown } from "../svg";
import {
  HeaderWrapper,
  HelpSection,
  PageTitle,
  Section,
} from "./paymentPageHeader.styles";

const PaymentsPageHeader = () => {
  return (
    <HeaderWrapper>
      <Section>
        <PageTitle>Payments</PageTitle>
        <HelpSection>
          <HelpIcon />
          <p>How it works</p>
        </HelpSection>
      </Section>
      <Section>
        <SearchBar placeholder="Search features, tutorials, etc." />
      </Section>
      <Section className="flex_end">
        <MenuIcon />
        <SolidChevronDown />
      </Section>
    </HeaderWrapper>
  );
};

export default PaymentsPageHeader;
