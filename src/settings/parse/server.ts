export const PARSE_SERVER_PROPERTY = {
  // Connection string for your MongoDB database
  databaseURI:
    process.env.DATABASE_URI ||
    "mongodb://onemorearc-admin:onemorearc-password@localhost:27017/admin?retryWrites=true&w=majority",
  appId: process.env.APP_ID || "myAppId",
  // Keep this key secret!
  masterKey: process.env.MASTER_KEY || "myMasterKey",
  // Don't forget to change to https if needed
  serverURL: process.env.SERVER_URL || "http://localhost:1337/api",
};
