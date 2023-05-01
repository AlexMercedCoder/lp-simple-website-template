import basics from "../json/basics.json";

function Events(props){
    return <section id="events">
              <h2>{basics.events.heading}</h2>
      <p>{basics.events.text}</p>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Useful Links
        </button>
        <ul class="dropdown-menu">
          {basics.events.links.map((link) => {
            return (
              <li>
                <a class="dropdown-item" href={link.url}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
}

export default Events