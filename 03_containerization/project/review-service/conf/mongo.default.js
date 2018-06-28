module.exports = {
	connectors: {
		mongo: {
			connector: '@axway/api-builder-plugin-dc-mongo',
			url: `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.DBLINK}`,
			
			// Create models based on the schema that can be used in your API.
			//
			// Use this with care, API Builder determines the schema for the auto generated
			// models by sampling the collection. If the collection is empty then the schema
			// cannot be determined and so the model will not be generated.
			// This will cause issues if there are Flows/APIs depending on that model schema.
			// Instead you should prefer explicitly creating Models in the API Builder UI.
			generateModelsFromSchema: true,

			// Whether or not to generate APIs based on the methods in generated models.
			modelAutogen: true
		}
	}
};