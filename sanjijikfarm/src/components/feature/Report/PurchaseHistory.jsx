export default function PurchaseHistory({ history }) {
    return (
      <div className="mt-3 px-4">
        {history.map(({ date, items }, idx) => (
          <div key={idx} className="mb-6">
            <p className="text-body-2-med">{date}</p>
            {items.map((item, i) => (
              <div key={i} className="flex justify-between items-center px-3 py-3 mb-2">
                <div>
                  <p className="text-body-2-med">{item.store}</p>
                  <p className="text-title-3 font-bold">{item.product}</p>
                </div>
                <p className="text-main-green text-title-3 font-bold">{item.amount}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  