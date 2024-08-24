/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kokesfyqs3q530h")

  collection.name = "question_responses"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kokesfyqs3q530h")

  collection.name = "question_response"

  return dao.saveCollection(collection)
})
