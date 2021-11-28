import * as S from "./dashboard/styled";

import { recipes } from "@/assets/recipes.json";
import RecipeListItem from "@/components/ui/RecipeListItem";
import { Tag, TagList } from "@/components/ui/RecipeListItem.styled";
import { FiHash } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const usedTags: string[] = [];
  const tags = recipes
    .map((r, i, a) => {
      const val = (r.tags || []).filter(
        (tag) => usedTags.filter((u) => u === tag).length < 2
      );
      usedTags.push(...val);
      return val;
    })
    .flat(1);

  useEffect(() => {
    const _tags = searchParams.get("tags");

    if (!_tags) {
      return;
    }

    const _tagList = _tags.split(",");

    setActiveTags(_tagList);
  }, []);

  useEffect(() => {
    setSearchParams("");
    setSearchParams(`tags=${activeTags.join(",")}`);
  }, [activeTags]);

  return (
    <S.Container>
      <h2>Discover all of our recipes</h2>
      <TagList>
        {tags.map((t, i) => {
          return (
            <Tag
              key={i}
              onClick={() => {
                if (activeTags.includes(t)) {
                  setActiveTags([...activeTags.filter((_t) => _t !== t)]);
                } else {
                  setActiveTags([...activeTags, t]);
                }
              }}
              active={activeTags
                .map((t) => t.toLowerCase())
                .includes(t.toLowerCase())}
            >
              <FiHash />
              {t}
            </Tag>
          );
        })}
      </TagList>
      <S.List>
        {recipes.map((r, i) => {
          return <RecipeListItem recipe={r} key={i} />;
        })}
      </S.List>
    </S.Container>
  );
}
