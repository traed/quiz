/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wymr6rd9vk2yz6i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkyraigh",
    "name": "ticket_color",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dvkllai6",
    "name": "word",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^\\S*$"
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a0x8wj0v",
    "name": "on_complete_password",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wymr6rd9vk2yz6i")

  // remove
  collection.schema.removeField("dkyraigh")

  // remove
  collection.schema.removeField("dvkllai6")

  // remove
  collection.schema.removeField("a0x8wj0v")

  return dao.saveCollection(collection)
})
