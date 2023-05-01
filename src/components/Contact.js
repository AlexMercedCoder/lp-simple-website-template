import basics from "../json/basics.json";

function Contact(props) {
  return (
    <section id="contact">
      <h2>{basics.contact.heading}</h2>
      <p>{basics.contact.text}</p>
      {basics.contact.contacts.map((person) => {
        return (
          <ul class="list-group list-group-horizontal amlist" key={person.name}>
            <li class="list-group-item">{person.name}</li>
            <li class="list-group-item">{person.title}</li>
            <li class="list-group-item">{person.email}</li>
          </ul>
        );
      })}
    </section>
  );
}

export default Contact;
