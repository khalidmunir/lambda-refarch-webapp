// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7kd51agthttln0nb8u2nbabnt0",     // CognitoClientID
  "api_base_url": "https://1dxwz2ehfc.execute-api.eu-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-stackone.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d13ptplkk3v66d.amplifyapp.com"                                      // AmplifyURL
};

export default config;
