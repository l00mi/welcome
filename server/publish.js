Meteor.publish("directory", function () {
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1, createdAt: 1}});
});

Meteor.users.allow({
    update: function (userId, doc, fieldNames, modifier) {
        return true;
    }
});
