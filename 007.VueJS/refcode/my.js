window.addEventListener("load", () => {
    var app = new Vue({
        el: "#app",
        data: {
            option: 'all',
            search: '',
            categories: [],
            todos: [],
            viewType: 'list',
            sortType: 'sort-numeric-up',
            buttons: {
                'view': [
                    {'class':'list', 'title':'view in list', selected:true},
                    {'class':'th-large', 'title':'view in thumbnail', selected:false}
                ],
                'sort': [
                    {'class':'sort-numeric-up', 'title':'sort by deadline', selected:true},
                    {'class':'sort-alpha-down', 'title':'sort by alphabet', selected:false},
                    {'class':'star', 'title':'sort by stars', selected:false}
                ]
            }
        },
        methods: {
          toNumber: function(number){
              if(typeof number == 'string'){
                number = Number(number);
              }
              return number;
          },
          substring : function(str, startIdx, length){
              return str.substr(startIdx, length);
          },
    
          formatDate: function(str){
              var result = str.substr(0, 4)+'-'+str.substr(4, 2)+'-'+str.substr(6, 2);
              if(result.replace(/-/g, '') == this.getTodayDate){
                  result = "today " + str.substr(8, 2)+':'+str.substr(10, 2)+':'+str.substr(12, 2);
              }
              return result;
          },
          checkTodo: function(index){
              var todoObj = this.todos[index];
    
              if(todoObj.endDate){
                  todoObj.endDate = '';
              } else {
                  var d = new Date();
                  this.todos[index].endDate = this.getTodayDate 
                      + d.toTimeString().replace(/[^0-9]/g, '').substr(0, 6);
              }
          }
        },
        computed: {
          getTodayDate: function(){
              var d = new Date();
              var arr = d.toLocaleString().replace(/ /g, '').split('.');
              return arr[0]+(arr[1].length==1?"0"+arr[1]:arr[1])+(arr[2].length==1?"0"+arr[2]:arr[2]);
          }
        },
        created: function(){
            sendAjax({
                url: 'myList.json',
                method:'GET',
                success: function(resp){
                    var respObj = JSON.parse(resp);
                    app.categories = respObj.category;
                    app.todos = respObj.todos;
                }
            });
        }
    })
});