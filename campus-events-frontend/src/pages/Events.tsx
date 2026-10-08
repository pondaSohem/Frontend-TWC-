import EventCard from "../components/EventCard";

interface Event {
  id: number;
  title: string;
  location: string;
  price: number;
}

const events: Event[] = [
  { id: 1, title: "Campus Tech Conference",
    location: "Main Campus Hall",
    price: 15 },
  { id: 2, title: "Sports Day",
    location: "University Sports Centre",
    price: 5 }
];


function Events() {
    return (
        <>
            <section>
                <h2>Events</h2>
                <p>Our events will appear here.</p>
            </section>
            
            {events.map(event => (
            <EventCard
                key={event.id}
                title={event.title}
                location={event.location}
                price={event.price}
            />
            ))}
        </>
    );
}

export default Events;