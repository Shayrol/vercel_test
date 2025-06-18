import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchDetailIntro } from "../fetchDetailIntro";
import { DetailTourismIntroApiResponse } from "../../types/DetailTourismIntroTypes";

export const useTourismDetailInfoData = ({
  tourismId,
  contentTypeId,
}: {
  tourismId: string;
  contentTypeId: string;
}): UseQueryResult<DetailTourismIntroApiResponse, Error> => {
  return useQuery({
    queryKey: ["tourismDetailInfoData", tourismId, contentTypeId],
    queryFn: () => fetchDetailIntro({ tourismId, contentTypeId }),
    staleTime: 1000 * 60 * 5,
  });
};
