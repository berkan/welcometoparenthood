import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Router.configure({
  layoutTemplate: "ApplicationLayout"
});

Router.route('/', function() {
  this.render('navbar', {to:'header'});
  this.render('introduction', {to:'main'});
});

Router.route('/psycho-motor', function() {
  this.render('navbar', {to:'header'});
  this.render('psycho_motor', {to:'main'});
});


Router.route('/developing-language', function() {
  this.render('navbar', {to:'header'});
  this.render('developing_language', {to:'main'});
});


Template.developing_language.helpers({
  states: function() {
    return [
      { time: 1, title: "first", text: "hello first"},
      { time: 2, title: "second", text: "hello second"},
      { time: 3, title: "third", text: "hello third"},
      { time: 4, title: "fourth", text: "hello fourth"},    
    ]
  }
  
});

Template.developing_language.onRendered(function() {
  var $cntl = this.$('.cntl');
  $cntl.cntl(
    {
      revealbefore: 300,
      anim_class: 'cntl-animate',
      onreveal: function(e){
	console.log(e);
      }
    });
	     
  console.log("hello");
});


Template.psycho_motor.onRendered(function() {
  this.$('img[usemap]').rwdImageMaps();  
});

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });
