import DataTable from "@/components/DataTable";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: "Name",
    cellClassName: "name-cell",
    cell: (coin) => {
      const item = coin.item;

      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      );
    },
  },
  {
    header: "24h Change",
    cellClassName: "name-cell",
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

      return (
        <div
          className={cn(
            "price-change",
            isTrendingUp ? "text-green-500" : "text-red-500",
          )}
        >
          <p>
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
          </p>
        </div>
      );
    },
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: (coin) => coin.item.data.price,
  },
];

const trendingCoinsData: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "btc",
      market_cap_rank: 1,
      thumb:
        "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1723520489",
      large:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1723520489",
      data: {
        price: 93004.63,
        price_change_percentage_24h: {
          usd: 2.5,
        },
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "eth",
      market_cap_rank: 2,
      thumb:
        "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1723520489",
      large:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1723520489",
      data: {
        price: 3450.25,
        price_change_percentage_24h: {
          usd: -1.3,
        },
      },
    },
  },
  {
    item: {
      id: "cardano",
      name: "Cardano",
      symbol: "ada",
      market_cap_rank: 4,
      thumb:
        "https://assets.coingecko.com/coins/images/325/thumb/cardano.png?1723520489",
      large:
        "https://assets.coingecko.com/coins/images/325/large/cardano.png?1723520489",
      data: {
        price: 1.15,
        price_change_percentage_24h: {
          usd: 3.8,
        },
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "sol",
      market_cap_rank: 5,
      thumb:
        "https://assets.coingecko.com/coins/images/4128/thumb/solana.png?1723520489",
      large:
        "https://assets.coingecko.com/coins/images/4128/large/solana.png?1723520489",
      data: {
        price: 189.45,
        price_change_percentage_24h: {
          usd: 5.2,
        },
      },
    },
  },
];

const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div className="" id="coin-overview">
          <div className="header pt-2">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1723520489"
              alt="Bitcoin"
              width={56}
              height={56}
            />
            <div className="info">
              <p>Bitcoin / BTC</p>
              <h1>$93,004.63</h1>
            </div>
          </div>
        </div>

        <p>Trending Coins</p>
        <DataTable
          data={trendingCoinsData}
          columns={columns}
          rowKey={(coin) => coin.item.id}
        />
      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
