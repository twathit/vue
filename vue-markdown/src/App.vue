<template>
  <div id="app">
    <div class="editor clearfix">
      <nav class="navbar navbar-default">
        <ul class="nav navbar-nav">
          <li><a v-on:click="addmk('**')"><i class="fa fa-bold"></i></a></li>
        </ul>
      </nav>
      <textarea class="editor-text" rows="20" v-model="content"></textarea>
      <v-markdown v-bind:content="content">{{content}}</v-markdown>
    </div>
    
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  data(){
    return {
      content:''
    }
  },
  methods:{
    addmk:function(markdown){
      this.content+=markdown;
    }
  },
  components:{
    'v-markdown':VueMarkdown
  }
}
</script>

<style>
.editor {
  width: 80%;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  margin-right: auto;
  margin-left: auto;
}

.navbar {
  margin-bottom: 0;
  border-radius: 0;
  min-height: 30px;
}

.navbar-default {
  border: 0;
}

.navbar-nav>li>a {
  padding: 8px 10px;
}

.editor-text {
  border: 0;
  float: left;
  width: 50%;
  margin-right: 5px;
  border-right: 1px solid #e7e7e7;
}
</style>
