const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://herman:CKOzRj7DUju84Zud@cluster0.xhbhvwv.mongodb.net/growthspurt?retryWrites=true&w=majority"
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);