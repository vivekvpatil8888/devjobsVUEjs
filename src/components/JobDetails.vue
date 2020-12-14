<template>
  <div class="container">
    <Header />
    <!-- <router-link to="/"><button>Back</button></router-link> -->
    <div v-if="JobDetails.length">
      <div v-for="val in JobDetails" :key="val.id">
        <div class="job">
          <div class="jobheader">
            <table>
              <tr>
                <td><img v-bind:src="val.company_logo" /></td>
                <td>
                  <h2>{{ val.company }}</h2>
                </td>
                <td>
                  <button>
                    <a href="{{val.company_url}}">Company Site</a>
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div class="jobdetails">
            <table>
              <tr>
                <td>
                  <p>
                    {{ val.created_at }}
                    <i class="fas fa-circle fa-1x"></i>
                    {{ val.type }}
                  </p>
                  <h1>{{ val.title }}</h1>
                  <p>{{ val.location }}</p>
                </td>
                <td>
                  <button><a href="{{val.how_to_apply}}">Apply Now</a></button>
                </td>
              </tr>
            </table>

            <span v-html="val.description"></span>
          </div>
          <div class="jobfooter">
            <h3>{{ val.title }}</h3>
            <button>Apply Now</button>
            <p>{{ val.company }}</p>
          </div>
        </div>
      </div>
    </div>
    <h2 v-else>Job details: Loading......</h2>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      JobId: "",
      JobDetails: [],
    };
  },
  mounted: function() {
    this.JobId = this.$route.params.id;
    console.log("jobid: " + this.JobId);
    fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.$route.params.id}.json`,
      {
        method: "get",
      }
    )
      .then((response) => {
        console.log("Method called: ");
        return response.json();
      })
      .then((data) => {
        this.JobDetails.push(data);
        console.log("JobDetails array: " + this.JobDetails);
      })
      .catch((e) => {
        console.log("error" + e);
      });
  },
};
</script>
<style scoped>
.container {
  background-color: var(--lightgray);
  font-family: "Josefin Sans", sans-serif;
}
.job {
  margin: 1px 100px;
  padding-left: 40px;
  padding-right: 40px;
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
}
a {
  text-decoration: none;
  color: var(--white);
}
.jobheader,
.jobfooter,
.jobdetails {
  border: none;
  border-radius: 15px;
  background-color: var(--white);
  padding: 20px;
  margin: 50px 25px;
  text-align: left;
  border: 10px;
  border-color: val(--lightgray);
}
.jobheader img {
  width: 80px;
  height: 80px;
}
.jobheader button {
  float: right;
}
.jobdetails button {
  float: right;
}
.jobfooter {
  border-radius: 0px;
}
.jobfooter h3,
button {
  display: inline;
}
.jobfooter button {
  float: right;
}
table {
  width: 100%;
}

@media only screen and (max-width: 780px) {
  * {
    display: block;
    padding: 0px;
  }
  .container {
    margin: 1px;
  }
  .job {
    margin: 10px 10px;
    padding: 1px 1px;
  }
  .jobheader,
  .jobfooter,
  .jobdetails {
    border: none;
    border-radius: 15px;
    background-color: var(--white);
    padding: 2px;
    text-align: left;
    border: 10px;
    border-color: val(--lightgray);
  }
  .jobheader img {
    width: 20px;
    height: 20px;
  }
  .jobheader button {
    float: right;
  }
  .jobdetails button {
    float: right;
  }
  .jobfooter {
    border-radius: 0px;
  }
  .jobfooter h3,
  button {
    display: block;
  }
  .jobfooter button {
    float: right;
  }
}
</style>
