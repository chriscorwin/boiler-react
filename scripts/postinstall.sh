if [ -n "$HEROKU_APP_NAME" ]
then
  git clone https://$GITHUB_USER:$GITHUB_USER_ACCESS_TOKEN@$DESIGN_SYSTEM_REACT_REPO
else
  git clone git@github.com:salesforce-ux/design-system-react.git
fi

mv design-system-react node_modules
cd node_modules/design-system-react
npm install
cd ../..

cp -r node_modules/@salesforce-ux/design-system/assets public/
