const snoowrap = require('snoowrap');

var conn = new snoowrap({
    username: 'cal-bones',
    password: 'oskiEatsB0nes',
    clientId: 'IazvYTGqoBO4FA',
    clientSecret: 'TDIZgBrszmzEF7KlmMBeEDiR8SM',
    userAgent: 'cal-bones'
});

conn.getHot().map(post => post.title).then(console.log);
