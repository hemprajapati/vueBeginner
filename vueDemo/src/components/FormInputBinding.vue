<template>
  <div class="mt-5 form-group">
    <div class="row w-100">
      <div class="m-auto col-6">
        <form @submit="submitApplication">
          <div class="form-group mt-4">
            <label for="firstname">First name</label>
            <input
              type="text"
              class="form-control"
              id="firstname"
              placeholder="Enter First Name"
              v-model="applicationData.firstname"
            />
          </div>
          <div class="form-group mt-4">
            <label for="lastname">Last name</label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Enter Last Name"
              v-model="applicationData.lastname"
            />
          </div>
          <div class="form-group mt-4">
            <label for="emailAddress">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailAddress"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="applicationData.emailAddress"
            />
          </div>
          <div class="form-group mt-3">
            <label for="experience">Select experience</label>
            <select
              class="form-control"
              id="experience"
              v-model="applicationData.experience"
            >
              <option>0-2 years</option>
              <option>3-5 years</option>
              <option>6-9 years</option>
              <option>10-15 years</option>
              <option>15+ yerars</option>
            </select>
          </div>
          <div class="form-group mt-3">
            <label for="pastExperience"
              >Tell us about your past experience</label
            >
            <textarea
              class="form-control"
              id="pastExperience"
              placeholder="write about your experience ...."
              rows="3"
              v-model="applicationData.pastExperience"
            ></textarea>
          </div>

          <div class="mt-3">Choose Your skill set</div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="webDesining"
              value="Web Desining"
              v-model="applicationData.technologyStacks"
            />
            <label for="webDesining">Web Desining</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="cloudComputing"
              value="Cloud computing"
              v-model="applicationData.technologyStacks"
            />
            <label for="cloudComputing">Cloud Computing</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="testing"
              value="Testing"
              v-model="applicationData.technologyStacks"
            />
            <label for="testing">Testing</label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="dataScience"
              value="dataScience"
              v-model="applicationData.technologyStacks"
            />
            <label for="dataScience">Data Science</label>
          </div>

          <div>Ready to relocate</div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="yes"
              id="yes"
              value="yes"
              checked
              v-model="applicationData.readytoReloacate"
            />
            <label class="form-check-label" for="yes">Yes </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="no"
              id="no"
              value="no"
              v-model="applicationData.readytoReloacate"
            />
            <label class="form-check-label" for="no">No</label>
          </div>
          <button type="submit" class="mt-4 btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInputBinding",
  data() {
    return {
      applicationData: {
        firstname: "",
        lastname: "",
        experience: "",
        pastExperience: "",
        technologyStacks: [],
        readytoReloacate: "yes",
      },
    };
  },
  methods: {
    submitApplication(e) {
      e.preventDefault();
      console.log(this.applicationData);
    },
  },
};
</script>

<style scoped></style>
