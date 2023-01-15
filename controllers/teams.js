function newTeam(req, res) {
  res.render('teams/new', {
    title: 'Add Team'
  })
}

export {
  newTeam as new,
}