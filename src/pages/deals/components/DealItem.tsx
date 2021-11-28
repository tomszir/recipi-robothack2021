import * as S from "./DealItem.styled";

import { Deal } from "@/types";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiPlus, FiShoppingCart } from "react-icons/fi";

import { recipes } from "@/assets/recipes.json";

export interface DealItemProps {
  deal: Deal;
}

export default function DealItem({ deal }: DealItemProps) {
  const navigate = useNavigate();

  return (
    <S.Item>
      <S.ThumbnailWrapper>
        <img className="thumbnail" src={deal.thumbnailUrl} alt="thumbnail" />
        <div className="seller">
          <img className="logo" src={deal.seller.logoUrl} alt="seller logo" />
          {deal.seller.name}
          <FiCheck />
        </div>
      </S.ThumbnailWrapper>
      <div className="content">
        <div className="brand" style={{ marginBottom: 4 }}>
          <span>{deal.type}</span>
        </div>
        <h2>
          {deal.name} {deal.brand && deal.brand}
        </h2>
        <div className="price">
          <span>
            <b>{deal.price.amount}</b> {deal.price.currency}
          </span>
        </div>
        <div className="buttons">
          <Button
            onClick={() => {
              navigate(`/recipe/${Math.floor(Math.random() * recipes.length)}`);
            }}
            label={<span style={{ marginLeft: 6 }}>Suggest me a recipe</span>}
          />
          <Button
            type="outline"
            label={<FiShoppingCart size={18} />}
            onClick={() => {
              if (deal.link) {
                window.open(deal.link);
              }
            }}
          />
        </div>
      </div>
    </S.Item>
  );
}
