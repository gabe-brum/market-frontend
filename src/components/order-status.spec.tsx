import { render } from "@testing-library/react";
import { OrderStatus } from "./order-status";

describe("Order Status", () => {
  it("should display the right text based on pending order status", () => {
    // Pending
    const wrapper = render(<OrderStatus status="pending" />);

    const statusText = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });
  it("should display the right text based on canceled order status", () => {
    // Canceled
    const wrapper = render(<OrderStatus status="canceled" />);

    const statusText = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });
  it("should display the right text based on delivered order status", () => {
    // Delivered
    const wrapper = render(<OrderStatus status="delivered" />);

    const statusText = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
  it("should display the right text based on processing order status", () => {
    // Processing
    const wrapper = render(<OrderStatus status="processing" />);

    const statusText = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
  it("should display the right text based on delivering order status", () => {
    // Delivering
    const wrapper = render(<OrderStatus status="delivering" />);

    const statusText = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });
});
