function OrderStatusBadge({ status }) {
  return (
    <>
      {status == "out_for_delivery" ? (
        <div className="badge badge-sm bg-blue-200 text-blue-600">Shipped</div>
      ) : status == "pending" ? (
        <div className="badge badge-sm bg-purple-200 text-purple-600">Pending</div>
      ) : status == "processing" ? (
        <div className="badge badge-sm bg-orange-200 text-orange-600">Processing</div>
      ) : status == "delivered" ? (
        <div className="badge badge-sm bg-green-200 text-green-600">Delivered</div>
      ) : status == "cancelled" ? (
        <div className="badge badge-sm bg-red-200 text-red-600">Cancelled</div>
      ) : (
        ""
      )}
    </>
  );
}

export default OrderStatusBadge;
