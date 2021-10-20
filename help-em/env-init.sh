curl -L https://github.com/katacoda/scenario-examples/blob/master/custom-events/site/site.tar.gz?raw=true > ~/site.tar.gz
tar -xvzf ~/site.tar.gz -C /root
curl -L https://github.com/rgaete/katacoda-scenarios/blob/main/help-em/site/exercise.js?raw=true > exercise.js
npm install
echo "Starting... this will block the rest of the commands from running..."
npm start
