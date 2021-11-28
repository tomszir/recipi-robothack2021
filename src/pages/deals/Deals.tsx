import Button from "@/components/ui/Button";
import { Deal } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";
import DealItem from "./components/DealItem";
import * as S from "./Deals.styled";

import { deals as dealsJson } from "@/assets/deals.json";

export default function DealPage() {
  const [searchText, setSeachText] = useState<string>("");
  const [deals, setDeals] = useState<Deal[]>([]);
  const [filteredDeals, setFilteredDeals] = useState<Deal[]>([]);

  const mappedDeals = () =>
    filteredDeals.map((deal, i) => {
      console.log(deal);
      return <DealItem deal={deal} key={i} />;
    });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeachText(e.target.value);
    setFilteredDeals(
      deals.filter((d) =>
        d.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    setDeals(dealsJson);
    setFilteredDeals(dealsJson);
  }, []);

  return (
    <S.Container>
      <h1>Browse local deals and ingredients</h1>
      <p>
        Irure adipisicing quis eu sint tempor dolor ullamco qui sit nisi duis
        aliquip.
      </p>
      <div className="flex">
        <S.Input
          value={searchText}
          onChange={onChange}
          placeholder="Search for something..."
        />
        <Button label="Search" />
      </div>
      <h2>Deals Near You</h2>
      {filteredDeals.length > 1 ? (
        <>
          <S.Grid>{mappedDeals()}</S.Grid>
          <div style={{ margin: "0 auto", marginTop: "2rem", width: "30%" }}>
            <Button label="Load more" />
          </div>
        </>
      ) : (
        <h4>Could not find any deals with those criteria :{"("}</h4>
      )}
    </S.Container>
  );
}
