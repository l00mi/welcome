Meteor.subscribe("directory");

Template.accounts.users = function () {
    return Meteor.users.find({}, {sort: {"profile.lastname": 1}});
};


Template.user.events({
    'mousedown .note': function (evt, tmpl) {
      Session.set("activeNote", this._id);
      Session.set("offsetX", evt.pageX - parseInt(tmpl.find('.note').style.left, 10));
      Session.set("offsetY", evt.pageY - parseInt(tmpl.find('.note').style.top, 10));
    },

    'mouseup .note': function () {
      Session.set("activeNote", undefined);
    }
});

Template.accounts.events({
    'mousemove': function (evt) {
        if(Session.get("activeNote")){
            var $update = {};
            $update["profile.top"] = evt.pageY - Session.get("offsetY");
            $update["profile.left"] = evt.pageX - Session.get("offsetX");
            Meteor.users.update({_id:Session.get("activeNote")}, {$set: $update});
        }
    },
    'mouseup': function () {
      Session.set("activeNote", undefined);
    }
});
