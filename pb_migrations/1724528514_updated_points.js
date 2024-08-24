/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2ot833ebsbpbe4")

  collection.name = "question_points"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_gEwCjS4` ON `question_points` (\n  `question`,\n  `team`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e2ot833ebsbpbe4")

  collection.name = "points"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_gEwCjS4` ON `points` (\n  `question`,\n  `team`\n)"
  ]

  return dao.saveCollection(collection)
})
