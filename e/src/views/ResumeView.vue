<script>
import SkillsList from "../components/SkillsList.vue";
import EductionList from "../components/EductionList.vue";
import ExperienceList from "../components/ExperienceList.vue";
import Contacts from "../components/Contacts.vue";

export default {
  components: { SkillsList, EductionList, ExperienceList, Contacts },
  data() {
    return {
      resumeData: {},
    };
  },
  created() {
    fetch("/src/data/resume.json")
      .then((response) => response.json())
      .then((data) => (this.resumeData = data))
      .catch((error) => console.log("Error - Resume data not fetched..."));
  },
};
</script>

<template>
  <main>
    <header>
      <main class="header-main-container">
        <div class="portrait-container">
          <img
            src="../images/1611160422206.jpg"
            alt="Image of me"
            class="portrait"
          />
        </div>

        <div class="header-main-content">
          <h1>Camilla Mogstad</h1>
          <h2>Java Development Student</h2>
          <p>
            Java Development Student in the final year of a two year YH-program.
            <br />
            Formely employed for five years as an IT consultant responsible for
            managing the implementation of large IT-systems.
          </p>
        </div>
      </main>

      <aside class="header-aside-container">
        <div class="header-aside-content">
          <Contacts
            class="contacts"
            v-for="contact in resumeData.contacts"
            :contact="contact"
          />
        </div>
      </aside>
    </header>

    <div class="resume">
      <main class="resume-main-container">
        <section class="resume-section-one">
          <h1>Experience</h1>
          <hr />
          <ExperienceList
            class="experience-list"
            v-for="experience in resumeData.experiences"
            :experience="experience"
          />
        </section>

        <section class="resume-section-two">
          <h1>Education</h1>
          <hr />
          <EductionList
            class="education-list"
            v-for="education in resumeData.educations"
            :education="education"
          />
        </section>
      </main>

      <aside class="resume-aside-container">
        <h3>Skills</h3>
        <SkillsList
          class="skills-list"
          v-for="skill in resumeData.skills"
          :skill="skill"
        />
      </aside>
    </div>
  </main>
</template>

<style scoped>
/* -------- SHARED VALUES -------------------- */
.resume-main-container,
.resume-aside-container {
  box-sizing: border-box;
}

.header-main-container,
.resume-aside-container {
  background-color: #d1d5fa;
}

/* -------- HEADER -------------------- */
header {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

/* INTRODUCTION */
.header-main-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-bottom: 0.5rem;
}

.header-main-content {
  align-self: center;
}

.header-main-content p {
  text-align: justify;
}

.header-main-content h1,
h2 {
  margin-top: 0;
  text-align: center;
}

.header-main-content h2 {
  font-weight: normal;
}

.portrait-container {
  margin-right: 2rem;
}

.portrait {
  border-radius: 50%;
  border: 3px solid #4e64be;
  width: 100%;
}

/*CONTACT*/
.header-aside-container {
  box-sizing: border-box;
  background-color: #a9dfe2;
  padding: 1rem;
}

h3 {
  text-align: center;
}

.header-aside-content {
  font-size: 1.1rem;
  display: flex;
  justify-content: space-around;
}

/* -------- RESUME -------------------- */
.resume {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}

/* SKILLS & EXPERIENCE */
.resume-main-container {
  width: 70%;
  margin-right: 0.5rem;
  padding: 1%;
  padding-top: 0;
}

/* SKILLS */
.resume-section-one {
  margin-bottom: 3rem;
}

.education-list {
  margin-bottom: 2rem;
}

/* EXPERIENCE */
.experience-list {
  margin-top: 1.5rem;
  margin-bottom: 3rem;
}

.contacts {
  display: inline;
}

/* EDUCATION */
.resume-aside-container {
  width: 30%;
  padding: 3%;
  padding-top: 0;
}

.resume-aside-container h3 {
  margin-bottom: 2rem;
}

.resume-aside-container ul {
  list-style: none;
  padding-left: 0;
}

.resume-aside-container li {
  margin-bottom: 2rem;
}

.resume-aside-container h4 {
  margin: 0;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

/* -------- MEDIA QUERIES -------------------- */

@media (max-width: 1000px) {
  .header-main-container {
    align-items: center;
    width: fit-content;
  }

  .resume {
    flex-direction: column;
  }

  .resume-main-container {
    width: 100%;
  }

  .resume-aside-container {
    width: 100%;
    margin: 0;
  }
}

@media (max-width: 900px) {
  .header-aside-content {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 800px) {
  .header-main-container {
    flex-direction: column;
  }

  .portrait-container {
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }

  .portrait {
    border-radius: 50%;
    border: 3px solid #4e64be;
    width: 50%;
  }
}

@media (max-width: 600px) {
  .header-main-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 500px) {
  .header-aside-content {
    align-items: flex-start;
    font-size: 1rem;
  }
}
</style>
