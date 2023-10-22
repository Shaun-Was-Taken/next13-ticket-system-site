import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
  title: "Dojo Helpdesk | Tickets",
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Open Tickets</small>
          </p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>

      {/* only the TicketList will be waited not the others */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
