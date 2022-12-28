<script>
import Contacts from "../components/Contacts.vue";
import data from "../data/resume.json";

export default {
  components: { Contacts },
  data() {
    return {
      contactData: data,
    };
  },
};
</script>

<template>
  <main>
    <section class="about-me">
      <h3>Hello,</h3>
      <p>
        My name is Camilla, and I am a Java development student. I am currently
        looking for my first job as a developer, however I do have previous
        experience from the tech industry and with this text I hope to give you
        a short introduction to my career and who I am as a person.
      </p>
      <p>
        I discovered my interest in IT while at university and completed a
        post-graduate master’s degree in Information Systems. After graduating,
        I spent five years working as an IT consultant where I participated in
        projects that implemented out-of-the box systems for large companies.
      </p>
      <p>
        I have had different roles over the years, mostly in positions of
        leadership like team lead and test lead. Within my department I was
        considered an HR specialist, having worked on an HR system
        implementation and earned two Oracle HR certifications. I also worked a
        lot with integrations and data migration.
      </p>
      <p>
        My career was progressing well as an IT consultant. I was promoted
        twice, and my responsibilities were growing - so why did I want to
        become a developer?
      </p>
      <p>
        I enjoyed the IT industry but felt like I was in the wrong role. I
        wished to be on the other side, building and understanding systems
        rather than being a manager. As such, I made the decision to return to
        school and learn to be a developer. A decision I am still extremely
        happy with.
      </p>
      <p>
        I find much more satisfaction as a developer with the logical thinking,
        problem solving, and creativity it demands. My strengths can also shine
        in this role – being well organized, structured, and having great
        attention to detail.
      </p>
      <p>
        My experience as an IT consultant taught me many things, but the main
        take away that influences me as a developer is communication. It is so
        important to be able to communicate with different stakeholders and
        adjust one’s language depending on the listeners knowledge. But also, to
        speak up when problems arise and being able to discuss solutions. With
        good communication proper decisions can be made, customers feel
        comfortable, and the expected product be delivered.
      </p>
      <p>
        My second take away from my previous experience is teamwork. As a team
        lead, I have always strived to create an environment where my team
        members can speak freely and where we support one another. Not only does
        that boost productivity, but more importantly it makes people feel
        happier and give them a sense of belonging.
      </p>
      <p>
        My studies have covered application development as well as frontend and
        backend web development. I have enjoyed all of it and would be happy to
        continue working in any of these areas as a professional, or indeed try
        something entirely new.
      </p>
      <p>
        Please feel free to get in touch so we can get to know each other and
        discuss what I can bring to your company.
      </p>
      <p>Hope to hear from you!</p>
      <p>Camilla Mogstad</p>
    </section>
    <Contacts
      class="contacts"
      v-for="contact in contactData"
      :contact="contact"
    />
  </main>
</template>

<style>
.about-me {
  margin-bottom: 2rem;
}

.contacts {
  margin-bottom: 0.5rem;
}
</style>
