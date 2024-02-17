import { useEffect, useState } from "react";
import { TrendingList } from "../components/TrendingList";

import { getTrending } from "../api";
export default function HomePage() {
  const [trending, setTrending] = useState();
  useEffect(() => {
    const localGetTranding = async () => {
      const response = await getTrending();
      setTrending(response.data.results);
    };
    localGetTranding();
  }, []);
  return (
    <div>
      <TrendingList trending={trending} />
    </div>
  );
}
