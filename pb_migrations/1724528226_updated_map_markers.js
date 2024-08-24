/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkxo90577eysqmb")

  collection.indexes = [
    "CREATE INDEX `idx_qGJVTGR` ON `map_markers` (`map`)",
    "CREATE INDEX `idx_DuNMabx` ON `map_markers` (`question`)",
    "CREATE INDEX `idx_HJT7d5r` ON `map_markers` (`station`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkxo90577eysqmb")

  collection.indexes = []

  return dao.saveCollection(collection)
})
