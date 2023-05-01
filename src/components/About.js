import basics from "../json/basics.json";

function About(props){
    return <section id="about">
        <h2>{basics.about.heading}</h2>
        <p>{basics.about.text}</p>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Useful Links
  </button>
  <ul class="dropdown-menu">
    {basics.about.links.map((link) => {
        return <li><a class="dropdown-item" href={link.url}>{link.text}</a></li>
    })}
  </ul>
</div>

    </section>
}

export default About