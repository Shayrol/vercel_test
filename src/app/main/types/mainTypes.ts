export type TourismItem = {
  addr1: string;
  addr2: string;
  areacode: string;
  cat1: string;
  cat2: string;
  cat3?: string;
  contentid: string;
  contenttypeid: string;
  createdtime?: string;
  firstimage?: string;
  firstimage2?: string;
  mapx: string;
  mapy: string;
  mlevel?: string;
  modifiedtime?: string;
  readcount?: string;
  sigungucode?: string;
  tel?: string;
  title: string;
  zipcode?: string;
};

export type TourismApiResponse = {
  response: {
    body: {
      items: {
        item: TourismItem[];
      };
      numOfRows: number;
      pageNo: number;
      totalCount: number;
    };
  };
};
