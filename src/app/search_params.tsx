import { createLoader, parseAsString } from "nuqs/server";

// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const coordinatesSearchParams = {
  contentTypeId: parseAsString.withDefault(""),
  areaCode: parseAsString.withDefault("전체 지역"),
  arrangeType: parseAsString.withDefault("R"),
  keywordType: parseAsString.withDefault(""),
  categoryCode: parseAsString.withDefault("전체"),
  pageNo: parseAsString.withDefault("1"),
};

export const loadSearchParams = createLoader(coordinatesSearchParams);
