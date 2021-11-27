import Button from "@/components/ui/Button";
import { Deal } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";
import DealItem from "./components/DealItem";
import * as S from "./Deals.styled";

const RIMI_DEAL: Deal = {
  name: "Fresh Meat",
  type: "Store",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1613454320437-0c228c8b1723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  price: {
    amount: 3.99,
    currency: "EUR",
  },
  seller: {
    name: "Rimi",
    logoUrl:
      "https://media-exp1.licdn.com/dms/image/C560BAQHawI0hlmTDEg/company-logo_200_200/0/1554115922281?e=2159024400&v=beta&t=sF3h1IBHL6GIAaDRHBVzrr6wz_U1qBw4Iwo9-UvfrsI",
  },
};

const FARMER_DEAL: Deal = {
  name: "Fresh Potatoes",
  type: "Community",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1604300721398-3f58fdf81780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG90YXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  price: {
    amount: 5.99,
    currency: "EUR/kg",
  },
  seller: {
    name: "Farmer Joe",
    logoUrl:
      "https://images.unsplash.com/photo-1545830790-68595959c491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
};

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
    const d = new Array(200).fill(undefined).map(() => {
      return Math.random() * 2 < 1 ? RIMI_DEAL : FARMER_DEAL;
    });

    setDeals(d);
    setFilteredDeals(d);
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
