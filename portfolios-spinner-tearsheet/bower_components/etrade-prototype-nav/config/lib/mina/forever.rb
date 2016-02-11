###########################################################################
# Forever Tasks
###########################################################################

namespace :forever do
  desc "Start Forever"
  task :start do
    queue %[cd #{deploy_to}/current/dist && forever start --minUptime 5000 --spinSleepTime 2000 --uid "#{app_name}" server.js]
  end

  desc "Restart Forever"
  task :restart do
   queue %[cd #{deploy_to}/current/dist && forever restart #{app_name}]
  end

  desc "Stop Forever"
  task :stop do
    queue %[cd #{deploy_to}/current/dist && forever stop #{app_name}]
  end
end
