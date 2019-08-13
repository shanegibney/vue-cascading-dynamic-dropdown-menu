<template>
<div class="hello">
  <div class="container">
    <div class="jumbotron">
      <div class="row">
        <div class="col-md-12">
          <h3>Triple Dynamic Cascade Dropdown Menu: </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 inputs">
          <div class="dropdown">
            <strong>Topic: </strong>
            <select v-model="selectedTopic">
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
            <select :disabled="subTopics.length == 0" v-model="selectedSubTopic">
              <option v-for="(subTopic_obj, subTopic) in subTopics">{{subTopic}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-8 inputs">
          <span v-if="selectedSubTopic">Selected sub-topic: {{selectedSubTopic}}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 inputs">
          <div class="dropdown">
            <strong>Sub-sub-topic: </strong>
            <select :disabled="subsubTopics.length == 0" v-model="selectedSubSubTopic">
              <option v-for="subsubTopic in subsubTopics">{{subsubTopic}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-8 inputs">
          <span v-if="selectedSubSubTopic">Selected sub-sub-topic: {{selectedSubSubTopic}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CascadeTwo',
  props: {
    msg: String
  },
  data: function() {
    return {
      subjects: {
        "Topic One": {
          "Sub-topic One A": ["Sub-sub-topic One A a", "Sub-sub-topic One A b", "Sub-sub-topic One A c"],
          "Sub-topic One B": ["Sub-sub-topic One B a", "Sub-sub-topic One B b", "Sub-sub-topic One B c"],
          "Sub-topic One C": ["Sub-sub-topic One C a", "Sub-sub-topic One C b", "Sub-sub-topic One C c"]
        },
        "Topic Two": {
          "Sub-topic Two A": ["Sub-sub-topic Two A a", "Sub-sub-topic Two A b", "Sub-sub-topic Two A c"],
          "Sub-topic Two B": ["Sub-sub-topic Two B a", "Sub-sub-topic Two B b", "Sub-sub-topic Two B c"],
          "Sub-topic Two C": ["Sub-sub-topic Two C a", "Sub-sub-topic Two C b", "Sub-sub-topic Two C c"]
        },
        "Topic Three": {
          "Sub-topic Three A": ["Sub-sub-topic Three A a", "Sub-sub-topic Three A b", "Sub-sub-topic Three A c"],
          "Sub-topic Three B": ["Sub-sub-topic Three B a", "Sub-sub-topic Three B b", "Sub-sub-topic Three B c"],
          "Sub-topic Three C": ["Sub-sub-topic Three C a", "Sub-sub-topic Three C b", "Sub-sub-topic Three C c"]
        }
      },
      // topics: [],
      subTopics: [],
      subsubTopics: [],
      selectedTopic: "",
      selectedSubTopic: "",
      selectedSubSubTopic: ""
    }
  },
  watch: {
    selectedTopic: function() {
      this.subTopics = [];
      this.subsubTopics = [];
      this.selectedSubTopic = "";
      this.selectedSubSubTopic = "";
      if (this.selectedTopic.length > 0) {
        this.subTopics = this.subjects[this.selectedTopic]
      }
    },
    selectedSubTopic: function() {
      this.subsubTopics = [];
      this.selectedSubSubTopic = "";
      if (this.selectedSubTopic.length > 0) {
        this.subsubTopics = this.subjects[this.selectedTopic][this.selectedSubTopic]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  /* margin: 40px 0 0; */
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
