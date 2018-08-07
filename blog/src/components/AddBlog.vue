<template>
  <div id="add-blog">
    <h2> 添加博客</h2>
    <form v-if="!submmited">
      <lable>博客标题</lable>
      <input type="text" v-model="blog.title" required>

      <lable>博客内容</lable>
      <textarea v-model="blog.content" name="" id="" cols="30" rows="10"></textarea>
      <div id="checkbok">
        <lable>Vue.js</lable>
        <input type="checkbox" value="Vue.js" v-model="blog.categorys">
        <lable>Node.js</lable>
        <input type="checkbox" value="Node.js" v-model="blog.categorys">
        <lable>React.js</lable>
        <input type="checkbox" value="React.js" v-model="blog.categorys">
        <lable>Angular4</lable>
        <input type="checkbox" value="Angular4" v-model="blog.categorys">
      </div>
      <lable>作者</lable>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submmited">
      <h3>您的博客添加成功</h3>
    </div>
    <div id="preview">
      <h3>博客总揽</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
     <ul>
       <li v-for="category in blog.categorys">
         {{category}}
       </li>
     </ul>
      <p>作者</p>
      <p>{{blog.author}}</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    data () {
      return {
        blog:{
          title:'',
          content:'',
          categorys:[],
          author:''
        },
        authors:['aaa','vvv','ccc'],
        submmited:false
      }
    },
    methods:{
      post:function () {
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
            title:this.blog.title,
            body:this.blog.content,
            userId:1
          }).then(function(data){
              this.submmited=true
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-blog{
  box-sizing: border-box;
}
  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #checkbox label{
    display: inline-block;
    margin-top: 0;
  }
  #checkbox input{
    display: inline-block;
    margin-right: 10px;
  }
textarea{
  height: 200px;
}
  button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
