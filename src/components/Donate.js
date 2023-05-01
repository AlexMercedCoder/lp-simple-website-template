import basics from "../json/basics.json";

function Donate(props){
    return <section id="donate">
              <h2>{basics.donate.heading}</h2>
      <p>{basics.donate.text}</p>
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
          {basics.donate.links.map((link) => {
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

export default Donate