# Party Starter Server Application

# Setting Up Dev Environment

## Install NodeJS

https://nodejs.org/en/download/

## Install Docker

### MacOS

https://docs.docker.com/docker-for-mac/install/

### Windows

https://docs.docker.com/docker-for-windows/install/

## Install GIT

https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Install MySQL Workbench

https://dev.mysql.com/downloads/workbench/

# Building and running the app

After cloning the repository install the node packages:

```bash
npm install
```

Containerize the app for Docker:

```bash
docker-compose build
```

Run the app:

```bash
docker-compose up
```

Stop the app:

```bash
docker-compose down
```

View the app in a browser:

http://localhost:8080/

# Connecting with MySQL Workbench

To view your database changes and troubleshoot issues launch MySQL Workbench from your programs list.

![](https://miro.medium.com/max/1400/1*VcfoGGvE6rtXsaykGxpvCw.png)

Click `Store in Keychain`

**Username:** user
**Password:** password

# Contributing to the project

In general you should only work on one thing at a time. For example, if you're developing on a specific member function of a class, don't make changes to another member function if it isnt necessary in order to develop the function you're working on. Use branches to organize your code changes into small bite-sized chunks.

## Branches

Make sure you follow these guidelines while developing your code:

### Never develop on the master branch

Always create a new branch for each feature or bug you work on. To create a new branch:

```bash
git checkout <source-branch>

git checkout -b new-branch-name

git push origin new-branch-name
```

### Branch naming

Branches should be named using ***kebab-case*** in the following structure:

For top-level branch:

```bash
feature-name-of-feature
```

For sub-level branch:

```bash
feature--subfeature-name-of-feature
```

For issues:

```bash
issue-issueID-name-of-issue
```

## Committing your code

All commits should compile and run. Think of commits like a save point in the video game, if we have to roll back to a specific point we want to make sure that the app still works. If you commit code that doesnt compile and run and we roll back to that commit it will break the app.

### Commit messages

Commit messages provide a short description of the changes made to the code in that commit. They should be written in plain english in ***present tense*** verbage:

#### Examples

##### Good

```bash
git commit -m "add addition function for two numbers"
```

```bash
git commit -m "fix function call syntax error"
```

```bash
git commit -m "change person_name variable from var to const"
```

##### Bad

```bash
git commit -m "added addition function for two numbers"
```

```bash
git commit -m "I did some stuff and now it works"
```

```bash
git commit -m "fixed it"
```

```bash
git commit -m "changed a variable and added a comment"
```

## Tracking your code

When you are working on a story card be sure to move the card to the "In Dev" column. On the right side of the card there should be a "Github" button. Select the branch you created for the card in the dropdown list

### Submitting your code for review

Create a pull request for your branch by following the steps listed here:

https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request

