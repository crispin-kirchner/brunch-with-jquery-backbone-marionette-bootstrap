const HelloWorldModel = Backbone.Model.extend({
  title: 'No Title'
});

const HelloWorldView = Mn.View.extend({
  el: 'main',
  template: require('templates/hello-world')
});

$(() => {  
  let helloWorldView = new HelloWorldView({
    model: new HelloWorldModel({
      title: 'Hi World'
    })
  });
  
  helloWorldView.render();
});
