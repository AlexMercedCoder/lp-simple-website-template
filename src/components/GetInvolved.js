import basics from "../json/basics.json";

function GetInvolved(props) {
  return (
    <section id="getinvolved">
      <h2>{basics.getinvolved.heading}</h2>
      <p>{basics.getinvolved.text}</p>
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
          {basics.getinvolved.links.map((link) => {
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
  );
}

export default GetInvolved;
