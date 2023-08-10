// Test ID: IIDSAT
import OrderItem from "./OrderItem";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-4 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className=" text-xl font-bold">Status of Order# {id} </h2>

        <div className="space-x-2">
          {priority && (
            <span className=" rounded-full bg-red-700 px-3 py-1 uppercase tracking-wide text-stone-100">
              Priority
            </span>
          )}
          <span className=" rounded-full bg-green-700 px-3 py-1 uppercase tracking-wide text-stone-100">
            {status} order
          </span>
        </div>
      </div>
      <div className="flex flex-col rounded-sm bg-stone-400 p-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold text-stone-700">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <ul className="divide-y-2 divide-stone-400/50">
        {cart.map((pizza) => {
          return (
            <OrderItem
              item={pizza}
              key={pizza.pizzaId}
              ingredients={
                fetcher.data?.find((item) => item.id === pizza.pizzaId)
                  .ingredients
              }
              isLoadingIngredients={fetcher.state === "loading"}
            />
          );
        })}
      </ul>
      <div className="space-y-3 bg-stone-400 p-3 ">
        <p className="text-sm font-medium text-stone-700">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium text-stone-700">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className=" font-bold text-stone-700">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}
export const loader = ({ params }) => {
  const order = getOrder(params.orderId);
  return order;
};
export default Order;
