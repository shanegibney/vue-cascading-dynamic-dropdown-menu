<template>
<div class="hello">
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-12">
          <h3>Dual Dynamic Cascade Dropdown Menu: </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 inputs">
          <div class="dropdown">
            <strong>Topic: </strong>
            <select v-model="selectedTopic" name="topic" id="topic">
              <option v-for="(topic_obj, topic) in subjects" :value="topic">{{topic}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-8 inputs">
          <span v-if="selectedTopic">Selected topic: {{selectedTopic}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 inputs">
          <div class="dropdown">
            <strong>Sub-topic: </strong>
            <select :disabled="subTopics.length == 0" v-model="selectedSubTopic" name="subtopic" id="subtopic">
              <option v-for="subTopics in subTopics">{{subTopics}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-8 inputs">
          <span v-if="selectedSubTopic">Selected sub-topic: {{selectedSubTopic}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      selectedTopic: "",
      selectedSubTopic: "",
      subjects: {
        "Topic One": ["Sub-topic One A", "Sub-topic One B", "Sub-topic One C"],
        "Topic Two": ["Sub-topic Two A", "Sub-topic Two B", "Sub-topic Two C"],
        "Topic Three": ["Sub-topic Three A", "Sub-topic Three B", "Sub-topic Three C"]
      },
      topics: [],
      subTopics: [],
      selectedTopic: "",
      selectedSubTopic: ""
    }
  },
  watch: {
    selectedTopic: function() {
      this.topics = [];
      this.subTopics = [];
      this.selectedSubTopic = "";
      if (this.selectedTopic.length > 0) {
        this.subTopics = this.subjects[this.selectedTopic]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.inputs {
  text-align: left;
}

.row {
  margin: 15px;
}
</style>
