import { useState } from "react";
import Card from "../../components/card/Card";
import MonthsDropdown from "../../components/monthsDropdown/MonthsDropdown";
import PaymentsPageHeader from "../../components/paymentsPageHeader/PaymentsPageHeader";
import SearchBar from "../../components/searchBar/SearchBar";
import { DownloadIcon, SortIcon } from "../../components/svg";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";
import {
  Button,
  ButtonsWrapper,
  CardsSection,
  GridContainer,
  Header,
  HeadingSection,
  MainBody,
  SearchSection,
  Section,
  SectionHeading,
  TableSection,
} from "./paymentsPage.styles";

const PaymentsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchQuery = (value) => {
    setSearchQuery(value);
  };

  return (
    <GridContainer>
      <Header>
        <PaymentsPageHeader />
      </Header>
      <MainBody>
        <Section>
          <HeadingSection>
            <SectionHeading>Overview</SectionHeading>
            <MonthsDropdown />
          </HeadingSection>
          <CardsSection>
            <Card cardTitle="Online Orders" cardValue="231" />
            <Card cardTitle="Amount Received" cardValue="₹23,92,312.19" />
          </CardsSection>
        </Section>
        <Section>
          <SectionHeading>Transactions | This Month</SectionHeading>
          <TableSection>
            <SearchSection>
              <SearchBar placeholder="Search By Order Id" updateSearchQuery={updateSearchQuery} />
              <ButtonsWrapper>
                <Button>
                  Sort <SortIcon />
                </Button>
                <Button>
                  <DownloadIcon />
                </Button>
              </ButtonsWrapper>
            </SearchSection>
            <TransactionsTable searchQuery={searchQuery} />
          </TableSection>
        </Section>
      </MainBody>
    </GridContainer>
  );
};

export default PaymentsPage;
