module.exports = app => {
  
  const Stat = app.mongoose.model('Stat', {
    users: Number,
    categories: Number,
    articles: Number,
    created_at: Date
  })

  const get = (req, res) => {

    Stat.findOne({}, {}, {sort: {created_at: -1}})
      .then(stats => {

        const defaultStat = {
          users: 0,
          categories: 0,
          articles: 0,
          created_at: new Date()
        }

        return res.json(stats || defaultStat)

      })
  }

  return { Stat, get }

}