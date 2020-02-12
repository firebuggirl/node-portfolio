# Deploy errors => Troubleshooting

https://stackoverflow.com/questions/18469737/git-push-heroku-master-error-repository-not-found

- Inside your project folder go into `.git/confi`g and look at what (if anything) is defined under the heroku remote.

- git push https://git.heroku.com/juliettet-node-portfolio.git HEAD:master


- To get the path/repo for your project go into you application settings on heroku and it should be listed.

- run `git remote`
