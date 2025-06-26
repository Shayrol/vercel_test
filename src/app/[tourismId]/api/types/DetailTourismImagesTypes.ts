export type DetailTourismItemImage = {
  contentid: string;
  originimgurl: string;
  imgname: string;
  smallimageurl: string;
  cpyrhtDivCd: string;
  serialnum: string;
};

export type DetailTourismImageApiResponse = {
  response: {
    body: {
      items: {
        item: DetailTourismItemImage[];
      };
    };
    numOfRows: number;
    pageNo: number;
    totalCount: number;
  };
};
