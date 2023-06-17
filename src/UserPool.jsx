import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId : 'ap-south-1_sytd6svIC',
    ClientId : '8cipjsc9rfp1ieo0ajndv13kh'
};

export default new CognitoUserPool(poolData);