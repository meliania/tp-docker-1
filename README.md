# TP Docker and CI

## Todo

The purpose of this activity is to dockerise this nodejs application.

Therefore you will have to create a workflow system allowing to build this application `Only when a push is done`

## Bonus

By default you application will run on port 80 inside of your docker container.

If you provide the environnement variable ``port`` to your application it will change the port where your application is listenning on.

Now the purpose is to change change to port where your application is listenning on with the docker CLI

## Reminder

To install all nodejs's dependencies you have to run the following command
```bash
yarn install
```

To run all test of this nodejs application you have to run 
```bash
yarn run test
```
