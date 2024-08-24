/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ho9vt4jydolppv")

  collection.name = "questions"
  collection.indexes = [
    "CREATE INDEX `idx_l66cI9L` ON `questions` (`question_group`)",
    "CREATE INDEX `idx_5WtgGnI` ON `questions` (`sort_order`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4ho9vt4jydolppv")

  collection.name = "question"
  collection.indexes = [
    "CREATE INDEX `idx_l66cI9L` ON `question` (`question_group`)",
    "CREATE INDEX `idx_5WtgGnI` ON `question` (`sort_order`)"
  ]

  return dao.saveCollection(collection)
})
