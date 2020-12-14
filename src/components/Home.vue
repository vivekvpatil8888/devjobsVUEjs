<template>
  <div class="container">
    <Header />
    <div class="search-bar">
      <form @submit.prevent="getJobs">
        <i class="fas fa-search"></i
        ><input
          type="text"
          v-model="searchInput.search"
          name="description"
          placeholder="Filter by title, companies, expertise...."
        />
        <i class="fas fa-map-marker-alt"></i
        ><input
          type="text"
          name="location"
          v-model="searchInput.location"
          placeholder="Filter by location..."
        />
        <input
          type="checkbox"
          v-model="searchInput.fulltime"
          name="fultime"
          checked="true"
        />Full Time Only
        <button type="submit">Search</button>
      </form>
    </div>
    <div class="grid" v-if="alljobs.length">
      <div v-for="job in alljobs" :key="job.id">
        <router-link :to="`/job/${job.id}`">
          <div class="jobtile">
            <img v-bind:src="job.company_logo" width="60" height="60" />
            <p>{{ job.created_at }} o {{ job.type }}</p>
            <h1>{{ job.title }}</h1>
            <h5>{{ job.company }}</h5>
            <h5>{{ job.location }}</h5>
          </div>
        </router-link>
      </div>
    </div>
    <h1 v-else>Loading jobs......</h1>
  </div>
</template>

<script>
// import Data from "../data/tempJobData";
import Header from "./Header";

const URL =
  "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
export default {
  components: {
    Header,
  },
  name: "Home",
  data: function() {
    return {
      alljobs: [],
      job: {
        id: 1,
      },
      searchInput: {
        search: "",
        location: "",
        fulltime: true,
      },
    };
  },
  mounted: function() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json",
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.alljobs.push(...data);
      });
    // this.alljobs = Data;
  },
  methods: {
    getJobs() {
      console.log(
        "lol, someone clicked me with : " + Object.values(this.searchInput)
      );
      if (this.searchInput.location && this.searchInput.search) {
        this.searchJobs(
          "location=" +
            this.searchInput.location +
            "&search=" +
            this.searchInput.search
        );
      } else if (this.searchInput.location) {
        console.log("about to submit");
        this.searchJobs("location=" + this.searchInput.location);
      } else if (this.searchInput.search) {
        this.searchJobs("search=" + this.searchInput.search);
        console.log("nothing for now");
      }
    },
    searchJobs(query) {
      const searchURL = URL + "?";
      fetch(searchURL + query + "&full_time=" + this.searchInput.fulltime)
        .then((response) => response.json())
        .then((data) => {
          this.alljobs = [];
          this.alljobs.push(...data);
          console.log(this.alljobs);
        })
        .catch((e) => console.log("went wrong:" + e));
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
.jobtile {
  border: none;
  border-radius: 15px;
  background-color: var(--white);
  padding: 20px;
  margin: 50px 25px;
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  transition: width 2s, height 2s, transform 2s;
}
.jobtile:hover {
  transform: scale(1.1, 1.1);
}
.search-bar {
  border: none;
  border-radius: 5px;
  background-color: var(--white);
  padding: 20px;
  margin: 50px 25px;
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
}
router-link {
  text-decoration: none;
}
img {
  /* position: relative; */
  bottom: 50px;
  border: none;
  border-radius: 15px;
}
a {
  text-decoration: none;
}
.search-bar {
  text-align: center;
  position: sticky;
  top: 20px;
  /* padding: 12px 20px; */
}
input {
  margin: 2px 20px;
  background-color: val(--lightgray);
}
button {
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: large;
  padding: 10px 20px;
  border-color: var(--white);
  background-color: var(--purple);
  color: var(--white);
  display: inline-block;
  text-align: center;
  width: 90px;
}
input[type="text"] {
  width: 30%;
  font-size: 16px;
  font-family: inherit;
  border: none;
}
input[type="text"]:focus {
  border: none;
}
.container {
  background-color: var(--lightgray);
}
input[type="checkbox"] {
  border: none;
  font-size: large;
  padding: 10px;
}
@media only screen and (max-width: 780px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }
  .jobtile {
    margin: auto;
    padding: 1px;
    width: 250px;
  }
}
</style>
