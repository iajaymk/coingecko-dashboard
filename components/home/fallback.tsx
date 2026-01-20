import DataTable from "@/components/DataTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton skeleton" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const skeletonColumns: DataTableColumn<TrendingCoin>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: () => (
        <div className="name-link">
          <div className="name-image skeleton" />
          <div className="name-line skeleton" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: () => (
        <div className="flex gap-1 items-center">
          <div className="change-icon skeleton" />
          <div className="change-line skeleton" />
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: () => <div className="price-line skeleton" />,
    },
  ];

  // Create 5 dummy rows for skeleton
  const skeletonData: TrendingCoin[] = Array.from({ length: 5 }, (_, i) => ({
    item: {
      id: `skeleton-${i}`,
      name: "",
      symbol: "",
      market_cap_rank: 0,
      thumb: "",
      large: "",
      data: {
        price: 0,
        price_change_percentage_24h: {
          usd: 0,
        },
      },
    },
  }));

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        <Table className="custom-scrollbar">
          <TableHeader>
            <TableRow className="hover:bg-transparent!">
              {skeletonColumns.map((column, index) => (
                <TableHead
                  key={index}
                  className="bg-dark-400 text-purple-100 py-4 first:pl-5 last:pr-5"
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {skeletonData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="overflow-hidden rounded-lg border-b border-purple-100/5 hover:bg-dark-400/30! relative"
              >
                {skeletonColumns.map((column, colIndex) => (
                  <TableCell
                    key={colIndex}
                    className="py-5 first:pl-5 last:pr-5"
                  >
                    {column.cell(row, rowIndex)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
