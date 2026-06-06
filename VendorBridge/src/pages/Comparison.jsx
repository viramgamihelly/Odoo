import { useState, useMemo } from "react";

const initialQuotes = [
  {
    id: "Q-001",
    rfqId: "RFQ-2026-001",
    vendor: "Infra Supplies Pvt Ltd",
    price: 500000,
    deliveryDays: 10,
    rating: 4.8,
  },
  {
    id: "Q-002",
    rfqId: "RFQ-2026-001",
    vendor: "GreenDesk Furnishings",
    price: 450000,
    deliveryDays: 12,
    rating: 4.5,
  },
  {
    id: "Q-003",
    rfqId: "RFQ-2026-001",
    vendor: "Prime Office Solutions",
    price: 520000,
    deliveryDays: 8,
    rating: 4.9,
  },
];

export default function Comparison() {
  const [rfqId, setRfqId] = useState("RFQ-2026-001");

  const quotes = initialQuotes.filter((q) => q.rfqId === rfqId);

  const bestPrice = useMemo(() => {
    return Math.min(...quotes.map((q) => q.price));
  }, [quotes]);

  const fastestDelivery = useMemo(() => {
    return Math.min(...quotes.map((q) => q.deliveryDays));
  }, [quotes]);

  const highestRating = useMemo(() => {
    return Math.max(...quotes.map((q) => q.rating));
  }, [quotes]);

  return (
    <div className="content">

      {/* HEADER */}
      <div className="page-head">
        <div>
          <div className="eyebrow">Procurement</div>
          <h2>Quotation Comparison</h2>
          <p className="subtitle">
            Compare vendor quotations side-by-side
          </p>
        </div>
      </div>

      {/* RFQ SELECT */}
      <div className="card" style={{ marginBottom: "20px" }}>
        <label>Select RFQ</label>
        <input
          value={rfqId}
          onChange={(e) => setRfqId(e.target.value)}
          placeholder="Enter RFQ ID"
        />
      </div>

      {/* COMPARISON TABLE */}
      <div className="card">
        <h3>Comparison Table</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Price</th>
              <th>Delivery Days</th>
              <th>Rating</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {quotes.map((q) => {
              const isBestPrice = q.price === bestPrice;
              const isFastest = q.deliveryDays === fastestDelivery;
              const isTopRated = q.rating === highestRating;

              return (
                <tr key={q.id}>
                  <td>{q.vendor}</td>

                  <td>
                    {isBestPrice ? (
                      <span style={{ color: "#8dffb8", fontWeight: "bold" }}>
                        ₹{q.price} ⭐ Best Price
                      </span>
                    ) : (
                      `₹${q.price}`
                    )}
                  </td>

                  <td>
                    {isFastest ? (
                      <span style={{ color: "#b9d5ff", fontWeight: "bold" }}>
                        {q.deliveryDays} days 🚚 Fastest
                      </span>
                    ) : (
                      `${q.deliveryDays} days`
                    )}
                  </td>

                  <td>
                    {isTopRated ? (
                      <span style={{ color: "#ffd28a", fontWeight: "bold" }}>
                        {q.rating} ⭐ Top Rated
                      </span>
                    ) : (
                      q.rating
                    )}
                  </td>

                  <td>
                    {
                      (
                        (q.rating * 0.4) +
                        ((bestPrice / q.price) * 5) +
                        ((fastestDelivery / q.deliveryDays) * 5)
                      ).toFixed(2)
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}