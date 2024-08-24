/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "43snf5nxfvzuv6p",
    "created": "2024-08-24 19:27:52.922Z",
    "updated": "2024-08-24 19:27:52.922Z",
    "name": "teams",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gwbbjxmd",
        "name": "key",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 10,
          "max": 10,
          "pattern": "^[a-z0-9]$"
        }
      },
      {
        "system": false,
        "id": "ozo7vies",
        "name": "competition",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jrc7se9xo2k58wt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "yzubwrtb",
        "name": "status",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "created",
            "awaiting_approval",
            "accepted",
            "incomplete",
            "awaiting_checkin",
            "checkedin",
            "checkedout",
            "deleted"
          ]
        }
      },
      {
        "system": false,
        "id": "qoigapqh",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_SMR4dR0` ON `teams` (`key`)",
      "CREATE INDEX `idx_7QBapCF` ON `teams` (`competition`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("43snf5nxfvzuv6p");

  return dao.deleteCollection(collection);
})
