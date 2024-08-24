/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "u1yr9mvsc4iz232",
    "created": "2024-08-24 19:50:46.578Z",
    "updated": "2024-08-24 19:50:46.578Z",
    "name": "ticket_coupon_weight",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tagngwn9",
        "name": "from_station",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "wymr6rd9vk2yz6i",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "vqfjrxea",
        "name": "to_station",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "wymr6rd9vk2yz6i",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "whef76dq",
        "name": "weight",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("u1yr9mvsc4iz232");

  return dao.deleteCollection(collection);
})
