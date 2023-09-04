import Link from "next/link";

export default function Navigation(props) {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <Link
          className={"nav-link " + (props.selectedTab === "/" ? "active" : "")}
          onClick={() => props.onClick("/")}
          id="/-tab"
          data-toggle="tab"
          href="/"
          role="tab"
          aria-controls="/"
          aria-selected={props.selectedTab === "/"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={
            "nav-link " +
            (props.selectedTab === "shipping-requests" ? "active" : "")
          }
          onClick={() => props.onClick("shipping-requests")}
          id="shipping-requests-tab"
          data-toggle="tab"
          href="shipping-requests"
          role="tab"
          aria-controls="shipping-requests"
          aria-selected={props.selectedTab === "shipping-requests"}
        >
          Shipping Requests
        </Link>
      </li>
    </ul>
  );
}
