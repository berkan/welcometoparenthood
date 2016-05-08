import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (!LinguisticStages.findOne()){
    console.log("no linguistic stages yet... creating from filesystem");
    // var fs = Meteor.npmRequire('fs');
    
    var filename = 'jsonfiles/'+"language-development--lynne-lawrence.json";

    try {
      var stages = JSON.parse(Assets.getText(filename));
      var ages = Object.keys(stages);
      for (var i=0; i<ages.length; i++) {
	var age = ages[i];
	var record = {"age": age, "child": stages[age].child, "adult": stages[age].adult}
	LinguisticStages.insert(record)
	console.log(record);
      }

    } catch(ex) {
      console.log(ex);
    }
  }

});
