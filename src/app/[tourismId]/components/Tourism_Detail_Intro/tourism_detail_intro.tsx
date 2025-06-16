// "use client";

// import { useEffect, useState } from "react";

// export default function TourismDetailIntro({
//   contentId,
//   contentTypeId,
// }: {
//   contentId: string;
//   contentTypeId: string;
// }) {
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   const apiKey = process.env.NEXT_PUBLIC_TOUR_API_KEY;
//   const url = `https://apis.data.go.kr/B551011/KorService2/detailIntro2?serviceKey=${apiKey}&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&_type=json&contentTypeId=${contentTypeId}&contentId=${contentId}`;

//   const fetchData = async () => {
//     if (!isLoading) setIsLoading(true);
//     const res = await fetch(url, {
//       next: { revalidate: 60 * 5 },
//     });

//     const json = await res.json();
//     const data = json;
//     setData(data.response.body.items.item[0]);
//     setIsLoading(false)
//     return data;
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log("client Detail intro: ", data);

//   return <div>{data ? <div>{data.playtime}</div> : <div>not a data</div>}</div>;
// }
