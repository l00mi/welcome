Template.name.events({
    'keyup input': function (event, template) {
        var $update = {};
        $update["profile."+event.target.id] = event.target.value;
        Meteor.users.update({_id:Meteor.userId()}, {$set: $update});
    },
    'change select': function (event, template) {
        var $update = {};
        $update["profile."+event.target.id] = event.target.value;
        Meteor.users.update({_id:Meteor.userId()}, {$set: $update});
    },
});


Template.stats.countLang = function(language) {
    if(typeof(language) == "object") {
        return Meteor.users.find({}).fetch().length;
    } else if (typeof(language) == "string") {
        return Meteor.users.find({"profile.language": language}).fetch().length;
    }
}

Template.stats.countTopic = function(topic) {
    if(typeof(topic) == "object") {
        return Meteor.users.find({}).fetch().length;
    } else if (typeof(topic) == "string") {
        return Meteor.users.find({"profile.topic": topic}).fetch().length;
    }
}


Template.name.currentLang = function(language) {
    if(!_.isUndefined(Meteor.user().profile)) {
    if(!_.isUndefined(Meteor.user().profile.language)) {
        if(Meteor.user().profile.language == language) {
            return " selected";
        } else {
            return "";
        };
    }
    }
}

Template.name.currentTopic = function(topic) {
    if(!_.isUndefined(Meteor.user().profile)) {
    if(!_.isUndefined(Meteor.user().profile.topic)) {
        if(Meteor.user().profile.topic == topic) {
            return " selected";
        } else {
            return "";
        };
    }}
}
