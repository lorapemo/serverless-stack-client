const config = {
s3: {
REGION: "us-east-2",
BUCKET: "notas-app-uploads",
},
apiGateway: {
REGION: "us-east-2",
URL: "https://77ods88mo3.execute-api.us-east-2.amazonaws.com/dev",
},
cognito: {
REGION: "us-east-2",
USER_POOL_ID: "us-east-2_CnZ5mXsWm",
APP_CLIENT_ID: "5dc25f7r8sgd1fbtf5obrjjg1u",
IDENTITY_POOL_ID: "us-east-2:5165dcb6-b485-4878-ab76-8bac4f0ad86c",
},
};
export default config;