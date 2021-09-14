module.exports = (Discord, client) => {
    console.log('CodeLyon Bot is Online!');


    client.user.setActivity('Credit goes to CodeLyon.', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
}
