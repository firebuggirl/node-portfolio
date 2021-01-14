# Deploy errors => Troubleshooting

https://stackoverflow.com/questions/18469737/git-push-heroku-master-error-repository-not-found

- Inside your project folder go into `.git/confi`g and look at what (if anything) is defined under the heroku remote.

- git push https://git.heroku.com/juliettet-node-portfolio.git HEAD:master


- To get the path/repo for your project go into you application settings on heroku and it should be listed.

- run `git remote`


## Heroku stack update 1-14-21


```yaml
# find current stack
heroku stack
# set stack
heroku stack:set heroku-18 -r heroku stack:set heroku-18
```

## Testing an app on a new stack

https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack


## Manually created test app

```yaml
cd ./

# error!! Name is too long (maximum is 30 characters)
heroku create --remote heroku-20 --stack heroku-20 <your app name with heroku-20 appended>  


# Creates a new app named “<your app name with heroku-20 appended>”;
# Sest the stack image to the Heroku-20 stack for that newly created app;
# Sets up a new Git remote named “heroku-20”.


# Migrating add-ons and config vars

# list existing add-ons => none in this case
heroku addons --remote heroku

# create corresponding counterparts for each on test app:
heroku addons:create --remote heroku-20 <add-on>

# examine existing config vars
heroku config --shell --remote heroku

# set config vars on new test app
heroku config:set --remote heroku-20 <name>=<value>

# Deploytest app
git push heroku-20 master

heroku open --remote heroku-20
heroku logs --remote heroku-20
```
